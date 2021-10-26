<template>
  <li data-id="1" class="card cards-list__item">
    <div class="card__wrapper">
      <div class="card__image-container">
        <img
          loading="lazy"
          width="330"
          height="330"
          class="card__image"
        />
        <span class="card__new">new</span>
      </div>
      <div class="card__info">
        <span class="card__price">190 баллов</span>
        <h2 class="card__title">Название товара</h2>
        <span class="card__scale">Размеры</span>
        <button @click="openPopup(item)" class="card__button">Заказать</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: Object,
  },
  methods: {
    openPopup() {
      this.isShow = true;
      this.$emit('openPopup', this.item);
    },
    closePopup() {
      this.isShow = false;
    },
  },
  // methods: {
  //   openCard(item) {
  //     console.log(item);
  //     this.$emit("openCard", this.item);
  //   },
  // },
};
</script>
