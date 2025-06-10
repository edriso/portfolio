<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Kudos",
  setup() {
    // Data
    const kudos = ref([]);

    // Lifecycle Hooks
    onMounted(() => {
      axios
        .get("../db/kudos.json")
        .then((res) => (kudos.value = res.data.slice().reverse()));
    });

    return {
      kudos,
    };
  },
};
</script>

<template>
  <main class="kudos">
    <p class="kudos__intro">During my time at <a href="https://scandiweb.com" target="_blank" rel="noopener noreferrer">Scandiweb</a>, I had the chance to use two great internal apps. One is <a href="https://scandiweb.small-improvements.com" target="_blank" rel="noopener noreferrer">Small Improvements</a>, where team leads and colleagues give feedback, and the other is <a href="https://crowdbonus.com" target="_blank" rel="noopener noreferrer">Crowdbonus</a>, which allows employees to share 50 euros as a way of saying thanks. Below are some of the feedback and recognition I received through these platforms.</p>

    <ul class="kudos__content">
      <li
        v-for="kudo in kudos"
        :key="kudo.id"
        class="kudos__item flex flex-col flex-ai-c flex-jc-c flex-gap-sm text-center"
      >
        <blockquote class="kudos__quote">
          <span class="kudos__quote-mark">&#8220;</span>
          <span class="kudos__quote-text">{{ kudo.content }}</span>
          <span class="kudos__quote-mark">&#8221;</span>
        </blockquote>

        <p class="kudos__date" v-if="kudo.date">{{ kudo.date }}</p>
      </li>
    </ul>
  </main>
</template>
