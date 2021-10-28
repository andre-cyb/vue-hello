window.addEventListener("DOMContentLoaded", function () {

    Vue.config.devtools = true;
    const vueApp = new Vue({
        el: "#app",
        data: {
            username: "Hy Vue!",
            classH1: "fw-bold center_text"
        }

    });

});