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
  margin-left: 25%;
}

.topo{
  margin-bottom: 2%;
  width: 1000px;
  text-align: center;
  margin-left: 20%;

}

.banner {
  width: 100%;
  margin-top: 8%;
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
@media (max-width: 1024px) {
  .main {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.topo{
  margin-bottom: 1%;
  width: 350px;
  text-align: center;
  margin-left: 11%;
}


.banner {
  width: 100%;
  margin-top: 20%;
}


h2 {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  text-align: center;
  letter-spacing: 0.35em;
  color: #FFFFFF;
  
}
}
@media (max-width: 768px) {
  .main {
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 27%;
}


.topo{
  margin-bottom: 10%;
  width: 1000px;
  text-align: center;
  margin-left: 20%;


}


.banner {
  width: 100%;
  margin-top: 8%;
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
}


@media (max-width: 480px) {
  .main {
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25%;
}


.topo{
  margin-bottom: 10%;
  width: 1000px;
  text-align: center;
  margin-left: 18%;


}


.banner {
  width: 100%;
  margin-top: 8%;
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
}

</style>
