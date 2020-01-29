<template>
    <div class="col-lg-4">
        <div class="single-cat d-flex flex-column">
            <a href="#" class="hb-sm-margin mx-auto d-block"><span
                    class="hb hb-sm inv hb-facebook-inv"><span v-bind:class="classIcon"></span></span></a>
            <h4 class="mb-20" style="margin-top: 23px;">{{title}}</h4>
            <p>
                {{content}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainActivities",
        props: {
            title: {type: String},
            classIcon: {type: String},
            content: {type: String}
        }
    }
</script>

<style scoped>

</style>
