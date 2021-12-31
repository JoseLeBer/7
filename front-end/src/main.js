import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import timeago from "vue-timeago3";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
createApp(App)
  .use(router)
  .use(store)
  .use(timeago)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
