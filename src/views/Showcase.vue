<script>
import Post from "../components/PostShowcase.vue";
import axios from "axios";
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";

export default {
  name: "Showcase",
  components: { Post },
  setup() {
    // Data
    const showcaseTypes = ref(["all", "apps", "shorts"]);
    const currentShowcaseType = ref("all");
    const posts = ref([]);
    const postIsBlock = ref(false);

    // Computed
    const filteredPosts = computed(() => {
      if (currentShowcaseType.value === "shorts") {
        return posts.value.filter((post) => post.type === "short");
      } else if (currentShowcaseType.value === "apps") {
        return posts.value.filter((post) => post.type === "app");
      } else {
        return posts.value;
      }
    });

    // Methods
    const filterPosts = (type) => {
      currentShowcaseType.value = type;
    };

    // Lifecycle Hooks
    onMounted(() => {
      axios
        .get("../db/showcase.json")
        .then((res) => (posts.value = res.data.slice().reverse()));
    });

    return {
      showcaseTypes,
      currentShowcaseType,
      postIsBlock,
      filteredPosts,
      filterPosts,
    };
  },
};
</script>

<template>
  <main class="showcase">
    <div class="flex flex-jc-sb flex-ai-c mb-md">
      <ul class="showcase__filter flex flex-gap-md">
        <li
          v-for="type in showcaseTypes"
          :key="type"
          :class="{ active: currentShowcaseType === type }"
          @click="filterPosts(type)"
        >
          {{ type }}
        </li>
      </ul>

      <div class="showcase__display" @click="postIsBlock = !postIsBlock">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            v-show="postIsBlock"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />

          <path
            v-show="!postIsBlock"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 8h16M4 16h16"
          />
        </svg>
      </div>
    </div>

    <div class="posts-grid" :class="{ block: postIsBlock }">
      <Post v-for="post in filteredPosts" :key="post.id" :post="post" />
    </div>
  </main>
</template>
