import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { theme } from "./styles/theme";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.provide("theme", theme);
app.mount("#app");
