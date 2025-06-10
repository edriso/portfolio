<script>
export default {
  setup() {
    const imageSrc = (imgName) => {
      return new URL(`../assets/showcase/${imgName}`, import.meta.url).href;
    };
    return { imageSrc };
  },
  props: {
    post: Object,
  },
};
</script>

<template>
  <div class="post">
    <a
      class="post__demo"
      :href="post.demo || post.code"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        class="post__img"
        :src="imageSrc(post.img)"
        :alt="post.title"
        decoding="async"
      />
      <p class="post__title" v-if="post.title">{{ post.title }}</p>
    </a>

    <div class="post__body flex flex-jc-sb flex-ai-c flex-gap-md">
      <ul class="post__tags flex flex-gap-sm">
        <li v-for="tag in post.tags" :key="tag">
          <router-link
            :to="{ name: 'tag', params: { tag: tag.toLowerCase() } }"
          >
            #{{ tag }}
          </router-link>
        </li>
      </ul>

      <a
        :href="post.code"
        target="_blank"
        rel="noopener noreferrer"
        class="post__code"
        title="Code"
      >
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 10.935v2.131l-10 4.934v-2.23l7.64-3.77-7.64-3.779v-2.221l10 4.935zm-24 0v2.131l10 4.934v-2.23l-7.64-3.77 7.64-3.779v-2.221l-10 4.935z"
          />
        </svg> -->
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M16 3.383l-.924-.383-7.297 17.617.924.383 7.297-17.617zm.287 3.617l6.153 4.825-6.173 5.175.678.737 7.055-5.912-7.048-5.578-.665.753zm-8.478 0l-6.249 4.825 6.003 5.175-.679.737-6.884-5.912 7.144-5.578.665.753z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
