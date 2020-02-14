import About from "./pages/About";
import Home from "./pages/Home";
import Router from "vue-router";
import Vue from 'vue'
import Contact from "./pages/Contact";
import BlogHome from "./components/blog/BlogHome";
import Post from "./components/blog/Post";
import SignUp from "./pages/partner/SignUp";
import Seguros from "./pages/services/Seguros";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/about', component: About},
        {path: '/', component: Home},
        {path: '/contact', component: Contact},
        {path: '/blog', component: BlogHome},
        {path: '/post', component: Post},
        {path: '/partner/signup', component: SignUp},
        {path: '/services/seguro', component: Seguros},
    ]
})

