<template>
  <div class="py-5 my-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col">
          <h1 class="dress-code-title">Código de vestimenta</h1>
        </div>
      </div>
    </div>
    <div class="container-fluid"> 
      <div class="row">
        <!-- Columna para HOMBRES con fondo completo -->
        <div class="col-md-6 col-sm-12">
          <div class="row">  
            <div class="col-4 d-flex align-items-stretch">
              <div class="panel panel-left d-flex align-items-center justify-content-center">
                <h2 class="section-title"><strong>
                                                  <br>H</br>
                                                  <br>O</br>
                                                  <br>M</br>
                                                  <br>B</br>
                                                  <br>R</br>
                                                  <br>E</br>
                                                  <br>S</br>
                                          </strong>
                  </h2>
              </div>
            </div>
            <div class="col-8 text-center">
              <img :src="`../img/vestimenta/Hombre.svg`" alt="Traje formal" class="img-fluid hombre">
              <p class="clothing-type"><strong>Traje formal</strong></p>
              <hr class="separator">
              <div class="restriction">
                <p>Por favor no usar:</p>
                <ul class="list-unstyled">
                  <li>Chaleco</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-sm-12">
          <div class="row">
            
            <div class="col-8 text-center">
              <img :src="`../img/vestimenta/mujer.svg`" alt="Vestido formal" class="img-fluid mujer">
              <p class="clothing-type"><strong>Vestido formal</strong></p>
              <hr class="separator">
              <div class="restriction">
                <p>Por favor no usar:</p>
                <ul class="list-unstyled">
                  <li>Colores claros como: Blanco, beige o nude</li>
                </ul>
              </div>
            </div>
            <div class="col-4 d-flex align-items-stretch">
              <div class="panel panel-right d-flex align-items-center justify-content-center">
                <h2 class="section-title"><strong>M<br>
                                                  U<br>
                                                  J<br>
                                                  E<br>
                                                  R<br>
                                                  E<br>
                                                  S
                                          </strong></h2>
              </div>
            </div>
          </div>
        </div>

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
.container-fluid{
  padding-left: 60px;
  padding-right: 60px;
}
.hombre{
  height:308px;
  width: 104px;
}
.mujer{
  height:308px;
  width: 154px;
}
.dress-code-title {
  font-family: 'Parisienne', cursive;
  font-size: 32px;
  color: #222;
  margin-bottom: 1rem;
}


.panel {
  background-color: #EFF3F5;
  border-radius: 10px;
}

.panel-left, .panel-right {
  width: 100%;
}

.section-title {
  margin: 0;
  white-space: nowrap;
  font-family: Cardo;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #222;
  text-align: center;
}


.clothing-type {
  margin-top: 1rem;
  text-align: center;
  font-family: "Gudea", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #222;
}

.restriction {
  text-align: center;
  margin-top: 1rem;
}


.separator {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  margin: 2rem 0;
}

@media (max-width: 780px) {
  .container-fluid{
  padding-left: 20px;
  padding-right: 20px;
}
}
</style>
