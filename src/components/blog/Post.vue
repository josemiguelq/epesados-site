<template>
    <section class="blog-posts-area section-gap">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 post-list blog-post-list">
                    <div class="single-post">
                        <img class="img-fluid" src="operador.png" alt="">
                        <a href="#">
                            <h1>Operador não qualificado = Prejuízo para sua empresa</h1>
                        </a>
                        <div class="content-wrap">
                            <p>
                                Já pensou ter um equipamento danificado ou até mesmo a perda de uma carga ou estoque devido a um tombamento, atropelamento, batidas entre máquinas?
                            </p>
                            <p>
                                Casos como esses geram uma crise institucional e, consequentemente, perda nos lucros com a produção parada. Os maiores motivos relacionado a esses acidentes são operadores sem atenção e desconhecimento do equipamento. Mas tudo isso pode ser evitado simplesmente se esses profissionais passarem por um treinamento específico.
                            </p>
                            <p>
                                A formação técnica de um operador não é suficiente vale ressaltar. Cabe a empresa também proporcionar ao profissional reciclagens periódicas e diálogos diários sobre a atividade a ser realizada.
                            </p>
                            <p>
                                Aqui você encontra operadores devidamente qualificados, contrate agora mesmo.
                            </p>


                        </div>
                        <div class="bottom-meta">
                            <div class="user-details row align-items-center">
                                <div class="comment-wrap col-lg-6 col-sm-6">
                                </div>
                                <div class="social-wrap col-lg-6">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Post",
        props: {
            title: {
                type: String
            }
        }
    }
</script>
