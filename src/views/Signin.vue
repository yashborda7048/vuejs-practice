<template>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Sign In</h4>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form role="form" @submit.prevent="tryToLogIn">
                    <div class="mb-3">
                      <input class="form-control" v-model.trim="email" type="text" autocomplete="off"
                        placeholder="Enter email">
                    </div>
                    <div class="mb-3">
                      <input class="form-control" type="password" v-model.trim="password" placeholder="Password"
                        name="password" size="lg" />
                    </div>
                    <div class="text-center">
                      <button type="submit" class="mt-4 bg-gradient-success btn-lg w-100 border-0 text-white">Sign
                        in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column">
              <div
                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg');
                                        background-size: cover;">
                <span class="mask bg-gradient-success opacity-6"></span>
                <h4 class="mt-5 text-white font-weight-bolder position-relative">"Attention is the new currency"</h4>
                <p class="text-white position-relative">The more effortless the writing looks, the more effort the writer
                  actually put into the process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
const body = document.getElementsByTagName("body")[0];

import AuthService from "@/store/auth.service"

export default {
  name: "login",
  data() {
    return {
      email: "kaushik.patel@macrotech.net",
      password: "K@936936!",
    };
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
    this.isLoggedIn();
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  methods: {
    async tryToLogIn() {
      AuthService.login({
        email: this.email,
        password: this.password,
      }).then((response) => {
        if (response.access) {
          localStorage.setItem("user", JSON.stringify(response));
        }
        this.$router.push("/dashboard");
      });
    },
    isLoggedIn() {
      let user = localStorage.getItem("user");
      if (user) {
        this.$router.push('/dashboard');
      }
    }
  }
};
</script>
