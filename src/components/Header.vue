<template>
  <header @updateUserInfo="updateUserInfo" class="header">
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
      <UserInfo @updateUserInfo="updateUserInfo" :infoUser="infoUser" />

    </div>
  </header>
</template>

<script>
import UserInfo from './UserInfo.vue';

export default {
  name: 'Header',
  components: {
    // HeaderSearch,
    UserInfo,
  },
  props: {
    infoUser: Object,
  },
  methods: {
    updateUserInfo(userInfo) {
      this.$emit('updateUserInfo', userInfo);
    },
  },
};
</script>
