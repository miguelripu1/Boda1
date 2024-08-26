<template>
  <div class="familia-section">
    <div class="container py-5">
      <h1 class="text-center mb-4 titulo-familia">Con la bendición de Dios y de nuestros padres</h1>
      <div class="row p-5">
        <div class="col-md-6 mb-3">
          <img :src="`../img/familia/familia_esposa.png`" alt="Familia 1" class="img-fluid rounded">
          <p class="text-center mt-2"style="color:red;">Juan Alberto Robayo Corredor y Alba Margoth Gomez Malgón</p>
        </div>
        <div class="col-md-6 mb-3">
          <img :src="`../img/familia/familia_esposo.png`" alt="Familia 2" class="img-fluid rounded">
          <p class="text-center mt-2">Miguel Arcángel Rios Pulido y Rosa Maria Pulido Rodriguez</p>
        </div>
      </div>
      <div class="bendicion-text">
        <p class="text-center mt-4">
          La bendición de nuestros padres y seres queridos es invaluable. Su apoyo, sabiduría y amor incondicional nos han guiado hasta este momento. Llevamos con nosotros su bendición y aspiramos a honrar su legado construyendo un camino lleno de amor, respeto y comprensión mutua.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.titulo-familia{
  font-family: Parisienne;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #28464E;
}
.familia-section {
  background: linear-gradient(to bottom, #ffffff 50%, #f8f9fa 50%);
}

.bendicion-text{
  font-size: 1.25rem;
}
@media (max-width: 767px) {
  .familia-section {
    background: linear-gradient(to bottom, #ffffff 60%, #f8f9fa 40%);
  }
}
</style>
