import { createStore } from "vuex";

export default createStore({
  state: {
    hideConfigButton: false,
    isPinned: true,
    sidebarType: "bg-white",
    mcolor: "",
    darkMode: false,
    isNavFixed: true,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",
    user: null
  },
  mutations: {
    navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");

      if (sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      }
    },
    sidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
  },
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
  },
  getters: {
    isLoggedIn() {
      let user = localStorage.getItem("user");
      console.log(user);
      if (!user) {
        this.$router.push({ path: '/signin' });
      }
    }
  }
});

