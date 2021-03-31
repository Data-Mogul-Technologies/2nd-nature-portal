<template>

  <div class="main-content">
    <CustomerList />
  </div>

</template>

<script>
import CustomerList from '@/components/CustomerList.vue'
export default {
  name: 'home',
  components: {
    CustomerList
  }
}
</script>
