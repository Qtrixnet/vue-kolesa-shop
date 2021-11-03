<template>
  <a
    class="header__link"
    target="_blank"
    href="https://www.example.com/"
  >
    <img class="header__avatar" :src="userInfo.avatarUrl"/>
    <div class="header__user-info">
      <span class="header__user-name">{{ userInfo.name }}</span>
      <span class="header__user-money">{{ userInfo.score }} баллов</span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      userInfo: {},
    };
  },
  props: {
    infoUser: Object,
  },
  created() {
    this.getUserInfo();
  },
};
</script>
