<script setup>
defineProps(['title','image']);
</script>
<template>
    <main>
      <div class="topo">
        <img :src=image class="banner">
        <h2>{{ title }}</h2>
      </div>
    </main>
</template>


<style scoped>
.main {
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8%;
  margin-left: 27%;
}

.topo{
  margin-bottom: 10%;
  width: 1000px;
  text-align: center;
  margin-left: 24%;
  margin-top: 10%;

}

.banner {
  width: 100%;
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
