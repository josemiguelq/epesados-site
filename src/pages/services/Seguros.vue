<template>
    <section class="service-area section-gap" id="service">
        <div class="container">
            <form class="form-wrap" action="#">
                <div class="form-select" id="service-select">
                    <select class="col-md-12">
                        <option value="1">Construção</option>
                        <option value="2">Florestal</option>
                        <option value="2">Mineração</option>
                    </select>
                </div>
                <input v-model="form.name" type="text" class="form-control my-3" placeholder="Nome">
                <input v-model="form.phone" type="phone" class="form-control my-3" placeholder="Contato">
                <input v-model="form.email" type="email" class="form-control my-3" placeholder="Email">
                <input v-model="form.zip_code" type="text" class="form-control my-3" placeholder="CEP">
                <input v-model="form.model" type="text" class="form-control my-3" placeholder="Modelo">
                <input v-model="form.serial" type="text" class="form-control my-3" placeholder="Série do equipamento">
                <input v-model="form.horimeter" type="text" class="form-control my-3" placeholder="Horímetro">

                <button class="primary-btn">Enviar</button>
            </form>
        </div>
    </section>
</template>

<script>
    import api from './../../services/api'

    export default {
        name: "Seguros",
        data: () => {
            return {
                form: {
                    name: null,
                    phone: null,
                    email: null,
                    zip_code: null,
                    model: null,
                    serial: null,
                    horimeter: null,
                }
            }
        },
        methods: {
            save() {
                api.post('', this.form)
                    .then(e => window.console.log(e))
                    .catch(e => window.console.log(e))
            }
        },
        mounted() {
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            let a = Tawk_LoadStart;
            a.getDate();
            (function () {
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/5e3d5700a89cda5a1884b0ab/default';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
            })();
        }
    }
</script>
