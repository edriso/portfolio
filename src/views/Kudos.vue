<script>
export default {
  name: "Kudos",
  data() {
    return {
      kudos: [
        "hello there",
      ],
    };
  },
};
</script>

<template>
  <main class="kudos">
    <p>During my time at <a href="https://scandiweb.com" target="_blank" rel="noopener noreferrer">Scandiweb</a>, I had the chance to use two great internal apps. One is <a href="https://scandiweb.small-improvements.com" target="_blank" rel="noopener noreferrer">Small Improvements</a>, where team leads and colleagues provide feedback, and the other is <a href="https://crowdbonus.com" target="_blank" rel="noopener noreferrer">Crowdbonus</a>, which allows employees to share 50 euros as a token of appreciation. Below are some of the feedback and recognition I received through these platforms.</p>

    <ul class="kudos__content">
      <li v-for="(kudo, i) in kudos" :key="i">
        <span>{{ kudo }}</span>
      </li>
    </ul>
  </main>
</template>
