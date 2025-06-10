import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Showcase from "../views/Showcase.vue";
import Kudos from "../views/Kudos.vue";
import Contact from "../views/Contact.vue";
import Tag from "../views/Tag.vue";

const routes = [
  {
    path: "/",
    name: "about",
    component: About,
  },
  {
    path: "/showcase",
    name: "showcase",
    component: Showcase,
    meta: {
      title: "Showcase",
    },
  },
  {
    path: "/kudos",
    name: "kudos",
    component: Kudos,
    meta: {
      title: "Kudos",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: {
      title: "Contact",
    },
  },
  {
    path: "/tags/:tag",
    name: "tag",
    component: Tag,
    props: true,
    meta: {
      title: "Showcase Tag",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
  routes,
});

export default router;
