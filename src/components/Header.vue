<template>
    <header id="header">
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
                        <ul>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
                        <a href="tel:+5511988730881">(11) 98873-0881</a>
                        <a href="mailto:contato@epesados.com">contato@epesados.com</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container main-menu">
            <div class="row align-items-center justify-content-between d-flex">
                <div id="logo">
                    <a href="index.html"><img src="img/logo.svg" alt="" title=""/></a>
                </div>
                <nav id="nav-menu-container">
                    <ul class="nav-menu">
                        <li class="menu-active"><a><router-link to="/">Home</router-link></a></li>
                        <li><a><router-link to="/about">Sobre</router-link></a></li>
                        <li><a><router-link to="/services/seguros">Serviços</router-link></a></li>
                        <li><a><router-link to="/services/seguros">Seguros</router-link></a></li>
                        <li><a><router-link to="/contact">Contato</router-link></a></li>
                        <li><a><router-link to="/blog">Blog</router-link></a></li>
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
