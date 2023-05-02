import { defineStore } from "pinia";

export const useRootStore = defineStore('root', {
  state: () => {
    return {
      userName: 'Jannik'
    }
  },

  getters: {
    greeting: (state) => `Hi there, ${state.userName}!`
  },
  
  actions: {
    setUserName(name: string): void {
      this.userName = name
    }
  }
})