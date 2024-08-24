<template>
  <div class="familia-section">
    <div class="container py-5">
      <h2 class="text-center mb-4 titulo-familia">Con la bendición de Dios y de nuestros padres</h2>
      <div class="row">
        <div class="col-md-12">
          <img :src="`../img/familia/familias.png`" alt="Familias" class="img-fluid rounded mb-2">
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p class="text-center nombre-papas">Juan Alberto Robayo Corredor y Alba Margoth Gomez Malgón</p>
        </div>
        <div class="col-md-6">
          <p class="text-center nombre-papas">Miguel Arcángel Rios Pulido y Rosa Maria Pulido Rodriguez</p>
        </div>
      </div>
      <div class="bendicion-text">
        <p class="text-center bendicion">
          La bendición de nuestros padres y seres queridos es invaluable. Su apoyo, sabiduría y amor incondicional nos han guiado hasta este momento. Llevamos con nosotros su bendición y aspiramos a honrar su legado construyendo un camino lleno de amor, respeto y comprensión mutua.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.titulo-familia {
  font-family: 'Parisienne', cursive;
  font-size: 2rem;
  color: #28464E;
}

/* Los estilos de .nombre-papas no necesitan un margen negativo */

.nombre-papas {
  font-family: "Gudea", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  color: #28464E;
  white-space: nowrap;
}
@media (min-width:1200px){
  .nombre-papas {
  white-space: nowrap;
}
}
/* Elimina el margen negativo de .bendicion-text */
.bendicion-text {
  margin-top: 0.2rem; /* Ajusta este valor si es necesario */
}

.bendicion {
  font-family: "Gudea", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #222;
}

.familia-section {
  position: relative;
}

.familia-section::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  bottom: 0;
  background: #EFF3F5;
  z-index: -1;
}

@media (min-width: 768px) {

  .nombre-papas {
    margin-top: 32px;
    font-size: 18px;
  }
}

@media (max-width: 1199px) {
  .familia-section::after {
    top: 30%;
  }
  .nombre-papas { 
    font-size: 12px;
  }
  /* Remove the negative margin on mobile for .bendicion-text */
  .bendicion-text {
    margin-top: 1rem;
  }
}
</style>
