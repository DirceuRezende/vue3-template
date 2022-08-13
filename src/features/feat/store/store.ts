import { defineStore } from 'pinia';

const useFeatStore = defineStore({
  id: 'feat',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++;
    }
  }
});

export default useFeatStore;
