new Vue({
    el:'#vue-app',
    data: {
        name: 'Saurav Kumar',
        data: 'D1'
    },
    methods: {
        greet: function(){

            return 'Welcome -> ' + this.name;
        }
    }
});