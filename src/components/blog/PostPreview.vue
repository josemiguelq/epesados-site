<template>
    <div class="single-post">
<!--        <img v-if="!!image" class="img-fluid" :src="image" alt="">-->
        <ul class="tags">
<!--            <li><a href="#">Seguros</a></li>-->
        </ul>
        <a><router-link :to="getRoute()">
            <h1>{{title}}</h1>
        </router-link>
        </a>
        <p>{{text}}</p>
        <div class="bottom-meta">
            <div class="user-details row align-items-center">
<!--                <div class="comment-wrap col-lg-6">-->
<!--                    <ul>-->
<!--                        <li><a href="#"><span class="lnr lnr-heart"></span>	4 likes</a></li>-->
<!--                        <li><a href="#"><span class="lnr lnr-bubble"></span> 06 Comments</a></li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--                <div class="social-wrap col-lg-6">-->
<!--                    <ul>-->
<!--                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>-->
<!--                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>-->
<!--                        <li><a href="#"><i class="fa fa-dribbble"></i></a></li>-->
<!--                        <li><a href="#"><i class="fa fa-behance"></i></a></li>-->
<!--                    </ul>-->

<!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostPreview",
        props: {
            title: {
                type: String
            },
            text: {
                type: String
            },
            image: {
                type: String,
                default: ''
            },
            id: {
                type: String,
                default: ''
            }
        },
        methods: {
            getRoute(){
                return "/post/"+this.id;
            }
        }
    }
</script>

<style scoped>

</style>
