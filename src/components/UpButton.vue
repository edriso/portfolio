<script>
export default {
  name: "UpButton",
  data() {
    return {
      scrolled: false,
    };
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    onScroll() {
      if (window.top.scrollY > 500) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<template>
  <button class="up-button" @click="scrollTop" v-if="scrolled">&#8593;</button>
</template>
