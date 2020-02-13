<template>
    <div>
        <section class="banner-area relative" id="home">
            <div class="overlay overlay-bg"></div>
            <div class="container">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="about-content col-lg-12">
                        <h1 class="text-white">
                            Sobre nós
                        </h1>
                        <p class="text-white link-nav"><a href="./../../index.html">Home </a> <span
                                class="lnr lnr-arrow-right"></span>
                            <a><router-link to="/"> Sobre</router-link></a></p>
                    </div>
                </div>
            </div>
        </section>

        <section class="service-area section-gap" id="about">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-12 text-center pb-120">
                        <h2 class="mb-20" style="color: #fab700">Propósito</h2>
                        <i style="font-size: 20px">
                            Transformar a experiencia do cliente se relacionando de maneira genuína e humana, criando
                            relações
                            profundas e sólidas para o futuro
                        </i>
                    </div>

                    <div class="pb-30 row col-md-12">
                        <div class="col-md-6 pb-60 header-text text-center">
                            <h2 style="color: #fab700">Missão</h2>
                            <p style="font-weight: 400">
                                Oferecer o melhor relacionamento através de uma solução única, focada na eficiência,
                                segurança e
                                manutenções de equipamentos.
                            </p>
                        </div>

                        <div class="col-md-6 pb-30 header-text text-center">
                            <h2 style="color: #fab700">Visão</h2>
                            <p style="font-weight: 400">
                                Ser referência de excelência em relacionamento, produtos e serviços para maquinas,
                                gerando valor
                                para nossos parceiros, clientes e colaboradores
                            </p>
                        </div>
                    </div>


                    <div class="col-md-12 pb-30 header-text text-center">
                        <h2 style="color: #fab700" class="pb-20">Valores</h2>
                        <div class="row flex-center">
                            <div class="col-md-4"
                                 v-for="valor in valores"
                                 v-bind:key="valor.valor"
                            >
                                <h3 class="mb-20">{{valor.valor}} </h3>
                                <p>{{valor.text}}</p>
                            </div>
                            <div class="col-md-6 mb-10">
                                <h3 class="mb-20">Ética</h3>
                                <p>Acreditamos que em tudo que fazemos não há negociação sem ter ética na relação.</p>
                            </div>
                            <div class="col-md-6 mb-10">
                                <h3 class="mb-20">Valorização e respeito as pessoas</h3>
                                <p>Nos orgulhamos por manter o respeito e a valorização em todas
                                    as interações geradas por nossa empresa, afinal são as pessoas que geram valor para
                                    nosso negócio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "About",
        data: () => ({
            valores : [
                {
                    valor: "Paixão pelo Negócio",
                    text:
                        "Buscamos pessoas que verdadeiramente sejam apaixonadas pelo nosso negócio e  que contribuam genuinamente com nosso crescimento."
                },
                {
                    valor: "Empatia",
                    text:
                        "Buscamos pessoas que se afastem de suas ideias e convicções para entender  verdadeiramente o mundo com os olhos do outro."
                },
                {
                    valor: "Inovação e criatividade",
                    text:
                        "Fomentar a inovação e a criatividade a fim de surpreender na forma de atender."
                }
            ]
        })
    }
</script>

<style scoped>

</style>
