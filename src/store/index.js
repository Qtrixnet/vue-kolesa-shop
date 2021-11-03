import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'Kirill',
    userInfo: {
      name: '',
      avatarUrl: '',
      score: '',
    },
    clothes: [],
    accessories: [],
  },
  mutations: {
    updateClothes(state, response) {
      state.clothes = response;
    },
    updateAccessories(state, response) {
      state.accessories = response;
    },
    updateUserInfo(state, response) {
      state.userInfo = response;
    },
    updateUserBalance(state, price) {
      state.userInfo.score -= price;
    },
  },
  actions: {
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
    getClothes() {
      fetch('https://api.json-generator.com/templates/-_RLsEGjof6i/data', {
        headers: {
          Authorization: 'Bearer rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.clothes = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAccessories() {
      fetch('https://api.json-generator.com/templates/q3OPxRyEcPvP/data', {
        headers: {
          Authorization: 'Bearer rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.accessories = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
