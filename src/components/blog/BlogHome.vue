<template>
    <section class="blog-posts-area section-gap">
        <div class="container">
            <div class="row">
                <PostPreview
                        v-for="post in posts"
                        v-bind:key="post.title"
                        v-bind:title="post.title"
                        v-bind:text="post.text"
                        v-bind:image="post.image"
                        v-bind:id="post.id"
                />
            </div>
        </div>
    </section>
</template>

<script>
    import PostPreview from "./PostPreview";
    import posts from './posts'
    export default {
        name: "BlogHome",
        components: {PostPreview},
        data: () => ({
            posts: posts
        })
    }
</script>

<style scoped>

</style>
