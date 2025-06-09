<script>
export default {
  name: "Contact",
  data() {
    return {
      email: "edriso.dev@gmail.com",
    };
  },
};
</script>

<template>
  <main class="contact">
    <div class="contact-flex">
      <img class="contact__photo" src="../assets/contact.jpg" alt="phone" loading="eager" />

      <div>
        <p class="contact__text">Thanks for checking out my portfolio!</p>
        <p class="contact__text mb-sm">
          If you would like for us to work together, please don't hesitate to
          contact me
          <img
            class="contact__icon"
            src="../assets/call.svg"
            alt="call me emoji"
          />
        </p>

        <div class="contact__links-container">
          <a
            class="contact__link"
            :href="'mailto:' + email"
            target="_blank"
            rel="nofollow noreferrer"
            >{{ email }}</a
          >
        </div>
      </div>
    </div>
  </main>
</template>
