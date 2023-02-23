import { mapState, mapActions } from "vuex";

export const authComputed = {
  ...mapState("auth", {
    user: (state) => state.user,
  }),
};

export const authMethods = mapActions("auth", [
  "login",
  "logout",
]);
