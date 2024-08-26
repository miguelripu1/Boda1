<template>
  <div class="container saludo-container">
    <div class="row">
      <div class="col-12 text-center">
        <h1 style="margin-bottom:8px" class="titulo-saludo">Con la bendición de Dios y de nuestros padres</h1>
      </div>
    </div>
  </div>
</template> 

<script>

</script>

<style scoped>
h1 {
  font-family: Cardo;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #593E25;
}

.saludo-container {
  padding:1rem 1rem;
  color:#593E25;
}

@media (max-width: 600px) {
  .saludo-container {
 margin-top: -40px; /* Ajustar este valor según sea necesario */
}
}

@media (min-width: 600px) and (max-width: 800px) {
  .saludo-container {
  margin-top: -60px; /* Ajustar este valor según sea necesario */
}
}

@media (min-width: 800px) and (max-width: 1200px) {
  .saludo-container {
  margin-top: -5vw; /* Ajustar este valor según sea necesario */
}
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .saludo-container {
  margin-top: -6vw; /* Ajustar este valor según sea necesario */
}
}
@media (min-width: 1600px) {
  .saludo-container {
  margin-top: -4vw; /* Ajustar este valor según sea necesario */
}
}
</style>
