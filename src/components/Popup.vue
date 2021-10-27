<template>
  <div v-if="isOpen" class="popup">
    <div class="popup__window">
      <div class="popup__slider">
        <img
          class="popup__slider-image"
          :src="popupData.mainImage"
          alt="${name}"
          width="330"
          height="330"
        />
        <ul class="popup__slider-preview">
          <li>
            <img
              class="popup__slider-preview-image"
              src="@/assets/images/product-images/amr-taha.jpg"
              alt='Футболка "Эволюционируй или сдохни"'
              width="50"
              height="50"
              v-if="popupData.images"
            />
          </li>
          <li>
            <img
              class="
                popup__slider-preview-image popup__slider-preview-image_active
              "
              src="@/assets/images/product-images/amr-taha.jpg"
              alt="${name}"
              width="50"
              height="50"
              v-if="popupData.images"
            />
          </li>
          <li>
            <img
              class="popup__slider-preview-image"
              src="@/assets/images/product-images/amr-taha.jpg"
              alt='Футболка "Эволюционируй или сдохни"'
              width="50"
              height="50"
            />
          </li>
        </ul>
      </div>
      <form action="" class="popup__form">
        <h2 class="popup__title">{{ popupData.title }}</h2>
        <div class="popup__main-info">
          <div class="popup__info-container">
            <span class="popup__price">{{ popupData.price }} баллов</span>
            <button class="submit-button" type="submit" @click="removeBalance">Заказать</button>
            <p v-if="isError">
            Внимание! У Вас недостаточно баллов для покупки!
            </p>
          </div>
          <div class="balance">
            <span class="balance__title">Твой балланс:</span>
            <span class="balance__count">{{ userInfo.score }} баллов </span>
          </div>
        </div>
        <fieldset class="popup__form-data">
          <h4 class="popup__checkbox-title" v-if="popupData.colors">Цвета:</h4>
          <ul class="checkbox-list" v-if="popupData.colors">
            <li class="checkbox__list-item">
              <input
                class="popup__input"
                name="color"
                type="radio"
                id="blue"
                value="blue"
                required
              />
              <label
                for="blue"
                class="popup__label popup__label_color"
              >
                <span
                  style="background-color: blue"
                  class="popup__color"
                ></span
                >blue
              </label>
            </li>
          </ul>
          <h4 class="popup__checkbox-title">Размер:</h4>
          <ul class="checkbox-list">
            <li class="checkbox-list__item">
              <input
                class="popup__input"
                name="size"
                type="radio"
                id="size-m"
                value="size-m"
                required
              />
              <label for="size-m" class="popup__label">m</label>
            </li>
          </ul>
        </fieldset>
        <h4 class="popup__details">Детали:</h4>
        <h3 class="popup__details-text">{{ popupData.description }}</h3>
        <h4 class="popup__details">Как выбрать размер:</h4>
        <h3 class="popup__details-text">Написать дяде Рику для уточнения.</h3>
      </form>
      <button
        type="button"
        @click="togglePopup"
        class="popup__close-button"
      ></button>
    </div>
    <div @click="togglePopup" class="popup__overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    isOpen: Boolean,
    popupData: Object,
    userInfo: Object,
  },
  data() {
    return {
      isError: false,
    };
  },
  methods: {
    togglePopup() {
      this.$emit('togglePopup');
    },
    openPopup() {
      this.isOpen = true;
    },
    closePopup() {
      this.isOpen = false;
    },
    removeBalance() {
      if (this.userInfo.score < this.popupData.price) {
        this.isError = true;
        return;
      }
      this.$emit('removeBalance', this.popupData.price);
      this.$emit('togglePopup');
    },
  },
};
</script>
