<template>
  <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" :class="
    this.$store.state.isRTL ? 'top-0 position-sticky z-index-sticky' : ''
  " v-bind="$attrs" id="navbarBlur" data-scroll="true">
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :currentPage="currentRouteName" textWhite="text-white" />

      <div class="mt-2 collapse navbar-collapse justify-content-end mt-sm-0 me-md-0 me-sm-4"
        :class="this.$store.state.isRTL ? 'px-0' : 'me-sm-4'" id="navbar">
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-flex align-items-center">
            <router-link :to="{ name: 'Signin' }" class="px-0 nav-link font-weight-bold text-white">
              <i class="fa fa-user text-dark" :class="this.$store.state.isRTL ? 'ms-sm-2' : 'me-sm-2'"></i>
              <span class="d-sm-inline d-none text-dark">Sign In</span>
            </router-link>
          </li>
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <a href="#" @click="toggleSidebar" class="p-0 nav-link text-dark" id="iconNavbarSidenav">
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line bg-dark"></i>
                <i class="sidenav-toggler-line bg-dark"></i>
                <i class="sidenav-toggler-line bg-dark"></i>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Breadcrumbs from "../Breadcrumbs.vue";
import { mapMutations, mapActions } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      showMenu: false
    };
  },
  props: ["minNav", "textWhite"],
  created() {
    this.minNav;
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),
    ...mapActions(["toggleSidebarColor"]),

    toggleSidebar() {
      this.toggleSidebarColor("bg-white");
      this.navbarMinimize();
    }
  },
  components: {
    Breadcrumbs
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>

<style>
.z-index-sticky {
  z-index: 999 !important;
}</style>
