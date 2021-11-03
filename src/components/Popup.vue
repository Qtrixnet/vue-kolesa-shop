<template>
  <div v-if="isOpen" class="popup">
    <div class="popup__window">
      <div class="popup__slider">
        <img
          class="popup__slider-image"
          :src="popupData.mainImage"
          :alt="popupData.title"
          width="330"
          height="330"
        />
        <ul
          v-if="popupData.images"
          v-html="generatePreviews(popupData.images)"
          class="popup__slider-preview">
        </ul>
      </div>
      <form action="" class="popup__form">
        <h2 class="popup__title">{{ popupData.title }}</h2>
        <div class="popup__main-info">
          <div class="popup__info-container">
            <span class="popup__price">{{ popupData.price }} баллов</span>
            <button class="submit-button" type="submit" @click="removeBalance">Заказать</button>
            <p class="popup__error" v-if="isError">
              Внимание! У Вас недостаточно баллов для покупки!
            </p>
          </div>
          <div class="balance">
            <span class="balance__title">Твой балланс:</span>
            <span class="balance__count">{{ userInfo.score }} баллов</span>
          </div>
        </div>
        <fieldset class="popup__form-data">
          <h4 class="popup__checkbox-title" v-if="popupData.colors">Цвета:</h4>
          <ul
            v-html="generateColors(popupData.colors)"
            class="checkbox-list"
            v-if="popupData.colors"
          >
          </ul>
          <h4 class="popup__checkbox-title" v-if="popupData.sizes">Размер:</h4>
          <ul
            class="checkbox-list"
            v-html="generateSizes(popupData.sizes)"
            v-if="popupData.sizes"
          >
          </ul>
          <h4 class="popup__checkbox-title" v-if="popupData.volumes">Объем:</h4>
          <ul
            class="checkbox-list"
            v-html="generateVolumes(popupData.volumes)"
            v-if="popupData.volumes"
          >
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
    created() {
      console.log(this.userInfo);
    },
    generatePreviews(images) {
      return images
        .map(
          (image) => `<img
              class="popup__slider-preview-image"
              src=${image}
              alt='Изображение товара'
              width="50"
              height="50"
            />
          </li>`,
        )
        .join('');
    },
    generateVolumes(volumes) {
      return volumes
        .map(
          (volume) => `<li class="checkbox-list__item">
              <input
                class="popup__input"
                name="volume"
                type="radio"
                id="volume-${volume}"
                value="volume-${volume}"
                required
              />
              <label for="volume-${volume}" class="popup__label">${volume}</label>
            </li>`,
        )
        .join('');
    },
    generateSizes(sizes) {
      return sizes
        .map(
          (size) => `<li class="checkbox-list__item">
              <input
                class="popup__input"
                name="size"
                type="radio"
                id="size-${size}"
                value="size-${size}"
                required
              />
              <label for="size-${size}" class="popup__label">${size}</label>
            </li>`,
        )
        .join('');
    },
    generateColors(colors) {
      return colors
        .map(
          (color) => `<li class="checkbox__list-item">
              <input
                class="popup__input"
                name="color"
                type="radio"
                id=${color.label}
                value=${color.label}
                required
              />
              <label
                for=${color.label}
                class="popup__label popup__label_color"
              >
                <span
                  style="background-color: ${color.color}"
                  class="popup__color"
                ></span
                >${color.label}
              </label>
            </li>`,
        )
        .join('');
    },
  },
};
</script>
