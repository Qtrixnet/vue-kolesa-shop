<template>
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
      <!-- Контейнер для рендеринга карточек товара -->
      <Card
        v-for="item in filterCategories"
        :key="item.id"
        :item="item"
        @togglePopup="togglePopup"
        @openPopup="openPopup"
      />
    </ul>
    <Popup
      @togglePopup="togglePopup"
      :isOpen="isOpen"
      :popupData="popupData"
      @removeBalance="updateUserBalance"
      :userInfo="userInfo"
    />
  </main>
</template>

<script>
import Popup from "./components/Popup.vue";
import Card from "./components/Card.vue";
import HotButtons from "./components/HotButtons.vue";
import FilterButtons from "./components/FilterButtons.vue";
export default {
  name: "Shop",
  components: {
    FilterButtons,
    HotButtons,
    Card,
    Popup,
  },
  data() {
    return {
      tabs: [
        {
          name: "Все товары",
          url: "all",
        },
        {
          name: "Одежда",
          url: "clothes",
        },
        {
          name: "Аксессуары",
          url: "accessories",
        },
      ],
      clothes: [],
      accessories: [],
      popupData: {},
    };
  },
  computed: {
    allCards() {
      console.log(this.clothes);
      return [...this.clothes, ...this.accessories];
    },

    allCardsSorted() {
      return this.allCards.slice().sort((card) => (card.isNew ? -1 : 1));
    },

    filterCategories() {
      if (this.selectedTab === "all") {
        return this.allCardsSorted;
      }
      if (this.selectedTab === "clothes") {
        return this.clothes;
      }
      return this.accessories;
    },
  },
  methods: {
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
  },
  created() {
    this.$store.dispatch("getClothes");
    this.$store.dispatch("getAccessories");
  },
};
</script>
