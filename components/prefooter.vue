<template>
  <div class="prefooter-wrapper">
    <img :src="`../img/footer/subfooter.png`"alt="Fondo" class="img-fondo">
    <div class="prefooter-content">
      <img :src="`../img/footer/anillos.png`" alt="Anillos" class="img-anillos">
      <h2 class="names">Iván & Leidy</h2>
      <p class="date">28 Septiembre 2024</p>
    </div>
  </div>
</template>

<script>
export default {
  // Opciones del componente
}
</script>

<style scoped>
.prefooter-wrapper {
  position: relative;
  text-align: center;
  margin-top: 5%;
}

.img-fondo {
  width: 100%;
  height: auto;
  display: block;
}

.prefooter-content {
  position: absolute;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
}

.img-anillos {
  /*max-width: 100px;*/
  max-width: 22%;
  margin-bottom: 0rem;
}

.names {
  font-family: 'Parisienne', cursive;
  font-size: 5rem;
  color: #ffffff;
}

.date {
  font-family: Cardo;
  font-size: 2rem;
  color: #ffffff;
}

@media (max-width: 1275px) {

  .names {
    font-size: 3rem;
  }

  .date {
    font-size: 1.5rem;
  }

}
@media (max-width: 765px) {

  .names {
    font-size: 2rem;
  }

  .date {
    font-size: 1rem;
  }

}
@media (max-width: 590px) {

  .names {
    font-size: 1.2rem;
  }

  .date {
    font-size: 0.8rem;
  }

  .img-anillos {
    max-width: 17%;
    margin-bottom: 0.75rem;
}

}

@media (max-width: 399px) {

  .names {
    font-size: 1rem;
  }

  .date {
    font-size: 0.7rem;
  }

  .img-anillos {
    max-width: 15%;
    margin-bottom: 0.55rem;
}

}
</style>
