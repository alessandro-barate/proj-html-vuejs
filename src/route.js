import { createRouter, createWebHistory } from "vue-router";

import AppHomepage from "./pages/AppHomepage.vue";
import AppContactPage from "./pages/AppContactPage.vue";
import AppAboutUs from "./pages/AppAboutUs.vue";
import AppNotFound from "./pages/AppNotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: AppHomepage,
    },
    {
      path: "/contact",
      name: "Contact",
      component: AppContactPage,
    },
    {
      path: "/about",
      name: "About us",
      component: AppAboutUs,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: AppNotFound,
    },
  ],
});
export { router };
