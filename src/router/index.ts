import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const Home = () => import("../view/Home.vue");
const About = () => import("../view/About.vue");

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/a",
        component: About,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
