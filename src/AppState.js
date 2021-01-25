import { reactive } from 'vue'

// NOTE Reactive objects can be watched automagically by computeds
export const AppState = reactive({
  cars: [],
  activeCar: {},
  houses: [],
  activeHouse: {}
})
