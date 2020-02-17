<template>
    <div class="mt-150">
        <p>{{$route.params.token}}</p>
    </div>
</template>

<script>
    import api from './../../services/api'

    export default {
        name: "FormPartnerSignup",
        data: () => {
            return {
                credentials: {
                    password: null,
                    zip_code: null
                }
            }
        },
        methods: {
            signup: function () {
                // eslint-disable-next-line no-undef
                this.credential.token = $route.params.token
                api.put('', this.credential);
            }
        }
    }
</script>
