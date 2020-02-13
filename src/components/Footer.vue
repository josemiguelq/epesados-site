<template>
    <footer class="footer-area section-gap">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h6>Sobre</h6>
                        <div style="color: white">
                            <h5 style="color: white">(11) 98873-0881</h5>
                            <p>Seg to Dom 9am a 6 pm</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5  col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h6>Newsletter</h6>
                        <p>Fique atualizado com nosso material</p>
                        <div class="" id="mc_embed_signup">
                            <div target="_blank" class="form-inline">
                                <input class="form-control" name="EMAIL" placeholder="Enter Email"
                                       onfocus="this.placeholder = ''" onblur="this.placeholder = 'Digite seu Email '"
                                       required="" type="email">
                                <button class="click-btn btn btn-default" v-on:click="sendLead"><i
                                        class="fa fa-long-arrow-right"
                                                                             aria-hidden="true"></i></button>
                                <div style="position: absolute; left: -5000px;">
                                    <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value=""
                                           type="text">
                                </div>

                                <div class="info"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-6 social-widget">
                    <div class="single-footer-widget">
                        <h6>Siga-nos</h6>
                        <div class="footer-social d-flex align-items-center">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Footer",
        methods:  {
            sendLead: function () {
                axios.post('http://localhost:7779/api/v1/public/partner/signup', this.partner, {headers : {}})
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
