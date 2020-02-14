<template>
    <div class="form-wrap">
        <div class="form-select" id="service-select">
            <select>
                <option value="1">Sou operador de máquinas</option>
                <option value="2">Sou mecanico</option>
            </select>
        </div>
        <input v-model="partner.name" type="text" class="form-control" placeholder="Nome">
        <input v-model="partner.phone" type="phone" class="form-control" placeholder="Contato">
        <input v-model="partner.email" type="email" class="form-control" placeholder="Email">
        <input v-model="partner.zip_code" type="email" class="form-control" placeholder="CEP">
        <input v-model="partner.range" type="text" class="form-control"
               placeholder="Raio de atendimento (km) ou lista de cidades que posso atender">

        <textarea name="message" cols="30" rows="5" placeholder="Serviços que eu faço"
                  class="form-control"></textarea>

        <textarea name="message" cols="30" rows="5" placeholder="Minhas especializacoes"
                  class="form-control"></textarea>
        <button class="primary-btn" v-on:click="create">Enviar</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Partner",
        data: () => {
            return {
                partner: {
                    name: '',
                    phone: '',
                    email: '',
                    zip_code: '',
                    range: '',
                }
            }
        },
        methods: {
            create: function () {
                axios.post('https://epesados-backend.herokuapp.com/api/v1/public/partner/signup', this.partner, {headers : {}})
                    .then((res) => {
                        window.console.log(res)
                    })
                    .catch(e => window.console.log(e))
            }
        }
    }
</script>

<style scoped>

</style>
