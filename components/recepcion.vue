<template>
  <div class="event-details">
    <!-- Título de la sección -->
    <div class="title-container">
      <h1 class="title">Recepción</h1>
    </div>

    <!-- Contenedor de detalles del evento -->
    <div class="row align-items-center contenedor">
      <!-- Columna de imagen con separación en el lado izquierdo -->
      <div class="col-lg-7 image-container">
        <img :src="`../img/donde/restaurante.png`" alt="Lugar del evento" class="img-fluid">
      </div>
      <!-- Columna de texto con fondo azul en el lado derecho -->
      <div class="col-lg-5 details-col py-5 px-4 d-flex justify-content-center align-items-center">
        <div class="details-text">
          <p class="date"><strong>28 Septiembre, 2024 - 2:30pm</strong></p>
          <p class="location">Restaurante Tymba</p>
          <p class="location-detail">La Plazuela, Cogua</p>
          <div class="buttons-container">
            <a href="https://maps.app.goo.gl/UGWvd5hq9qiwh6kDA" target="_blank" class="btn btn-custom como-Llegar">
              ¿Cómo llegar?
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Tu lógica del componente
};
</script>

<style scoped>

.btn-custom, .como-Llegar {
    font-family: "Gudea", sans-serif;
    font-weight: 700;
    font-size: 14px;
  }
@media (max-width: 767px) {
  .buttons-container {
    display: flex;
    justify-content: space-around; /* Ajusta esto a 'space-between' o lo que mejor se adapte */
    align-items: center;
  }
  
  .como-Llegar, .calendario {
    flex: 1; /* Hace que los botones se expandan para ocupar el espacio disponible */
    margin: 0 4px; /* Añade un poco de margen entre los botones si es necesario */
    padding: 0.375rem 0.75rem; /* Ajusta el padding para que el texto y el icono quepan en una línea */
  }
  .calendario {
    /* Asegúrate de que el contenido esté en una sola línea */
    white-space: nowrap;
    /* Ajusta el padding si es necesario para que el texto no se envuelva */
    padding: 0.375rem; /* Modifica este valor según sea necesario */
    font-size: 14px; /* O lo que mejor se ajuste a tu diseño */
    /* Si es necesario, ajusta el tamaño de fuente para asegurarte de que todo quepa */
  }
}


h2{
  font-family: Parisienne;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  color:#222;
  margin-bottom:32px;
}
h1{
  font-family: Cardo;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #593E25;
  margin-bottom:32px;
}

.event-details {
  font-family: 'Open Sans', sans-serif;
  position: relative;
  overflow: hidden;
}
.calendario{
  display: inline-flex;
  height: 40px;
  font-weight: 700;
  font-size: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 100px;
  color: #28464E;
}
.calendario:hover {
  background-color: #EFF3F5;
  border-radius: 100px;
  border: 2px solid #7899AA;
}

.title-container {
  background-color: #fff;
  padding-left: 60px; 
  width: fit-content;
}

.title {
  font-size: 2rem;
  margin-top: 4rem;
  margin-bottom: 2rem; 
}

.image-container {
  padding-right: 0px; 
  padding-left: 60px; 
}

.details-col {
  background-color: #E1EAE6;
  color: #000000;
  padding-top: 8rem !important;
  padding-bottom: 8rem !important;
  height: 300px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.details-text h3.font-parisienne {
  font-family: 'Parisienne', cursive;
  font-size: 2rem;
  color: #000000;
}

.date{
  font-family: "Gudea", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color:#593E25;
  margin-bottom:32px;
}
.location {
  font-family: "Gudea", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color:#593E25;
  margin-bottom: 0px;
}
.location-detail {
  font-family: "Gudea", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color:#593E25;
  margin-bottom:32px;
}

.buttons-container {
  margin-top: 2rem;
}

.como-Llegar {
  font-family: "Gudea";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #347355;
  background-color: #fff;
  border: 2px solid #fff;
  margin-right: 1rem;
  padding: 0.375rem 0.75rem;
  text-decoration: none;
  display: inline-flex;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 100px;
}

.como-Llegar:hover {
  background-color: #EFF3F5;
  border-radius: 100px;
  border: 2px solid #347355;
}
.contenedor{
    padding-right: 60px;
  }


@media (max-width: 991.98px) {
 
  .contenedor{
    padding: 0px;
  }
}

@media (max-width: 767px) {
  .image-container {
    padding-left: 20px;
    padding-right: 20px;
  }
  .details-col {
    border-radius: 10px;
  }
  .title-container {
  background-color: #fff;
  padding-left: 10px;
  width: fit-content;
}
  }
</style>
