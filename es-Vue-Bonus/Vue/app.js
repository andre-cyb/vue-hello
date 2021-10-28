window.addEventListener("DOMContentLoaded", function () {

    Vue.config.devtools = true;
    const vueApp = new Vue({
        el: "#app",
        data: {
            username: "Hy Vue!",
            classH1: "fw-bold center_text p-4",
            classImgCentered: "center_text",
            memeImgSrc: "img/meme-vue-hello.jpg",
            memeImgAlt: "img meme su Vue.Js"
        }

    });

});