<template>
    <div>
        <Banner/>
        <section class="cat-area section-gap" id="feature">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="single-cat">
                            <a href="#" class="hb-sm-margin mx-auto d-block"><span
                                    class="hb hb-sm inv hb-facebook-inv"><span class="lnr lnr-rocket"></span></span></a>
                            <h4 class="mt-40 mb-20">Encontre especialistas</h4>
                            <p>
                                Contrate aqui os operadores bem colocados e qualificados para conduzir seus equipamentos.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="single-cat">
                            <a href="#" class="hb-sm-margin mx-auto d-block"><span
                                    class="hb hb-sm inv hb-facebook-inv"><span class="lnr lnr-rocket"></span></span></a>
                            <h4 class="mt-40 mb-20">Receba lembretes</h4>
                            <p>
                                Cuidamos da vida útil das suas máquinas te enviando alertas sobre manutenções e
                                as melhores dicas para manter seu equipamento nas melhores condições.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="single-cat">
                            <a href="#" class="hb-sm-margin mx-auto d-block"><span
                                    class="hb hb-sm inv hb-facebook-inv"><span class="lnr lnr-bug"></span></span></a>
                            <h4 class="mt-40 mb-20">Avalie o serviço</h4>
                            <p>
                                Avalie o serviço prestado e garanta a qualidade dos próximos serviços solicitando o
                                especialista mais próximo e melhor avaliado.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="single-cat">
                            <a href="#" class="hb-sm-margin mx-auto d-block"><span
                                    class="hb hb-sm inv hb-facebook-inv"><span class="lnr lnr-bug"></span></span></a>
                            <h4 class="mt-40 mb-20">Seguros</h4>
                            <p>
                                Porque pra nós a segurança do seu bem vale muito para ser deixado pra depois. Consulte agora
                                mesmo um de nossos especialista.
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
                            Anuncie com a gente <br>
                        </h1>
                        <p class="pb-20">
                            A promoção dos seus serviços para máquinas pesadas na Internet, a gestão das suas manutencoes
                            e a comunicação com os clientes já podem ser feitas a partir de uma única ferramenta, completa para profissionais
                        </p>
                        <router-link class="primary-btn" to="/partner/signup">Mais informações</router-link>
                    </div>
                        <Partner/>
                </div>
            </div>
        </section>
        <!-- End home-about Area -->

        <!-- Start service Area -->
        <section class="service-area section-gap" id="service">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 pb-30 header-text text-center">
                        <h1 class="mb-10">Setores de atuação</h1>
                        <p>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="single-service">
                            <div class="thumb">
                                <img src="./../../public/img/index/maq-agricolas.png" alt="máquinas pesadas agricolas">
                            </div>
                            <h4>Máquinas Agrícolas</h4>
                            <p>
                                Aumente a vida útil de equipamentos sujeito a intempéries do campo.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-service">
                            <div class="thumb">
                                <img src="./../../public/img/index/maq-construcao.jpg"
                                     alt="máquinas pesadas construcao">
                            </div>
                            <h4>Maquinas de construção</h4>
                            <p>
                                Caminhões, escavadeiras e as máquinas usadas na área de contrução será atendida.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-service">
                            <div class="thumb">
                                <img src="./../../public/img/index/maq-industriais.jpg" alt="">
                            </div>
                            <h4>Máquinas Industriais</h4>
                            <p>
                                Desde o setor alimentício até de montadoras você pode achar aqui.
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

        <!-- Start blog Area -->
        <section class="blog-area section-gap" id="blog">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 pb-30 header-text">
                        <h1>Últimos artigos do nosso blog</h1>
                        <p>
                            Temos a preocupação de deixar você atualizado com as melhores dicas dos nossos
                            especialistas.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="single-blog col-lg-4 col-md-4">
                        <div class="thumb">
                            <img class="f-img img-fluid mx-auto" src="img/blog/operador.png" alt="">
                        </div>
                        <div class="bottom d-flex justify-content-between align-items-center flex-wrap">
                        </div>
                        <a href="pages/blog/operador-nao-qualificado.html">
                            <h4>Operador não qualificado = Prejuízo para sua empresa</h4>
                        </a>
                        <p>
                            Já pensou ter um equipamento danificado ou até mesmo a perda de uma carga ou estoque devido a um tombamento, atropelamento, batidas entre máquinas?
                        </p>
                    </div>
                    <div class="single-blog col-lg-4 col-md-4">
                        <div class="thumb">
                            <img class="f-img img-fluid mx-auto" src="img/b2.jpg" alt="">
                        </div>
                        <div class="bottom d-flex justify-content-between align-items-center flex-wrap">
                        </div>
                        <a href="pages/blog/seguros.html">
                            <h4>Seguro: mal necessário ou proteção indispensável?</h4>
                        </a>
                        <p>
                            Hoje apenas 30% da frota que está em atividade está segurada além disso muitos locadores não estão renovando as apólices.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Partner from "../components/forms/Partner";
    import Banner from "../components/Banner";

    export default {
        name: "Home",
        components: {Banner, Partner }
    }
</script>
