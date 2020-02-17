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
    import authentication from '../services/authentication';

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
                login() {
                    // e.preventDefault()
                    authentication.login(this.credentials)
                        .then(() => {
                            this.$router.push({name: 'Home'})
                        })
                        .catch(reason => {
                            window.console.log(reason)
                        })
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

