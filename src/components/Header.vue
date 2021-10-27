<template>
  <header @updateUserInfo="updateUserInfo" class="header">
    <a
      class="header__logo"
      href="https://www.example.com"
      target="_blank"
    ></a>
    <div class="header__container">
      <Search />
      <UserInfo @updateUserInfo="updateUserInfo" :infoUser="userInfo" />

    </div>
  </header>
</template>

<script>
import UserInfo from './UserInfo.vue';
import Search from './Search.vue';

export default {
  name: 'Header',
  components: {
    Search,
    UserInfo,
  },
  props: {
    userInfo: Object,
  },
  methods: {
    updateUserInfo(userInfo) {
      this.$emit('updateUserInfo', userInfo);
    },
  },
};
</script>
