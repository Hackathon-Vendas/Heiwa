<script setup>
defineProps(['title','image']);
</script>
<template>
      <div class="topo">
        <img :src=image class="banner">
        <h2>{{ title }}</h2>
      </div>
</template>


<style scoped>
.topo{
  margin-bottom: 2%;
  width: 650px;
  text-align: center;
  margin-left: 16%;

}

.banner {
  width: 100%;
  margin-top: 10%;
}

h2 {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.25em;
  color: #FFFFFF;
}
</style>
