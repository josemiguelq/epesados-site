<template>
    <div class="mt-150">
        <form id="myform" ref="myform">
        </form>
        <div class="row d-flex align-items-center justify-content-center">
            <div class="form-wrap relative">
                <button class="primary-btn  m-3" v-on:click="criar">Enviar</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Checkout",
        data: () => {
            return {
                id: ''
            }
        },
        methods: {
            pay: function() {
                let foo = document.createElement('script');
                foo.setAttribute("src", "https://www.mercadopago.com.br/integrations/v1/web-tokenize-checkout.js");
                foo.setAttribute("data-preference-id", this.id)
                window.console.log(this.$refs)
                this.$refs.myform.appendChild(foo);
            },
            criar: function () {
                axios.post('http://localhost:7779/api/pagar', {})
                    .then(r => {
                        this.id = r.data.id
                        this.pay()
                    })
                    .catch(r => window.console.log(r))
            }
        }
    }
</script>
