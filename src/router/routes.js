const routes = [
    {
        path: "/",
        name: "",
        redirect: "/login",
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        meta: {
            authRequired: true
        },
        component: import('../views/Dashboard.vue'),
    },
    {
        path: "/brand-list",
        name: "Brand-list",
        meta: {
            authRequired: true
        },
        component: import('../views/Brand-list.vue'),
    },
    {
        path: "/profile",
        name: "Profile",
        meta: {
            authRequired: true
        },
        component: import('../views/Profile.vue'),
    },
    {
        path: "/login",
        name: "Signin",
        meta: {
            authRequired: false
        },
        component: import('../views/Signin.vue'),
    },
    /** PAGE NOT FOUND ROUTE */
    {
        path: "/404",
        name: "404",
        component: require("../views/404.vue"),
    },
];

export default routes;