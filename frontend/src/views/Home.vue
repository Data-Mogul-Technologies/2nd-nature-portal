<template>

  <router-link :to="{name:'CustomerList'}"><button class="button2">New Customer</button></router-link>

</template>

<style scoped>
.button2 {
    display: inline-block;
    margin: 0em 2em;
    padding: 1.5em 2em;
    background: #fff;
    border: 2px solid rgb(8, 105, 161);
    border-radius: 3px;
    color: rgb(8, 105, 161);
    font-family: "Quicksand", sans-serif;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
  }

  .button2:hover {
    background: rgb(8, 105, 161);
    color: #fff;
  }
</style>

<script>
import CustomerList from '../components/customer/CustomerList'
export default {   
  name: 'home',
  components: {
    CustomerList
  }
}
</script>
