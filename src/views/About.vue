<script>
export default {
  name: "About",
  data() {
    return {
      name: "Mohamed Idris",
      title: "Web Developer",
      about: [
        "I’m a full-stack web developer passionate about building web applications that are both user-friendly and efficient. I focus on creating apps that solve real problems and are easy for people to use.",
        "I hold a Bachelor's degree in Computer Science, where I learned key programming concepts and software development principles. I also completed the ITI web development boot camp, which gave me hands-on experience in building web applications using PHP and Node.js.",
        "I have worked with various technologies, including backend frameworks like Node.js and Laravel, and frontend frameworks such as React.js and Vue.js. I’m also skilled in using databases like MySQL and MongoDB to build reliable and fast applications.",
        "I enjoy working with other professionals to create innovative solutions that help businesses grow and make a positive impact on users.",
      ],
      skills: [
        "HTML",
        "CSS (SASS, TailwindCSS)",
        "JavaScript",
        "Node.js (Express)",
        "PHP (Laravel)",
        "MySQL",
        "React.js",
        "Vue.js",
        "Alpine.js",
        "MongoDB",
        "Git",
      ],
    };
  },
};
</script>

<template>
  <main class="about">
    <div class="about__hero">
      <img
        class="about__hero-photo"
        src="../assets/profile-picture.jpg"
        :alt="name"
      />

      <div class="about__hero-intro">
        <p class="about__hero-text flex flex-jc-c flex-gap-sm">
          <span>Hello there</span>
          <img
            class="about__hero-icon"
            src="../assets/wave.svg"
            alt="greetings"
          />
        </p>
        <p class="about__hero-text">
          My name is <span class="about__text-highlight">{{ name }}</span
          >, and I'm a <span class="about__text-highlight">{{ title }}</span
          >.
        </p>
      </div>
    </div>

    <div class="about__section about__section--about">
      <h2 class="about__heading">About Me</h2>
      <ul class="about__content">
        <li v-for="(item, i) in about" :key="i" v-html="item"></li>
      </ul>
    </div>

    <div class="about__section about__section--skills">
      <h2 class="about__heading">Skills</h2>
      <ul class="about__content flex flex-wrap">
        <li v-for="(skill, i) in skills" :key="i">{{ skill }}</li>
      </ul>
    </div>

    <!-- <div class="about__section">
      <h2 class="about__heading">Acknowledgement</h2>
      <div class="about__content">
        <p>
          “I'm SO grateful that I'm surrounded by a wonderful family &amp;
          friends who are a BIG reason for making the best of me, and always
          inspiring me and pushing me to amazing heights. A big shout-out to my
          people, AND to all the great teachers who taught me and helped me grow
          and glow. I can't thank you enough folks!”
        </p>
      </div>
    </div> -->
  </main>
</template>
