<template>
    <div v-bind:class="{ 'home-about-right': !resgisteredC }" class="col-lg-4 col-md-12 relative">
        <div v-if="resgisteredC">
            <h2>Parabéns! </h2>
            <p>Você esta muito perto de ser um de nossos especialista!</p>
            <p>Verifique seu email para concluir seu cadastro</p>
        </div>
        <div v-else class="form-wrap">
            <div class="form-select" id="service-select">
                <select>
                    <option value="1">Sou operador de máquinas</option>
                    <option value="2">Sou mecanico</option>
                </select>
            </div>
            <input v-model="partner.name" type="text" class="form-control" placeholder="*Nome">
            <input v-model="partner.phone" type="phone" class="form-control" placeholder="*Contato">
            <input v-model="partner.email" type="email" class="form-control" placeholder="*Email">
            <button class="primary-btn" v-on:click="create">Enviar</button>
            <p v-if="errors.length">
                <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
            <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
            </p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Partner",
        data: () => {
            return {
                errors: [],
                registeredPartner: false,
                partner: {
                    name: null,
                    phone: null,
                    email: null,
                }
            }
        },
        methods: {
            create: function () {
                this.checkForm()
                axios.post('https://epesados-backend.herokuapp.com/api/v1/public/partner', this.partner, {headers: {}})
                    .then((res) => {
                        this.registeredPartner = true
                        window.console.log(res)
                    })
                    .catch(e => window.console.log(e))
            },
            checkForm: function () {
                if (this.name && this.email) {
                    return true;
                }

                this.errors = [];
            }
        },
        computed: {
            resgisteredC: function () {
                return this.registeredPartner
            }
        }
    }
</script>

<style scoped>

</style>
