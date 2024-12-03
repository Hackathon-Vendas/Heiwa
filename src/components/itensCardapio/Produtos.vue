<script setup>
defineProps(['name', 'description', 'imagem', 'unit', 'price']);
</script>
<template>
    <div class="produtos">
      <div class="item">
        <img :src=imagem class="image">
        <div class="details">
          <div class="name">
            <h3>{{ name }}</h3>
            <p class="unit">{{ unit }}</p>
            <p class="price">{{ price }}</p>
          </div>
          <p class="description">{{ description }}</p>
        </div>
      </div>
    </div>
</template>


<style scoped>

.produtos {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  width:  75%;;
  gap: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  margin-left: 19%;
  margin-top: 1%;
}

.item {
  display: flex;
  align-items: center;
  border-radius: 14px;
  width: 100%;
  height: 200px;
  background-color: rgba(69, 69, 69, 1);
  color: rgba(255, 255, 255, 1);
  margin-top: 1%;
  margin-left: 0.5%;
}


.image {
  width: 30%;
  height: 230px;
  border-radius: 20px ;
  object-fit: cover;
  margin-top: 1%;
  margin-right: 1%;
}


h3 {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-bottom: 2%;
  display: inline-block;
}

.price {
  font-family: 'Inter', sans-serif, sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-left: auto;
}


.unit {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.25em;
  color: #aaa;
  left: calc(50% - 163px/2 + 209px);
  display: inline-block;
}

.description {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-top: 5%;
}

.details {
  width: 80%;
  height: 70%;
  margin-right: 4%;
}

.name {
  display: flex;
}

</style>