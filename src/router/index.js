import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import DestinationPage from "../pages/DestinationPage.vue";
import CrewPage from "../pages/CrewPage.vue";
import TechnologyPage from "../pages/TechnologyPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/destination",
      component: DestinationPage,
    },
    {
      path: "/crew",
      component: CrewPage,
    },
    {
      path: "/technology",
      component: TechnologyPage,
    },
  ],
});

export default router;
