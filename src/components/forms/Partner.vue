<template>
    <div class="form-wrap">
        <div class="form-select" id="service-select">
            <select>
                <option value="1">Sou operador de máquinas</option>
                <option value="2">Sou mecanico</option>
            </select>
        </div>
        <input v-model="partner.name" type="text" class="form-control" placeholder="*Nome">
        <input v-model="partner.phone" type="phone" class="form-control" placeholder="*Contato">
        <input v-model="partner.email" type="email" class="form-control" placeholder="*Email">
        <input v-model="partner.zip_code" type="email" class="form-control" placeholder="*CEP">
        <input v-model="partner.range" min="0" type="text"
               class="form-control"
               placeholder="Raio de atendimento (km) ou lista de cidades que posso atender">

        <textarea name="message" cols="30" rows="5" placeholder="*Serviços que eu faço"
                  class="form-control"></textarea>

        <textarea name="message" cols="30" rows="5" placeholder="*Minhas especializações"
                  class="form-control"></textarea>
        <button class="primary-btn" v-on:click="create">Enviar</button>
        <p v-if="errors.length">
            <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
            <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
        </p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Partner",
        data: () => {
            return {
                errors: [],
                partner: {
                    name: null,
                    phone: null,
                    email: null,
                    zip_code: null,
                    range: null,
                }
            }
        },
        methods: {
            create: function () {
                this.checkForm()
                axios.post('https://epesados-backend.herokuapp.com/api/v1/public/partner/signup', this.partner, {headers: {}})
                    .then((res) => {
                        window.console.log(res)
                    })
                    .catch(e => window.console.log(e))
            },
            checkForm: function () {
                if (this.name && this.age) {
                    return true;
                }

                this.errors = [];

                if (!this.name) {
                    this.errors.push('O nome é obrigatório.');
                }
                if (!this.phone) {
                    this.errors.push('A idade é obrigatória.');
                }

            }
        }
    }
</script>

<style scoped>

</style>
