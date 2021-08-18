(ns cljs-shadow.core
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as string]))

(defonce app-state (atom {:text "Hello world!"}))
(def img-size (atom 600))

(defonce img (atom (js/Image.)))
(def imgurl (atom nil))

(defn img-to-octet [img-data-url]
  (string/replace
   img-data-url
   "data:image/png"
   "data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png"))

(defn on-download [{:keys [c] :as props}]
  (let [I   (js/Image.)
        d   (-> (.querySelector js/document "#download"))
        p   (-> (.querySelector js/document "#preview"))
        data-url (.toDataURL c)]
    (prn d)
    (set! (.-src p)
          data-url)
    (set! (.-href d)
          (img-to-octet data-url))))

(defn img-file-to-resized
  "
  Resize image file.

  :img     (js/File)
  :width   image size
  "
  [args]
  (let [{:keys [img width]} args
        I                   (js/Image.)]
    (js/Promise.
     (fn [resolve]
       (set! (.-onload I)
             (fn []
               (let [c            (.createElement js/document "canvas")
                     ctx          (.getContext c "2d")
                     factor       (/ width (.-width I))]

                 (set! (.-width c)
                       (js/Math.floor
                        (* factor (.-width I))))

                 (set! (.-height c)
                       (js/Math.floor
                        (* factor (.-height I))))

                 (.drawImage ctx I
                             0 0
                             (.-width c)
                             (.-height c))

                 (resolve (.toDataURL c))))))

     (set! (.-src I)
           (.createObjectURL js/URL img)))))

(defn handler [e]
  (let [fs      (.. e -target -files)
        f       (first fs)
        p       (.querySelector js/document "#preview")
        d       (.querySelector js/document "#download")]
    (-> (img-file-to-resized {:img f :width @img-size})
        (.then (fn [data-url]
                 (set! (.-src p) data-url)
                 (set! (.-href d) (img-to-octet data-url))))
        (.finally #(.log js/console "not fucking?")))))

(defn on-resize [e]
  (let [I   @img
        v (.. e -target -value)
        c   (-> (.querySelector js/document "#canvas"))
        ctx (.getContext c "2d")]
    (prn I)
    (.clearRect ctx 0 0 2000 2000)
    (.drawImage ctx  I 0 0)
    (on-download {:c c})))

(defn clear-img []
  (let [c       (-> (.querySelector js/document "#canvas"))
        ctx     (.getContext c "2d")]
    (.clearRect ctx 0 0 100 100)))

(defn upload-image-w-size [props]
)

(defn app []
  [:div
   [:div.level.level-items
    [:div.level-item.level-middle
     [:input.input {:type "number"
                    :step 100
                    :value @img-size
                    :on-change #(reset! img-size (.. % -target -value))}]]
    [:div.level-item.level-right
     [:a#download {:download "resized.jpg"
                   :href     "#"} "Download"]]]

   [:div ;.card.p-3
    [:div {:style {:border-radius   4
                   :display         "flex"
                   :justify-content "center"
                   :align-items     "center"
                   :height          "100%"}}
     [:figure.is-4by3
      [:img#preview {:src "https://bulma.io/images/placeholders/640x480.png"}]]]


    [:div.is-overlay
     {:style {:pointer-events "none"
              :display         "flex"
              :justify-content "center"
              :align-items     "center"
              :height          "100%"}}

     [:div.file.is-centered.is-boxed.is-success.is-light
      {:style {:pointer-events "painted"}}
      [:label.file-label
       [:input.file-input
        {:on-change handler
         :type "file"}]
       [:span.file-cta
        {:style {:position "fixed" :left 0 :bottom 0}}
        [:span.file-label "Select Image"]]]]]]])


(defn start []
  (reagent/render-component [app]
                            (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
