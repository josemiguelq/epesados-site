<template>
    <section class="blog-posts-area section-gap">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 post-list blog-post-list">
                    <div class="single-post">
                        <img class="img-fluid" src="operador.png" alt="">
                        <a href="#">
                            <h1>{{getPost().title}}</h1>
                        </a>
                        <div class="content-wrap">
                            <p v-for="(content, index ) in getPost().content"
                            v-bind:key="index">
                                {{content}}
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
    import posts from "./posts";

    export default {
        name: "Post",
        methods: {
            getPost() {
                // eslint-disable-next-line no-undef
                return posts.find(p => {
                    return p.id == this.$route.params.id
                })
            }
        }
    }
</script>
