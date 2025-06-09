<script>
import Post from "../components/PostWork.vue";
import axios from "axios";
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";

export default {
  name: "Works",
  components: { Post },
  setup() {
    // Data
    const workTypes = ref(["all", "apps", "shorts"]);
    const currentWorkType = ref("all");
    const posts = ref([]);
    const postIsBlock = ref(false);

    // Computed
    const filteredPosts = computed(() => {
      if (currentWorkType.value === "shorts") {
        return posts.value.filter((post) => post.type === "short");
      } else if (currentWorkType.value === "apps") {
        return posts.value.filter((post) => post.type === "app");
      } else {
        return posts.value;
      }
    });

    // Methods
    const filterPosts = (type) => {
      currentWorkType.value = type;
    };

    // Lifecycle Hooks
    onMounted(() => {
      axios
        .get("../db/works.json")
        .then((res) => (posts.value = res.data.slice().reverse()));
    });

    return {
      workTypes,
      currentWorkType,
      postIsBlock,
      filteredPosts,
      filterPosts,
    };
  },
};
</script>

<template>
  <main class="works">
    <div class="flex flex-jc-sb flex-ai-c mb-md">
      <ul class="works__filter flex flex-gap-md">
        <li
          v-for="type in workTypes"
          :key="type"
          :class="{ active: currentWorkType === type }"
          @click="filterPosts(type)"
        >
          {{ type }}
        </li>
      </ul>

      <div class="works__display" @click="postIsBlock = !postIsBlock">
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
