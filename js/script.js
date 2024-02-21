const { createApp } = Vue

createApp({
    data() {
        return {

           emails: [],
        }


    },

    mounted() {
            for(let i = 0; i < 10; i++){

                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(email => {
                    this.emails.push(email.data.response)
                    console.log(this.emails)
                });
            }
    },

    methods: {
       
    }
}).mount('#app');