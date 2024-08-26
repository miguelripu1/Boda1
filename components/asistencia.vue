<template clss="color-fondo">

  <h1 class="section-title">Confirmar asistencia</h1>
  <div class="container">
        <p class="green-text">
          Nos encanta los niños, pero esta será una fiesta exclusiva para adultos
        </p>
      </div>
      <div class="container-fluid"> 
        <div class="row confirmation-section align-items-center justify-content-between">
          <div class="col-md-8 text-container">
            <p>Para nosotros es muy importante contar con tu presencia en este día tan especial. Por favor, confirma tu asistencia antes del 18 de septiembre enviando un mensaje de WhatsApp.</p>
            <p>¡Esperamos verte y celebrar juntos este gran momento!</p>
          </div>
          <div class="col-md-4 text-center whatsapp-container" style="margin-top: 0px;">
            <div class="whatsapp-info d-flex align-items-center justify-content-center" >
              <i class="whatsapp-icon"></i>
              <span class="whatsapp-number">316 1123 445</span>
            </div>
            <a href="https://wa.me/573161123445" target="_blank" class="btn btn-whatsapp">
              Clic para confirmar tu asistencia
            </a>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  /* Estilos generales */
  .container-fluid {
    padding-left: 90px;
    padding-right: 90px;
  }
  
  .section-title {
    margin-top: 30px;
    margin-bottom: 30px;
    font-family: Cardo;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color:#593E25;
    padding-left: 60px;
  }
  
  .green-text {
    font-family: 'Gudea', sans-serif;
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    line-height: 24.72px;
    text-align: left;
    color: #347355;
    margin-bottom: 2rem;
  }
  
  .confirmation-section {
    background-color: #E1EAE6;
    padding: 30px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; /* Permite que el contenido se ajuste mejor en pantallas pequeñas */
  }
  
  .text-container p {
    font-family: "Gudea", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #593E25;
    margin-bottom: 1rem;
  }
  
  .whatsapp-container {
    text-align: center;
    margin-top: 20px;
  }
  
  .whatsapp-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .whatsapp-icon {
    background-image: url('../img/icons/whatsapp-icon.svg');
    background-size: cover;
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
  
  .whatsapp-number {
    font-family: "Gudea", sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #593E25;
  }
  
  .btn-whatsapp {
    background-color: #fff;
    color: #347355;
    border: 1px solid #347355;
    font-family: "Gudea", sans-serif;
    font-weight: 700;
    font-size: 14px;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    text-decoration: none;
    display: inline-block;
    margin-top: 10px;
    margin-right: 0px;
  }
  
  .btn-whatsapp:hover {
    background-color: #EFF3F5;
    border-color: #347355;
  }
  
  @media (max-width: 767px) {
    .confirmation-section {
      padding: 20px;
      flex-direction: column;
      text-align: center;
    }
  
    .text-container {
      margin-bottom: 20px;
    }
    .container-fluid {
    padding-left: 50px;
    padding-right: 50px;
  }
  .section-title {
    padding-left: 10px;
  }
  }
  </style>
  