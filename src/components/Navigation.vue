<template>
  <aside class="navigation__wrapper">
    <nav class="navigation__container">
      <a
        target="_blank"
        class="navigation__link"
        :class="{ 'navigation__link_active': selectedLink === link.url }"
        href="https://www.example.com/"
        v-for="(link, index) in navLinks" :key="index"
        @click="setActiveLink(link)"
        >{{ link.name }}</a
      >
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    navLinks: Array,
    selectedLink: String,
  },
  methods: {
    setActiveLink(link) {
      this.$emit('setActiveLink', link);
    },
  },
};
</script>
