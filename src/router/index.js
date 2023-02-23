import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: "history",
});

// Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired);
  document.title = `${process.env.VUE_APP_TITLE} | ${routeTo.name}`;
  if (!authRequired) return next();
  const loggedIn = localStorage.getItem("user");
  console.log(authRequired , "auth");
  console.log(loggedIn , "loggedIn");
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
