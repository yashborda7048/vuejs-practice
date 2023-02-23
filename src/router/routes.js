const routes = [
    {
        path: "/",
        redirect: "/signin",
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
        path: "/tables",
        name: "Tables",
        meta: {
            authRequired: true
        },
        component: import('../views/Tables.vue'),
    },
    {
        path: "/billing",
        name: "Billing",
        meta: {
            authRequired: true
        },
        component: import('../views/Billing.vue'),
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
        component: require("../views/404"),
    },
];

export default routes;