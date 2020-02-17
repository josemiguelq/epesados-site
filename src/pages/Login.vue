<template>
    <div>
        <div class="container" style="padding-top: 250px; padding-bottom: 100px">
            <div class="row d-flex align-items-center justify-content-center">
                <div class="form-wrap relative">
                    <input v-model="credentials.email" type="email" class="form-control m-3" placeholder="*Email">
                    <input v-model="credentials.password" type="password" class="form-control m-3" placeholder="*CEP">
                    <button class="primary-btn  m-3" v-on:click="login">Enviar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Login",
        data: () => {
            return {
                errors: [],
                credentials: {
                    name: null,
                    password: null,
                }
            }
        },
        methods: {
            login: function () {
                this.checkForm()
                axios.post('https://epesados-backend.herokuapp.com/api/v1/users/login', this.credentials, {headers: {}})
                    .then((res) => {
                        localStorage.set('token', JSON.stringify(res.data.token));
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

