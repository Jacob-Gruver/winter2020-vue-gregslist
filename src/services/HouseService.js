import { AppState } from '../AppState'
import { api } from './AxiosService'

class HouseService {
  async getHouse() {
    // fetch data
    const res = await api.get('')
    // add to AppState
    AppState.houses = res.data
  }

  //   async getOne(id) {
  //     const res = await api.get(id)
  //     AppState.activeCar = res.data
  //   }

//   async create(car) {
//     const res = await api.post('', car)
//     AppState.cars.push(res.data)
//     return res.data.id
//   }
}

export const houseService = new HouseService()
