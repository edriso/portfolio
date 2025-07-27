<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Kudos",
  setup() {
    // Data
    const kudos = ref([]);
    const documentationLink = "https://drive.google.com/drive/folders/1xE5Q3hZa2Ibg390MCRJc1Z45yObDNmSi?usp=sharing";

    // Lifecycle Hooks
    onMounted(() => {
      axios
        .get("../db/kudos.json")
        .then((res) => (kudos.value = res.data.slice().reverse()));
    });

    return {
      kudos,
      documentationLink,
    };
  },
};
</script>

<template>
  <main class="kudos">
    <p class="kudos__intro">
      During my time at <a href="https://scandiweb.com" target="_blank" rel="noopener noreferrer">Scandiweb</a>, I had the chance to use two wonderful apps. One is <a href="https://scandiweb.small-improvements.com" target="_blank" rel="noopener noreferrer">Small Improvements</a>, a platform where team leads and colleagues provide valuable feedback, and the other is <a href="https://crowdbonus.com" target="_blank" rel="noopener noreferrer">Crowdbonus</a>, which allowed employees to share €50 as a token of appreciation (paused as of July 2025). Below are some of the feedback and recognition I received through these platforms. 
      <a :href="documentationLink" target="_blank" rel="noopener noreferrer">(View Documentation)</a>
    </p>

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
