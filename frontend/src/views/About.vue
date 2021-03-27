<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import AddCustomer from '@/components/AddCustomer.vue'

export default {
  name: 'About',
  components: {
    AddCustomer
  }
}
</script>

//include an FAQ and 