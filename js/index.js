new Vue({
    el:'#vue-app',
    data: {
        name: 'Saurav Kumar',
        data: 'D1',
        website: 'https://google.com',
        htmlTag:'<h1> I am header</h1>'
    },
    methods: {
        greet: function(){

            return 'Welcome -> ' + this.name;
        }
    }
});