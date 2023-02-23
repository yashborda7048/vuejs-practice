import AuthService from "@/helpers/authservice/auth.service";

const user = JSON.parse(localStorage.getItem("user"));
export const state = user ? { status: { loggedIn: true } } : { status: { loggedIn: false } };

export const actions = {
  login({ commit }, user) {
    return AuthService.login(user).then(
      (user) => {
        commit("loginSuccess", user);
        return Promise.resolve(user);
      },
      (error) => {
        commit("loginFailure");
        return Promise.reject(error);
      }
    );
  },

  logout({ commit }) {
    AuthService.logout();
    commit("logout");
  },

};

export const mutations = {
  loginSuccess(state, user) {
    state.status.loggedIn = true;
    state.user = user;
  },
  loginFailure(state) {
    state.status.loggedIn = false;
    state.user = null;
  },

  logout(state) {
    state.status.loggedIn = false;
    state.user = null;
    state.hotel = null;
  },

};
