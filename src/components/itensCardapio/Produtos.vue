<script setup>
defineProps(['name', 'description', 'imagem', 'unit', 'price']);
</script>
<template>
  <main>
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
  </main>
</template>


<style scoped>

main {
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8%;
  margin-left: 27%;
}

.produtos {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.item {
  display: flex;
  align-items: center;
  border-radius: 14px;
  width: 100%;
  height: 200px;
  background-color: rgba(69, 69, 69, 1);
  color: rgba(255, 255, 255, 1);
  margin-top: 3%;
  cursor: pointer;
}

.image {
  width: 250px;
  height: 230px;
  border-radius: 18px;
  margin-top: 19px;
}

h3 {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-bottom: 2%;
}

.price {
  font-family: 'Inter', sans-serif, sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  position: absolute;
  right: 15%;
}

.unit {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-left: 10px;
}

.description {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-top: 5%;
}

.details {
  height: 80%;
}

.name {
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 1200px) {
  main {
    width: 80%;
    margin-left: 10%;
  }
  
  .price {
    right: 10%;
  }
}

@media (max-width: 768px) {
  main {
    width: 90%;
    margin-left: 0;
  }
  
  .item {
    flex-direction: column;
    height: auto;
  }
  
  .image {
    width: 100%;
    height: auto;
    margin-top: 10px;
  }
  
  .price {
    position: relative;
    right: 0;
    margin-top: 10px;
  }
  
  .description {
    margin-top: 10px;
  }
}

@media (max-width: 480px) {
  main {
    width: 95%;
    margin-left: 0;
  }
  
  h3 {
    font-size: 18px;
  }
  
  .price {
    font-size: 14px;
    margin-top: 5px;
  }
  
  .description {
    font-size: 16px;
  }
}
</style>
