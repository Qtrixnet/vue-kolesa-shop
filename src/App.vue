<template>
  <div id="app">
    <div class="page">
      <Header @updateUserInfo="updateUserInfo" :infoUser="infoUser"></Header>
      <div class="navigation">
        <aside class="navigation__wrapper">
          <nav class="navigation__container">
            <a
              target="_blank"
              class="navigation__link"
              href="https://www.example.com/"
              >Оргсхема</a
            >
            <a
              target="_blank"
              class="navigation__link"
              href="https://www.example.com/"
              >Kolesa Team</a
            >
            <a
              target="_blank"
              class="navigation__link navigation__link_active"
              href="https://www.example.com/"
              >Kolesa Shop</a
            >
            <a
              target="_blank"
              class="navigation__link"
              href="https://www.example.com/"
              >Картина компании</a
            >
            <a
              target="_blank"
              class="navigation__link"
              href="https://www.example.com/"
              >Новости</a
            >
            <a
              target="_blank"
              class="navigation__link"
              href="https://www.example.com/"
              >Education</a
            >
            <a
              target="_blank"
              class="navigation__link"
              href="https://www.example.com/"
              >Guidelines</a
            >
            <a
              target="_blank"
              class="navigation__link"
              href="https://www.example.com/"
              >Библиотека</a
            >
            <a
              target="_blank"
              class="navigation__link"
              href="https://www.example.com/"
              >FAQ</a
            >
          </nav>
        </aside>

        <main class="main">
          <h1 class="main__title">Магазин мерча Kolesa Group</h1>
          <img
            class="main__image"
            width="1038"
            height="335"
            src="@/assets/images/main-banner.jpg"
            alt="Главный баннер"
          />
          <div class="main__point-button-container">
            <button class="main__point-button main__point-button_add">
              Получить баллы
            </button>
            <button class="main__point-button main__point-button_how">
              Как получить баллы
            </button>
            <button class="main__point-button main__point-button_gift">
              Подарить баллы
            </button>
          </div>
          <div class="main__category-button-container">
            <button
              data-category="all"
              class="main__category-button main__category-button_active"
            >
              Все товары
            </button>
            <button data-category="clothes" class="main__category-button">
              Одежда
            </button>
            <button data-category="accessories" class="main__category-button">
              Аксессуары
            </button>
          </div>
          <ul class="cards-list">
            <!-- Контейнер для рендеринга карточек товара -->
            <card
            @togglePopup="togglePopup"
            @openPopup="openPopup"></card>
          </ul>
        </main>
      </div>

      <footer class="footer">
        <div class="footer__container">
          <div class="footer__social">
            <span class="footer__social-title">Kolesa Group</span>
            <ul class="footer__social-list">
              <li class="footer__social-list-item">
                <a
                  target="_blank"
                  class="footer__social-link footer__social-link_instagram"
                  href="https://www.example.com/"
                ></a>
              </li>
              <li class="footer__social-list-item">
                <a
                  target="_blank"
                  class="footer__social-link footer__social-link_youtube"
                  href="https://www.example.com/"
                ></a>
              </li>
              <li class="footer__social-list-item">
                <a
                  target="_blank"
                  class="footer__social-link footer__social-link_vk"
                  href="https://www.example.com/"
                ></a>
              </li>
            </ul>
          </div>
          <div class="footer__info">
            <div class="footer__info-text">
              <span class="footer__info-subtitle"
                >Есть идеи что улучшить?
              </span>
              <span class="footer__info-subtitle"
                >Не знаешь, с кем решить проблему?</span
              >
            </div>
            <a
              class="footer__link"
              target="_blank"
              href="https://www.example.com/"
              >Написать</a
            >
          </div>
        </div>
      </footer>
      <popup @togglePopup="togglePopup" :isOpen="isShow"></popup>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Popup from './components/Popup.vue';
import Card from './components/Card.vue';

export default {
  name: 'App',
  components: {
    Header,
    Popup,
    Card,
  },
  computed: {
    allCards() {
      console.log(this.clothes);
      return [...this.clothes, ...this.accessories];
    },

    allCardsSorted() {
      return this.allCards
        .slice()
        .sort((card) => (!card.isNew ? 1 : -1));
    },

    filterCategories() {
      console.log(1);
      if (this.selectedTab === 'all') {
        console.log(2);
        return this.allCardsSorted;
      }
      if (this.selectedTab === 'clothes') {
        console.log(3);
        return this.clothes;
      }
      console.log(4);
      return this.accessories;
    },

  },
  data() {
    return {
      isShow: false,
      selectedTab: 'all',
      cards: [
        { id: 1, name: 'Одежда' },
        { id: 2, name: 'Одежда' },
        { id: 3, name: 'Одежда' },
        { id: 4, name: 'Одежда' },
        { id: 5, name: 'Одежда' },
        { id: 6, name: 'Одежда' },
      ],
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
          console.log(data);
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
          console.log(data);
          this.accessories = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openPopup(item) {
      this.togglePopup();
      this.popupData = item;
    },
    togglePopup() {
      this.isPopupShow = !this.isPopupShow;
    },
    updateUserInfo(userInfo) {
      this.infoUser = userInfo;
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
