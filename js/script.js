const { createApp } = Vue;

createApp({
    data() {
        return {
            activeIndex : 0,
            imagesArray : [
                'img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'
            ],

        }
    },
    methods : {
        nextSlide() {
            this.activeIndex++;
            let index = this.activeIndex;
            if (index >= this.imagesArray.length) {
                this.activeIndex = 0;
            }
        },
        prevSlide() {
            this.activeIndex--;
            let index = this.activeIndex;
            if (index < 0) {
                this.activeIndex = this.imagesArray.length - 1;
            }
        }
    }
}).mount('#app');