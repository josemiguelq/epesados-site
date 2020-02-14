<template>
    <section class="service-area section-gap" id="service">
        <div class="container">
            <form class="form-wrap" action="#">
                <div class="form-select" id="service-select">
                    <select>
                        <option value="1">Construção</option>
                        <option value="2">Florestal</option>
                        <option value="2">Mineração</option>
                    </select>
                </div>
                <input type="text" class="form-control" placeholder="Nome">
                <input type="phone" class="form-control" placeholder="Contato">
                <input type="email" class="form-control" placeholder="Email">
                <input type="email" class="form-control" placeholder="CEP">
                <input type="text" class="form-control" placeholder="Modelo">
                <input type="text" class="form-control" placeholder="Série do equipamento">
                <input type="text" class="form-control" placeholder="Horímetro">

                <button class="primary-btn">Enviar</button>
            </form>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Seguros"
    }
</script>

<style scoped>

</style>
