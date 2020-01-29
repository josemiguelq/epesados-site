<template>
    <form class="form-wrap" action="#">
        <div class="form-select" id="service-select">
            <select>
                <option value="1">Sou operador de máquinas</option>
                <option value="2">Sou mecanico</option>
            </select>
        </div>
        <input type="text" class="form-control" placeholder="Nome">
        <input type="phone" class="form-control" placeholder="Contato">
        <input type="email" class="form-control" placeholder="Email">
        <input type="email" class="form-control" placeholder="CEP">
        <input type="email" class="form-control"
               placeholder="Raio de atendimento (km) ou lista de cidades que posso atender">
        <textarea name="message"  cols="30" rows="5" placeholder="Serviços que eu faço"
                  class="form-control"></textarea>
        <textarea name="message" cols="30" rows="5" placeholder="Minhas especializacoes"
                  class="form-control"></textarea>
        <button class="primary-btn">Enviar</button>
    </form>
</template>

<script>
    export default {
        name: "Partner"
    }
</script>

<style scoped>

</style>
