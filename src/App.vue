<script>
import Header from "./components/Header.vue";
import UpButton from "./components/UpButton.vue";
import Footer from "./components/Footer.vue";
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "vue";

export default {
  components: {
    Header,
    UpButton,
    Footer,
  },
  watch: {
    $route: {
      handler: function (to) {
        const name = "Mohamed Idris";
        document.title = to.meta.title ? `${name} | ${to.meta.title}` : name;
      },
      immediate: true,
    },
  },

  setup() {
    let isDarkMode = ref(false);

    const toggleMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };

    const darkModeStatus = () => {
      let darkMode;

      if (localStorage.getItem("darkMode") === null) {
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? (darkMode = true)
          : (darkMode = false);
      } else {
        darkMode = JSON.parse(localStorage.getItem("darkMode"));
      }

      isDarkMode.value = darkMode;
    };

    watch(isDarkMode, () => {
      isDarkMode.value
        ? document.documentElement.classList.add("darkMode")
        : document.documentElement.classList.remove("darkMode");

      // Update darkMode locally
      localStorage.setItem("darkMode", JSON.stringify(isDarkMode.value));
    });

    // check if device on dark mode or not
    onMounted(() => {
      darkModeStatus();
    });

    return { isDarkMode, toggleMode };
  },
};
</script>

<template>
  <Header :isDarkMode="isDarkMode" :toggle="toggleMode" />

  <div class="container">
    <router-view />
  </div>

  <UpButton />

  <Footer />
</template>


