import About from "./pages/About";
import Home from "./pages/Home";
import Router from "vue-router";
import Vue from 'vue'
import Contact from "./pages/Contact";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/about', component: About},
        {path: '/', component: Home},
        {path: '/contact', component: Contact},
    ]
})

