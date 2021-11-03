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
  methods: {
    getUserInfo() {
      fetch('https://api.json-generator.com/templates/7ZW3y5GAuIge/data', {
        headers: {
          Authorization: 'Bearer rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.userInfo = data;
          this.$emit('updateUserInfo', this.userInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getUserInfo();
  },
};
</script>
