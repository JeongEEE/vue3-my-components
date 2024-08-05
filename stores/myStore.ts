import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
  state: () => ({
    title: 'Nuxt3 Pinia' as string,
    count: 0 as number,
  }),
  getters: {
    getTitle(): string {
      return this.title;
    },
    getCount(): number {
      return this.count;
    },
  },
  actions: {
    increment(): void {
      this.count++;
    },
    changeTitle(v: string): void {
      this.title = v;
    },
  },
});

if (import.meta.hot) {  //HMR
  import.meta.hot.accept(acceptHMRUpdate(useMyStore, import.meta.hot))
}