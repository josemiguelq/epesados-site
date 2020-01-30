<template>
    <div>
    <Header/>
    <section class="banner-area relative" id="home">
        <div class="overlay overlay-bg"></div>
        <div class="container">
            <div class="row fullscreen d-flex align-items-center justify-content-center" style="padding-top: 25%;
            padding-bottom: 25%">
                <div class="banner-content col-lg-12 col-md-12">
                    <h6 class="text-uppercase">Deixe o trabalho pesado com a gente!</h6>
                    <h1>
                        Cuide das máquinas.
                        Nós cuidamos do restante.
                    </h1>
                    <p class="text-white">
                        A promoção dos seus serviços para máquinas pesadas na Internet, a gestão das suas manutencoes
                        e a comunicação com os clientes já podem ser feitas a partir de uma única ferramenta, completa para profissionais.
                    </p>
                    <a href="#" class="primary-btn header-btn text-uppercase" style="margin: 2px">
                        Quero ser um especialista
                    </a>
                    <a href="#" class="primary-btn header-btn text-uppercase" style="margin: 2px">
                        Quero contratar um especialista
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- End banner Area -->

    <!-- Start cat Area -->
    <section class="cat-area section-gap" id="feature">
        <div class="container">
            <div class="row">
                <MainActivities title="Encontre especialistas" content="Nós cuidamos do ... manutencao preventiva"
                                class-icon="lnr lnr-magic-wand"/>
                <div class="col-lg-3">
                    <div class="single-cat">
                        <a href="#" class="hb-sm-margin mx-auto d-block"><span
                                class="hb hb-sm inv hb-facebook-inv"><span class="lnr lnr-rocket"></span></span></a>
                        <h4 class="mt-40 mb-20">Receba lembretes</h4>
                        <p>
                            Buscamos os operadores mais bem colocados....
                        </p>
                    </div>
                </div>
                <MainActivities title="Avalie o serviço" content="Nós cuidamos do ... manutencao preventiva"
                                class-icon="lnr lnr-magic-wand"/>
                <div class="col-lg-3">
                    <div class="single-cat">
                        <a href="#" class="hb-sm-margin mx-auto d-block"><span
                                class="hb hb-sm inv hb-facebook-inv"><span class="lnr lnr-bug"></span></span></a>
                        <h4 class="mt-40 mb-20">Seguros</h4>
                        <p>
                            Contrate seguros para ...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End cat Area -->


    <!-- Start home-about Area -->
    <section class="home-about-area section-gap" id="about">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-8 col-md-12 home-about-left">
                    <h6>Fique a vista para novos clientes</h6>
                    <h1>
                        Anúncie com a gente <br>
                    </h1>
                    <p class="sub">We are here to listen from you deliver exellence</p>
                    <p class="pb-20">
                        Anúncie seu serviços para ... .
                    </p>
<!--                    <a class="primary-btn" href="#">Quero me cadastrar</a>-->
                </div>
                <div class="col-lg-4 col-md-12 home-about-right relative">
                    <Partner/>
                </div>
            </div>
        </div>
    </section>
    <!-- End home-about Area -->

    <!-- Start service Area -->
    <section class="service-area section-gap" id="service">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 pb-30 header-text text-center">
                    <h1 class="mb-10">Setores de atuacao</h1>
                    <p>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="single-service">
                        <div class="thumb">
                            <img src="img/s1.jpg" alt="">
                        </div>
                        <h4>Máquinas Agrícolas</h4>
                        <p>
                            inappropriate behavior is often laughed off as “boys will be boys,” women face higher
                            conduct women face higher conduct.
                        </p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="single-service">
                        <div class="thumb">
                            <img src="img/s2.jpg" alt="">
                        </div>
                        <h4>Maquinas de contrução</h4>
                        <p>
                            inappropriate behavior is often laughed off as “boys will be boys,” women face higher
                            conduct women face higher conduct.
                        </p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="single-service">
                        <div class="thumb">
                            <img src="img/s3.jpg" alt="">
                        </div>
                        <h4>Máquinas Industriais</h4>
                        <p>
                            inappropriate behavior is often laughed off as “boys will be boys,” women face higher
                            conduct women face higher conduct.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End service Area -->


    <!-- Start faq Area -->
    <section class="faq-area section-gap relative">
        <div class="overlay overlay-bg"></div>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-3 col-md-6">
                    <div class="single-faq">
                        <div class="circle">
                            <div class="inner"></div>
                        </div>
                        <h5><span class="counter">2</span>K+</h5>
                        <p>
                            Operadores de máquinas
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-faq">
                        <div class="circle">
                            <div class="inner"></div>
                        </div>
                        <h5><span class="counter">5.5</span>K</h5>
                        <p>
                            Mecânicos espalhados pelo Brasil
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-faq">
                        <div class="circle">
                            <div class="inner"></div>
                        </div>
                        <h5 class="counter">959</h5>
                        <p>
                            Clientes atendidos
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End faq Area -->


    <!-- Start project Area -->
<!--    <section class="project-area section-gap" id="project">-->
<!--        <div class="container">-->
<!--            <div class="row justify-content-center">-->
<!--                <div class="col-md-8 pb-30 header-text text-center">-->
<!--                    <h1 class="mb-10">Latest Finished Projects</h1>-->
<!--                    <p>-->
<!--                        Who are in extremely love with eco friendly system..-->
<!--                    </p>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--                <div class="col-lg-8 col-md-8">-->
<!--                    <a href="img/p1.jpg" class="img-gal">-->
<!--                        <img class="img-fluid single-project" src="img/p1.jpg" alt="">-->
<!--                    </a>-->
<!--                </div>-->
<!--                <div class="col-lg-4 col-md-4">-->
<!--                    <a href="img/p2.jpg" class="img-gal">-->
<!--                        <img class="img-fluid single-project" src="img/p2.jpg" alt="">-->
<!--                    </a>-->
<!--                </div>-->
<!--                <div class="col-lg-6 col-md-6">-->
<!--                    <a href="img/p3.jpg" class="img-gal">-->
<!--                        <img class="img-fluid single-project" src="img/p3.jpg" alt="">-->
<!--                    </a>-->
<!--                </div>-->
<!--                <div class="col-lg-6 col-md-6">-->
<!--                    <a href="img/p4.jpg" class="img-gal">-->
<!--                        <img class="img-fluid single-project" src="img/p4.jpg" alt="">-->
<!--                    </a>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </section>-->
    <!-- End project Area -->

    <!-- Start feedback Area -->
<!--    <section class="feedback-area section-gap relative" id="feedback">-->
<!--        <div class="overlay overlay-bg"></div>-->
<!--        <div class="container">-->
<!--            <div class="row justify-content-center">-->
<!--                <div class="col-md-12 pb-30 header-text text-center">-->
<!--                    <h1 class="mb-10 text-white">Enjoy our Client’s Feedback</h1>-->
<!--                    <p class="text-white">-->
<!--                        Who are in extremely love with eco friendly system..-->
<!--                    </p>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="row feedback-contents justify-content-center align-items-center">-->
<!--                <div class="col-lg-6 feedback-left relative d-flex justify-content-center align-items-center">-->
<!--                    <div class="overlay overlay-bg"></div>-->
<!--                    <a class="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM"><img class="img-fluid"-->
<!--                                                                                                src="img/play-btn.png"-->
<!--                                                                                                alt=""></a>-->
<!--                </div>-->
<!--                <div class="col-lg-6 feedback-right">-->
<!--                    <div class="active-review-carusel">-->
<!--                        <div class="single-feedback-carusel">-->
<!--                            <div class="title d-flex flex-row">-->
<!--                                <h4 class="text-white pb-10">Fannie Rowe</h4>-->
<!--                                <div class="star">-->
<!--                                    <span class="fa fa-star checked"></span>-->
<!--                                    <span class="fa fa-star checked"></span>-->
<!--                                    <span class="fa fa-star checked"></span>-->
<!--                                    <span class="fa fa-star"></span>-->
<!--                                    <span class="fa fa-star"></span>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <p class="text-white">-->
<!--                                Accessories Here you can find the best computer accessory for your laptop, monitor,-->
<!--                                printer, scanner, speaker. Here you can find the best computer accessory for your-->
<!--                                laptop, monitor, printer, scanner, speaker.-->
<!--                            </p>-->
<!--                        </div>-->
<!--                        <div class="single-feedback-carusel">-->
<!--                            <div class="title d-flex flex-row">-->
<!--                                <h4 class="text-white pb-10">Fannie Rowe</h4>-->
<!--                                <div class="star">-->
<!--                                    <span class="fa fa-star checked"></span>-->
<!--                                    <span class="fa fa-star checked"></span>-->
<!--                                    <span class="fa fa-star checked"></span>-->
<!--                                    <span class="fa fa-star checked"></span>-->
<!--                                    <span class="fa fa-star"></span>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <p class="text-white">-->
<!--                                Accessories Here you can find the best computer accessory for your laptop, monitor,-->
<!--                                printer, scanner, speaker. Here you can find the best computer accessory for your-->
<!--                                laptop, monitor, printer, scanner, speaker.-->
<!--                            </p>-->
<!--                        </div>-->
<!--                        <div class="single-feedback-carusel">-->
<!--                            <div class="title d-flex flex-row">-->
<!--                                <h4 class="text-white pb-10">Fannie Rowe</h4>-->
<!--                                <div class="star">-->
<!--                                    <span class="fa fa-star checked"></span>-->
<!--                                    <span class="fa fa-star checked"></span>-->
<!--                                    <span class="fa fa-star checked"></span>-->
<!--                                    <span class="fa fa-star checked"></span>-->
<!--                                    <span class="fa fa-star checked	"></span>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <p class="text-white">-->
<!--                                Accessories Here you can find the best computer accessory for your laptop, monitor,-->
<!--                                printer, scanner, speaker. Here you can find the best computer accessory for your-->
<!--                                laptop, monitor, printer, scanner, speaker.-->
<!--                            </p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </section>-->
    <!-- End feedback Area -->


    <!-- Start blog Area -->
    <section class="blog-area section-gap" id="blog">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 pb-30 header-text">
                    <h1>Últimos artigos do nosso blog</h1>
                    <p>
                        Temos a preocupação de deixar você atualizado com as melhores dicas dos nossos especialistas.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="single-blog col-lg-4 col-md-4">
                    <div class="thumb">
                        <img class="f-img img-fluid mx-auto" src="img/b1.jpg" alt="">
                    </div>
                    <div class="bottom d-flex justify-content-between align-items-center flex-wrap">
                        <div>
                            <img class="img-fluid" src="img/user.png" alt="">
                            <a href="#"><span>Carolina Petarnela</span></a>
                        </div>
                        <div class="meta">
                            13th Dec
                            <span class="lnr lnr-heart"></span> 15
                            <span class="lnr lnr-bubble"></span> 04
                        </div>
                    </div>
                    <a href="#">
                        <h4>Cuidados básico com a Linha Hunday</h4>
                    </a>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip exea.
                    </p>
                </div>
                <div class="single-blog col-lg-4 col-md-4">
                    <div class="thumb">
                        <img class="f-img img-fluid mx-auto" src="img/b2.jpg" alt="">
                    </div>
                    <div class="bottom d-flex justify-content-between align-items-center flex-wrap">
                        <div>
                            <img class="img-fluid" src="img/user.png" alt="">
                            <a href="#"><span>Carolina Petarnela</span></a>
                        </div>
                        <div class="meta">
                            13th Dec
                            <span class="lnr lnr-heart"></span> 15
                            <span class="lnr lnr-bubble"></span> 04
                        </div>
                    </div>
                    <a href="#">
                        <h4>Dicas para seguros</h4>
                    </a>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip exea.
                    </p>
                </div>
                <div class="single-blog col-lg-4 col-md-4">
                    <div class="thumb">
                        <img class="f-img img-fluid mx-auto" src="img/b3.jpg" alt="">
                    </div>
                    <div class="bottom d-flex justify-content-between align-items-center flex-wrap">
                        <div>
                            <img class="img-fluid" src="img/user.png" alt="">
                            <a href="#"><span>Carolina Petarnela</span></a>
                        </div>
                        <div class="meta">
                            13th Dec
                            <span class="lnr lnr-heart"></span> 15
                            <span class="lnr lnr-bubble"></span> 04
                        </div>
                    </div>
                    <a href="#">
                        <h4>Onde conseguir peças de boa qualidade</h4>
                    </a>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip exea.
                    </p>
                </div>


            </div>
        </div>
    </section>
    <Footer/>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";
    import Partner from "../components/forms/Partner";
    import MainActivities from "../components/MainActivities";

    export default {
        name: "Home",
        components: {MainActivities, Partner, Footer, Header}
    }
</script>
