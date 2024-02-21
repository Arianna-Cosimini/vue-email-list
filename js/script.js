const { createApp } = Vue

createApp({
    data() {
        return {
            // array per inserire le mails generate
            emails: [],
            // creo variabile per tenere traccia delle mails generate
            emailGenerated:0,
        }


    },


    methods: {
        generateEmails() {
            // ciclo for per generare 10 mails
            for (let i = 0; i < 10; i++) {

                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(email => {
                        // inserisco email generate nell'array
                        this.emails.push(email.data.response)

                        // aumento il numero di email generate fino a quando gli elementi
                        // dell'array non saranno 10
                        this.emailGenerated++

                        
                    });
            }

        }
    }
}).mount('#app');