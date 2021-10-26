<template>
  <form class="header__search-container">
    <input
      class="header__search"
      required
      placeholder="Поиск"
      type="text"
      v-model.trim="query"
    />
    <button class="header__search-button" type="submit"></button>
  </form>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      query: '',
    };
  },
};
</script>
