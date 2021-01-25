<template>
    <div class="row">
        <div class="col">
            
        </div>
    </div>
</template>

<script>
import { houseService } from '../services/HouseService'

export default {
  name: 'HousePage',
  onMounted() {
    try {
      houseService.getHouse()
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
