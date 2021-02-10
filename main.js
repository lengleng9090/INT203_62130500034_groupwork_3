const app = {
    data() {
        return {
            picture: [{title: 'Geysers Valley',country: 'Russia',url: './images/Geysers Valley.jpg',like:false},
                    {title: 'Khumbu Valley',country: 'Nepal', url: './images/Khumbu Valley.jpg',like:false},
                    {title: 'Waipi’o Valley',country: 'Hawaii', url: './images/Waipi’o Valley.jpg',like:false}
                ]
        }
    },
    methods: {
        toggleLike(index){
            this.picture[index].like = !this.picture[index].like
        }
    }

}
Vue.createApp(app).mount('#app')