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
  width: 1150px;
  text-align: center;
  margin-left: 3%;

}

.banner {
  width: 100%;
  margin-top: 7%;
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
  margin-top: -20px;
}
@media (max-width: 1440px) {

.topo{
  margin-bottom: 3%;
  width: 100%;
  text-align: center;
  margin-left: 0%;
}


.banner {
  width: 100%;
  margin-top: 12%;
  height: 150px;
}

/* Group 72 

position: absolute;
width: 1071px;
height: 225px;
left: 284px;
top: 120px;

*/


h2 {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  text-align: center;
  letter-spacing: 0.35em;
  color: #FFFFFF;
  margin-top: -20px;
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
