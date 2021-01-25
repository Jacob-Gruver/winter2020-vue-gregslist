<template>
  <div class="cars-page container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1><img alt="Vue logo" src="../assets/logo.png" class="logo" /></h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form @submit.prevent="createCar">
          <div class="form-group-inline">
            <label for="make">Make</label>
            <input
              type="text"
              name="make"
              id="make"
              v-model="state.newCar.make"
              class="form-control"
              placeholder="Make..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="model">model</label>
            <input
              type="text"
              name="model"
              id="model"
              v-model="state.newCar.model"
              class="form-control"
              placeholder="model..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="year">year</label>
            <input
              type="number"
              name="year"
              id="year"
              v-model="state.newCar.year"
              class="form-control"
              placeholder="year..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="price">price</label>
            <input
              type="number"
              name="price"
              id="price"
              v-model="state.newCar.price"
              class="form-control"
              placeholder="price..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="description">description</label>
            <input
              type="text"
              name="description"
              id="description"
              v-model="state.newCar.description"
              class="form-control"
              placeholder="description..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="imgUrl">imgUrl</label>
            <input
              type="text"
              name="imgUrl"
              id="imgUrl"
              v-model="state.newCar.imgUrl"
              class="form-control"
              placeholder="imgUrl..."
              aria-describedby="helpId"
            />
          </div>
          <button type="submit" class="btn btn-success">Add Car</button>
        </form>
      </div>
    </div>
    <div class="row">
      <Car v-for="car in cars" :key="car.id" :car="car" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { carsService } from '../services/CarsService'
import { AppState } from '../AppState'
import Car from '../components/Car.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'CarsPage',
  setup() {
    const router = useRouter()
    const state = reactive({
      newCar: {}
    })

    // NOTE on mounted gets called when the page is first mounted to the dom (similar to constructors)
    onMounted(() => {
      try {
        carsService.getCars()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state,
      // if data changes dynimcally in the appstate use a computed
      cars: computed(() => AppState.cars),

      async createCar() {
        try {
          const id = await carsService.create(state.newCar)
          state.newCar = {}
          // change route in javascript using router.push()
          router.push({ name: 'CarDetails', params: { id } })
        } catch (error) {
          console.error(error)
        }
      }

    }
  },
  components: {
    Car
  }
}
</script>

<style lang="scss">
  // .logo {
  //  transform: rotateZ(90deg);
  //  height: 1em
  // }
</style>
