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

        <main class="main">
          <h1 class="main__title">Магазин мерча Kolesa Group</h1>
          <img
            class="main__image"
            width="1038"
            height="335"
            src="@/assets/images/main-banner.jpg"
            alt="Главный баннер"
          />
          <HotButtons />
          <FilterButtons
            :tabs="tabs"
            :selected-tab="selectedTab"
            @setActiveTab="changeActiveTab"
          />
          <ul class="cards-list">
            <Card
              v-for="item in filterCategories"
              :key="item.id"
              :item="item"
              @togglePopup="togglePopup"
              @openPopup="openPopup"
            />
          </ul>
        </main>
      </div>
      <Footer />
      <Popup
        @togglePopup="togglePopup"
        :isOpen="isOpen"
        :popupData="popupData"
        @removeBalance="updateUserBalance"
        :userInfo="userInfo"
      />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Popup from './components/Popup.vue';
import Card from './components/Card.vue';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import HotButtons from './components/HotButtons.vue';
import FilterButtons from './components/FilterButtons.vue';

export default {
  name: 'App',
  components: {
    Header,
    Popup,
    Card,
    Navigation,
    Footer,
    HotButtons,
    FilterButtons,
  },
  computed: {
    allCards() {
      return [...this.clothes, ...this.accessories];
    },

    allCardsSorted() {
      return this.allCards
        .slice()
        .sort((card) => (card.isNew ? -1 : 1));
    },

    filterCategories() {
      if (this.selectedTab === 'all') {
        return this.allCardsSorted;
      }
      if (this.selectedTab === 'clothes') {
        return this.clothes;
      }
      return this.accessories;
    },

  },
  data() {
    return {
      isOpen: false,
      selectedTab: 'all',
      tabs: [
        {
          name: 'Все товары',
          url: 'all',
        },
        {
          name: 'Одежда',
          url: 'clothes',
        },
        {
          name: 'Аксессуары',
          url: 'accessories',
        },
      ],
      navLinks: [
        {
          name: 'Оргсхема',
          url: 'orgscheme',
        },
        {
          name: 'Kolesa Team',
          url: 'team',
        },
        {
          name: 'Kolesa Shop',
          url: 'shop',
        },
        {
          name: 'Картина компании',
          url: 'overview',
        },
        {
          name: 'Новости',
          url: 'news',
        },
        {
          name: 'Education',
          url: 'education',
        },
        {
          name: 'Guidelines',
          url: 'guidelines',
        },
        {
          name: 'Библиотека',
          url: 'library',
        },
        {
          name: 'FAQ',
          url: 'faq',
        },
      ],
      clothes: [],
      accessories: [],
      selectedLink: 'shop',
      userInfo: {},
      popupData: {},
    };
  },
  methods: {
    getClothes() {
      fetch('https://api.json-generator.com/templates/-_RLsEGjof6i/data', {
        headers: {
          Authorization: 'Bearer rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.clothes = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAccessories() {
      fetch('https://api.json-generator.com/templates/q3OPxRyEcPvP/data', {
        headers: {
          Authorization: 'Bearer rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.accessories = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeActiveLink(link) {
      this.selectedLink = link.url;
    },
    changeActiveTab(tab) {
      this.selectedTab = tab.url;
    },
    openPopup(item) {
      this.togglePopup();
      this.popupData = item;
    },
    togglePopup() {
      this.isOpen = !this.isOpen;
    },
    updateUserInfo(userInfo) {
      this.userInfo = userInfo;
    },
    updateUserBalance(price) {
      this.userInfo.score -= price;
    },
  },
  created() {
    this.getClothes();
    this.getAccessories();
  },
};
</script>

<style lang="scss">
@import "./assets/styles/index.scss";
</style>
