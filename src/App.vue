<template>
  <div id="app">
    <div class="page">
      <header class="header">
        <a
          class="header__logo"
          href="https://www.example.com"
          target="_blank"
        ></a>
        <div class="header__container">
          <form class="header__search-container">
            <input
              class="header__search"
              required
              placeholder="Поиск"
              type="text"
            />
            <button class="header__search-button" type="submit"></button>
          </form>
          <a
            class="header__link"
            target="_blank"
            href="https://www.example.com/"
          >
            <div class="header__avatar"></div>
            <div class="header__user-info">
              <span class="header__user-name">Мортиджан</span>
              <span class="header__user-money">300 баллов</span>
            </div>
          </a>
        </div>
      </header>

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
            <li
              :data-id="item.id"
              v-for="(item, index) in students"
              :key="index"
              :id="item.id"
              class="card cards-list__item"
            >
              <div class="card__wrapper">
                <div class="card__image-container">
                  <img
                    loading="lazy"
                    width="330"
                    height="330"
                    class="card__image"
                    src="src/images/product-images/${picture}"
                    alt="изображение"
                  />
                  <span v-if="item.isNew" class="card__new">new</span>
                </div>
                <div class="card__info">
                  <span class="card__price"
                    >${price} ${generateWord(price, templateWords)}
                  </span>
                  <h2 class="card__title">${name}</h2>
                  ${sizes ? `<span class="card__scale">
                    Размеры ${sizes.join(' / ')} </span
                  >` : ''}
                  <button @click="openPopup" class="card__button">
                    Заказать
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </main>
      </div>

      <div class="popup">
        <div class="popup__window">
          <div class="popup__slider">
            <img
              class="popup__slider-image"
              src="src/images/product-images/${picture}"
              alt="${name}"
              width="330"
              height="330"
            />
            <ul class="popup__slider-preview">
              <li>
                <img
                  class="popup__slider-preview-image"
                  src="./src/images/preview-2.png"
                  alt='Футболка "Эволюционируй или сдохни"'
                  width="50"
                  height="50"
                />
              </li>
              <li>
                <img
                  class="
                    popup__slider-preview-image
                    popup__slider-preview-image_active
                  "
                  src="src/images/product-images/${picture}"
                  alt="${name}"
                  width="50"
                  height="50"
                />
              </li>
              <li>
                <img
                  class="popup__slider-preview-image"
                  src="./src/images/preview-3.png"
                  alt='Футболка "Эволюционируй или сдохни"'
                  width="50"
                  height="50"
                />
              </li>
            </ul>
          </div>
          <form action="" class="popup__form">
            <h2 class="popup__title">Футболка 'Love thy emeny' от Jonathan Sanchez</h2>
            <div class="popup__main-info">
              <div class="popup__info-container">
                <span class="popup__price"
                  >100 баллов</span
                >
                <button
                  class="submit-button"
                  type="submit"
                >
                  Заказать
                </button>
              </div>
              <div class="balance">
                <span class="balance__title">Твой балланс:</span>
                <span class="balance__count">
                  3000 баллов
                </span>
              </div>
            </div>
            <fieldset class="popup__form-data">
              ${colors ? `
              <h4 class="popup__checkbox-title">Цвета:</h4>
              <ul class="checkbox-list">
                ${colors.map(color => generateColorsMarkup(color)).join('')}
              </ul>
              ` : ''} ${sizes ? `
              <h4 class="popup__checkbox-title">Размер:</h4>
              <ul class="checkbox-list">
                ${sizes.map(size => generateSizesMarkup(size)).join('')}
              </ul>
              ` : ''}
            </fieldset>
            <h4 class="popup__details">Детали:</h4>
            <h3 class="popup__details-text">Футболка 'Love thy emeny' от Jonathan Sanchez</h3>
            <h4 class="popup__details">Как выбрать размер:</h4>
            <h3 class="popup__details-text">
              Написать дяде Рику для уточнения.
            </h3>
          </form>
          <button type="button" class="popup__close-button"></button>
        </div>
        <div class="popup__overlay"></div>
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
    </div>
  </div>
</template>

<script>
import generateRandomId from './utils/generateRandomId';

export default {
  name: 'App',
  data() {
    return {
      accessories: [
        {
          id: generateRandomId(),
          isNew: true,
          price: 23,
          picture: 'amr-taha.jpg',
          details: 'Шикарные белые бусы от Amr Taha',
          name: 'Бусы',
        },
        {
          id: generateRandomId(),
          isNew: false,
          price: 37,
          picture: 'apostolos-vamvouras.jpg',
          details: 'Самые солнцезащитные очки от Apostolos Vamvouras',
          name: 'Солнцезащитные очки',
        },
        {
          id: generateRandomId(),
          isNew: true,
          price: 22,
          picture: 'lilartsy.jpg',
          details:
            "Комплект бижутерии от Lil'Artsy. Ты просто оцепенеешь когда наденешь её на себя ⛓",
          name: 'Бижутерия',
        },
        {
          id: generateRandomId(),
          isNew: false,
          price: 10,
          picture: 'logan-weaver.jpg',
          details: 'Визитница из натуральной кожи дракона 🐲, от Logan Weaver',
          name: 'Визитница',
        },
        {
          id: generateRandomId(),
          isNew: false,
          price: 31,
          picture: 'mike-von.jpg',
          details: 'Комплект сверкающих ✨ браслетов от Mike Von',
          name: 'Комплект браслетов',
        },
        {
          id: generateRandomId(),
          isNew: false,
          price: 48,
          picture: 'salman-hossain-saif.jpg',
          details: 'Самые точные в мире наручные часы ⏱ от Salman Hossain Saif',
          name: 'Наручные часы',
        },
      ],
      clothes: [
        {
          id: generateRandomId(),
          isNew: true,
          price: 101,
          picture: 'fucking-awesome.jpg',
          details: "Футболка 'fucking awesome' от всем известного дизайнера",
          name: "Футботка 'Fucking awesome'",
          sizes: ['S', 'M', 'L'],
          colors: [
            {
              value: '#FBCEB1',
              name: 'Абрикосовый',
            },
            {
              value: '#7FFFD4',
              name: 'Аквамариновый',
            },
            {
              value: '#fff',
              name: 'Белый',
            },
          ],
        },
        {
          id: generateRandomId(),
          isNew: false,
          price: 202,
          picture: 'hunter-newton.jpg',
          details:
            "Эксклюзивная черная футболка 'Phenomenally black' от Hunter Newton",
          name: "Футболка 'Phenomenally black'",
          sizes: ['XL', 'XXL'],
          colors: [
            {
              value: '#000',
              name: 'Черный',
            },
          ],
        },
        {
          id: generateRandomId(),
          isNew: true,
          price: 255,
          picture: 'kukuvaja.jpg',
          details: "Футботка с хмурой совой - 'Kukuvaja'",
          name: "Футботка 'Kukuvaja'",
          sizes: ['M', 'L'],
          colors: [
            {
              value: '#E32636',
              name: 'Ализариновый красный',
            },
            {
              value: '#9966CC',
              name: 'Аметистовый',
            },
            {
              value: '#000',
              name: 'Черный',
            },
          ],
        },
        {
          id: generateRandomId(),
          isNew: false,
          price: 179,
          picture: 'austin-wade.jpg',
          details: "Футболка 'Methodical coffee' от Austin Wade",
          name: "Футболка 'Methodical coffee'",
          sizes: ['S', 'M'],
          colors: [
            {
              value: '#B5B8B1',
              name: 'Агатовый серый',
            },
            {
              value: '#44944A',
              name: 'Арлекин',
            },
            {
              value: '#6E5160',
              name: 'Баклажановый Крайола',
            },
            {
              value: '#79553D',
              name: 'Бежево-коричневый',
            },
          ],
        },
        {
          id: generateRandomId(),
          isNew: false,
          price: 183,
          picture: 'jonathan-sanchez.jpg',
          details: "Футболка 'Love thy emeny' от Jonathan Sanchez",
          name: "Футболка 'Love thy emeny'",
          sizes: ['S', 'M'],
          colors: [
            {
              value: '#004524',
              name: 'Глубокий зеленый',
            },
            {
              value: '#DCDCDC',
              name: 'Гейнсборо',
            },
            {
              value: '#5E2129',
              name: 'Винно-красный',
            },
          ],
        },
        {
          id: generateRandomId(),
          isNew: false,
          price: 136,
          picture: 'vinicius-henrique.jpg',
          details:
            "Футболка 'Let me hear the fucking bass' от Vinicius Henrique",
          name: "Футболка 'Let me hear the fucking bass'",
          sizes: ['S', 'M'],
          colors: [
            {
              value: '#F3A505',
              name: 'Георгиново-желтый',
            },
            {
              value: '#ff681d',
              name: 'Белый',
            },
            {
              value: '#42AAFF',
              name: 'Голубой',
            },
            {
              value: '#F34723',
              name: 'Гранатовый',
            },
          ],
        },
      ],
    };
  },
  // computed: {
  //   allItems() {
  //     return [...this.clothes, ...this.accessories];
  //   },
  //   allItemsSorted() {
  //     return this.allItems
  //       .slice()
  //       .sort((item) => (item.isNew !== true ? 1 : -1));
  //   },
  //   sortElements() {
  //     [...this.clothes, ...this.accessories].sort(item => (item.isNew ? -1 : 1));
  //   }
  // },
  // methods: {
  //   openModalWindow() {
  //     this.isModalOpen = true;
  //   },
  //   closeModalWindow() {
  //     this.isModalOpen = false;
  //   },
  // },
};
</script>

<style lang='scss'>
@import './assets/styles/index.scss';
</style>
