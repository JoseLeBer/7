import { createStore } from "vuex";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

let user = localStorage.getItem("user");
if (!user) {
  user = {
    userId: "",
    token: "",
  };
} else {
  user = JSON.parse(user);
  instance.defaults.headers.common["Authorization"] = "Bearer " + user.token;
}

// Create a new store instance
const store = createStore({
  state: {
    status: "",
    user: user,
    userInfos: {
      user_firstname: "",
      user_lastname: "",
      user_email: "",
      image: "",
    },
  },
  mutations: {
    setStatus(state, payload) {
      state.status = payload;
    },
    logUser(state, payload) {
      // instance.defaults.headers.common["Authorization"] = payload.token;
      localStorage.setItem("user", JSON.stringify(payload));
      state.user = payload;
    },
    userInfos(state, payload) {
      state.userInfos = payload;
    },
    resetUser(state) {
      state.user.userId = "";
      state.user.token = "";
    },
  },
  actions: {
    createAccount({ commit }, userInfos) {
      commit("setStatus", "loading");
      return new Promise((resolve, reject) => {
        instance
          .post("/auth/signup", userInfos)
          .then((response) => {
            commit("setStatus", "");
            resolve(response);
          })
          .catch((error) => {
            commit("setStatus", "error_create");
            reject(error);
          });
      });
    },
    login({ commit }, userInfos) {
      commit("setStatus", "loading");
      return new Promise((resolve, reject) => {
        instance
          .post("/auth/login", userInfos)
          .then((response) => {
            commit("setStatus", "");
            commit("logUser", response.data);
            resolve(response);
          })
          .catch((error) => {
            commit("setStatus", "error_login");
            reject(error);
          });
      });
    },
    getUserInfos({ commit }, parameters) {
      instance
        .get("/user/" + parameters)
        .then((response) => {
          commit("userInfos", response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    resetUser({ commit }) {
      commit("resetUser");
    },
  },
});

export default store;
