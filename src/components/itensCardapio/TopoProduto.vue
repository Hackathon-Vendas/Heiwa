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
  width: 75%;
  text-align: center;
  margin-left: 19%;

}

.banner {
  width: 100%;
  margin-top: 8%;
}

h2 {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-top: -30px;
  margin-bottom: 2%;
}
</style>