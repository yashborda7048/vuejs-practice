const routes = [
    {
        path: "/",
        name: "",
        redirect: "/login",
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            authRequired: false
        },
        component: import('../views/Signin.vue'),
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
        path: "/hotel-list",
        name: "Hotel-list",
        meta: {
            authRequired: true
        },
        component: import('../views/Hotel-list.vue'),
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
        path: "/hotel",
        name: "Hotel",
        meta: {
            authRequired: true
        },
        component: import('../views/Hotel.vue'),
    },
    /** PAGE NOT FOUND ROUTE */
    {
        path: "/404",
        name: "404",
        component: import("../views/Pagenotfound.vue"),
    },
];

export default routes;