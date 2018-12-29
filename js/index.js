new Vue({
    el:'#vue-app',
    data: {
        name: 'Saurav Kumar',
        data: 'D1',
        website: 'https://google.com'
    },
    methods: {
        greet: function(){

            return 'Welcome -> ' + this.name;
        }
    }
});