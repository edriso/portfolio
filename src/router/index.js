import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Works from "../views/Works.vue";
import Contact from "../views/Contact.vue";
import Tag from "../views/Tag.vue";

const routes = [
  {
    path: "/",
    name: "about",
    component: About,
  },
  {
    path: "/works",
    name: "works",
    component: Works,
    meta: {
      title: "Works",
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
      title: "Work Tag",
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
