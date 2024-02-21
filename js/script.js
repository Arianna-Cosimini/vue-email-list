const { createApp } = Vue

createApp({
    data() {
        return {

            emailCasuale: "",
        }


    },

    mounted() {
        
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(emails => {
                console.log(emails)
                this.emailCasuale = emails.data.response
            });
    },

    methods: {
       
    }
}).mount('#app');