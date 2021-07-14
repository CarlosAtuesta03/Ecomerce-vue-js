import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../components/about/about.vue'
import Home from '../components/home/home.vue'
import Products from '../components//products/products.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router