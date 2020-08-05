import Vue from "vue";
import Router from "vue-router";
const Home = () => import("@/views/home/Home");
const Category = () => import("@/views/category/Category");
const Shopcart = () => import("@/views/shopcart/Shopcart");
const Profile = () => import("@/views/profile/Profile");

Vue.use(Router);

const routes = [
    {
        path: "",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/shopcart",
        component: Shopcart
    },
    {
        path: "/profile",
        component: Profile
    },
    {
        path: "/category",
        component: Category
    }
];
const router = new Router({
    routes,
    mode: "history"
});

export default router;
