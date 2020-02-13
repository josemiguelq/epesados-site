<template>
    <section class="blog-posts-area section-gap">
        <div class="container">
            <div class="row">
                <PostPreview
                        v-for="post in posts"
                        v-bind:key="post.title"
                        v-bind:title="post.title"
                        v-bind:text="post.text"
                />
            </div>
        </div>
    </section>
</template>

<script>
    import PostPreview from "./PostPreview";

    export default {
        name: "BlogHome",
        components: {PostPreview},
        data: () => ({
            posts: [
                {
                    title: "SEGURO: MAL NECESSÁRIO OU PROTEÇÃO INDISPENSÁVEL?",
                    text: "Hoje apenas 30% da frota que está em atividade está segurada além disso muitos locadores não estão renovando as apólices..."
                },
                {
                    title: "Operador não qualificado = Prejuízo para sua empresar",
                    text: "Já pensou ter um equipamento danificado ou até mesmo a perda de uma carga ou estoque devido a um tombamento, atropelamento, batidas entre máquinas?...Casos como esses geram uma crise institucional e, consequentemente, perda nos lucros com a produção parada..."
                }
            ]
        })
    }
</script>

<style scoped>

</style>
