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
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 17%;
  margin-top: 1%;
}

.produtos {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
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
}


.image {
  width: 25%;
  height: 220px;
  border-radius: 20px !important;
  object-fit: cover;
  margin-top: 1.5%;
  margin-left: 0.2%;
  margin-right: 1%;
}

h3 {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-bottom: 2%;
  display: inline-block;
}

.price {
  font-family: 'Inter', sans-serif, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-left: auto;
}

.unit {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
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
  height: 70%;
  margin-right: 4%;
}

.name {
  display: flex;
  align-items: baseline;
}
@media (max-width: 1024px) {
  main {
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
  margin-left: 3%;
}

.produtos {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  margin-left: 0.1%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}

.item {
  display: flex;
  align-items: center;
  border-radius: 14px;
  width: 100%;
  height: 100px;
  background-color: rgba(69, 69, 69, 1);
  color: rgba(255, 255, 255, 1);
  margin-top: 2%;
}

.image {
  width: 30%;
  height: 115px;
  border-radius: 18px;
  object-fit: cover;
  margin-top: 1.5%;
  margin-left: 1%;
  margin-right: 1%;
}

h3 {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size:  0.55em;
  line-height: 16px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  display: inline-block;
  white-space: nowrap;
}

.price {
  font-family: 'Inter', sans-serif, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size:  0.55em;
  line-height: 27px;
  letter-spacing: 0.25em;
  color: #FFFFFF;
  margin-right: 0;
}

.unit {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size:  0.55em;
  line-height: 24px;
  letter-spacing: 0.25em;
  color: #aaa;
  margin-left: 0;
  display: inline-block;
  white-space: nowrap;

}

.description {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 18px;
  letter-spacing: 0.20em;
  color: #FFFFFF;
  margin-top: 0.01%;
}

.details {
  height: 70%;
  margin-right: 4%;
}

.name {
  display: flex;
  width: 100%;
}
}
</style>
