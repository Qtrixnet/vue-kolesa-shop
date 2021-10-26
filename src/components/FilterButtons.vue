<template>
  <div class="main__category-button-container">
    <button
      v-for="(tab, index) in tabs"
      class="main__category-button"
      :class="{ 'main__category-button_active': selectedTab === tab.slug }"
      :key="index"
      @click="setActiveTab(tab)"
    > {{ tab.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'FilterButtons',
  props: {
    tabs: Array,
    selectedTab: String,
  },
  methods: {
    setActiveTab(tab) {
      this.$emit('setActiveTab', tab);
    },
  },
};
</script>
