<template>
  <div class="rectangles-wrapper">
    <div class="blue-rectangle">
      <h2>Víctor Daniel Garzón</h2>
      <h2>&</h2>
      <h2>Blanca Marlen Montaño</h2>
    </div>
    <div class="blue-rectangle">
      <h2>Jose Antonio Robayo</h2>
      <h2>&</h2>
      <h2>Blanca Elizabeth Montes</h2>
    </div>
  </div>
</template>

<style scoped>
/* Estilos para los títulos */
h2 {
  font-size: 32px;
  font-family: Parisienne;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #EDE6DA;
  margin-bottom: 10px; /* Añadir margen inferior para separación */
}

/* Estilos para el contenedor del swiper y el rectángulo azul */

.rectangles-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px; /* Margen inferior para evitar superposición en móviles */
}

.blue-rectangle {
  width: 40%;
  margin: 10px;
  height: auto;
  background-color: #347355;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
}

@media (min-width: 1200px) {
  .blue-rectangle {
    width: 35%; /* Ancho reducido para que dos elementos estén uno al lado del otro */
  }
  
  .rectangles-wrapper {
    margin-bottom: 120px; /* Margen inferior mayor para pantallas grandes */
  }
}

@media (min-width: 769px) and (max-width: 1199px) {
  .blue-rectangle {
    width: 40%; /* Ancho ajustado para pantallas medianas */
  }

  .rectangles-wrapper {
    margin-bottom: 60px; /* Margen inferior ajustado para pantallas medianas */
  }
}

@media (max-width: 768px) {
  .rectangles-wrapper {
    flex-direction: column;
    margin-bottom: 40px; /* Margen inferior para móviles */
  }

  h2 {
    font-size: 24px;
    font-family: Parisienne;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #EDE6DA;
  }
  .blue-rectangle {
    width: 90%;
    padding: 10px;
    margin: 10px auto;
    border-radius: 10px;
  }
}

</style>
