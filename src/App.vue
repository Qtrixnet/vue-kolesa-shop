<template>
  <div id="app">
    <div class="page">
      <Header @updateUserInfo="updateUserInfo" :userInfo="userInfo" />
      <div class="navigation">
        <Navigation
          :nav-links="navLinks"
          :selected-link="selectedLink"
          @setActiveLink="changeActiveLink"
        />
        <router-view />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Navigation,
    Footer,
  },

  data() {
    return {
      navLinks: [
        {
          name: "Оргсхема",
          url: "orgscheme",
        },
        {
          name: "Kolesa Team",
          url: "team",
        },
        {
          name: "Kolesa Shop",
          url: "shop",
        },
        {
          name: "Картина компании",
          url: "overview",
        },
        {
          name: "Новости",
          url: "news",
        },
        {
          name: "Education",
          url: "education",
        },
        {
          name: "Guidelines",
          url: "guidelines",
        },
        {
          name: "Библиотека",
          url: "library",
        },
        {
          name: "FAQ",
          url: "faq",
        },
      ],
      // clothes: [],
      // accessories: [],
      selectedLink: "shop",
      // userInfo: {},
    };
  },
  methods: {
    changeActiveLink(link) {
      this.selectedLink = link.url;
    },
    updateUserInfo(userInfo) {
      this.userInfo = userInfo;
    },
    updateUserBalance(price) {
      this.userInfo.score -= price;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/index.scss";
</style>
