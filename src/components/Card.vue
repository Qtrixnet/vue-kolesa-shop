<template>
  <li data-id="1" class="card cards-list__item">
    <div class="card__wrapper">
      <div class="card__image-container">
        <img
          loading="lazy"
          width="330"
          height="330"
          class="card__image"
          :src="item.mainImage"
          :alt="item.description"
        />
        <span v-if="item.isNew" class="card__new">new</span>
      </div>
      <div class="card__info">
        <span class="card__price" v-if="item.price">{{ item.price }} баллов</span>
        <span class="card__price" v-else>Цена по запросу</span>
        <h2 class="card__title">{{ item.title }}</h2>
        <span
          class="card__scale"
          v-if="item.sizes && item.sizes.length"
        >
          Размеры: {{ item.sizes.join(' / ') }}
        </span>
        <button @click="openPopup(item)" :data-id="item.id" class="card__button">Заказать</button>
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
    openPopup(item) {
      console.log(item);
      this.$emit('openPopup', this.item);
    },
  },
};
</script>
