<template>
    <header>
    <div class=img2NP>
      <router-link to="/">  
      <img src ="@/assets/logo.png" />
      </router-link>
    </div>
    </header>
</template>

<script>


export default ({
    data() {
        return{
        title: '2NPortal'
        }
    },
    
})
</script>
<style scoped>
.img2NP{
width: 50px;
height: 50px;
display: block;
margin-left: auto;
margin-right: auto;
}
</style>