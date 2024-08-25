<template>
<h2 class="section-title">Mesa de regalos</h2>
  <div class="container my-5">
    <div class="row">
      <div id="textoRegalos" class="col-12 col-lg-6 ">
        <p class="description">
          El mejor regalo que podríamos recibir es contar con tu presencia en nuestro día especial. Sin embargo, si deseas contribuir de otra manera, una lluvia de sobres será más que bienvenida.
        </p>
        <p class="description-second">
         ¡Gracias por ser parte de este momento tan importante en nuestras vidas!
        </p>
      </div>
      <div class="col-12 col-lg-6 text-center">
         <div class="col-md-11">
          <div class="card border-0" id="card-lluvia">
            <div class="card-body d-flex flex-row align-items-center">
              <img :src="`../img/mesa/sobre.png`" alt="Sobre" class="img-fluid" id="img-Sobre">
              <h5 class="ml-3 lluvia-text">Lluvia de sobres</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // JavaScript
};
</script>

<style scoped>
#textoRegalos{
  /*padding: 0 10%;*/
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
  margin-bottom: 0px;
}
.lluvia-text{
  font-family: "Gudea", Sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color:#347355;
}
.text-center{
  margin-top:30px;

}
.description {
  margin-bottom: 0.5rem;
  font-family: "Gudea", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #222;
}
.description-second {
  margin-bottom: 0.5rem;
  font-family: "Gudea", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #222;
}

.card-body {
  background-color: #EDE6DA; 
  color: #ffffff;
  justify-content: center;
  border-radius: 10px;
}

#card-lluvia{
  background-color: #D7E6F2;
}

#img-Sobre{
  width: 15%;
}

@media (max-width: 991px) {
  /* Ajustes para pantallas pequeñas */
  .section-title {
    background-color: #fff;
    padding-left: 10px;
    width: fit-content;
    margin-bottom: 0px;
  }
  .description {
    text-align: justify;
  }
  .description-second{
    margin-bottom: 30px;
    text-align: justify;
  }
}
</style>
