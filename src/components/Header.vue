<template>
    <header id="header">
<!--        <div class="header-top">-->
<!--            <div class="container">-->
<!--                <div class="row">-->
<!--                    <div class="col-lg-6 col-sm-6 col-4 header-top-left no-padding">-->
<!--                        <ul>-->
<!--                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>-->
<!--                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>-->
<!--                            <li><a href="#"><i class="fa fa-dribbble"></i></a></li>-->
<!--                            <li><a href="#"><i class="fa fa-behance"></i></a></li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                    <div class="col-lg-6 col-sm-6 col-8 header-top-right no-padding">-->
<!--                        <a href="mailto:support@colorlib.com">suporte@epeasdos.com</a>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <div class="container main-menu">
            <div class="row align-items-center justify-content-between d-flex">
                <div id="logo">
                    <a href="index.html"><img src="img/logo.svg" alt="" title=""/></a>
                </div>
                <nav id="nav-menu-container">
                    <ul class="nav-menu">
                        <li class="menu-active"><a href="index.html">Home</a></li>
                        <li><a href="about.html">Sobre</a></li>
                        <li><a href="services.html">Serviços</a></li>
                        <li><a href="projects.html">Seguros</a></li>
                        <li class="menu-has-children"><a href="">Blog</a>
                            <ul>
                                <li><a href="blog-home.html">Blog Home</a></li>
                                <li><a href="blog-single.html">Blog Single</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
