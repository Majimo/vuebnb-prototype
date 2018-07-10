var app = new Vue({
    el: '#app',
    data: {
        headerImageStyle: {
            'background-image': 'url(sample/header.jpg)'
        },
        modalOpen: false,
        title: sample.title,
        adress: sample.adress,
        about: sample.about,
        contracted: true,
        amenities: sample.amenities,
        prices: sample.prices
    },
    methods: {
        escapeKeyListener: function (evt) {
            if (evt.keyCode === 27 && this.modalOpen) {
                this.modalOpen = false;
            }
        }
    },
    watch: {
        modalOpen: function () {
            var className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },
    created: function () {
        document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed: function() {
        document.removeEventListener('keyup', this.escapeKeyListener);
    },
});