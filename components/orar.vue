<template>
        <h2 class="ora-title">Ora con nosotros</h2>
  <div class="container p-5">
    <!-- Título y pasaje bíblico -->
    <div class="row">
      <div class="col-12 col-lg-5 text-center">
        <p class="invite-text">¿Te unes a orar por nosotros?</p>
        <div id="oraciones"class="scripture-text">
          <p>Eclesiastés 4:9-12</p>
          <p>"Mejor son dos que uno, porque obtienen más fruto de su esfuerzo.</p>
          <p>Si caen, el uno levanta al otro; ¡Ay del que cae y no tiene quien le levante!</p>
          <p>Si dos se acuestan juntos, entrarán en calor; uno solo ¿cómo va a calentarse?</p>
          <p>Uno solo puede ser vencido, pero dos pueden resistir. ¡La cuerda de tres hilos no se rompe fácilmente!"</p>
        </div>
      </div>
      <div class="col-12 col-lg-7" id="contadores">
        <div class="row">
          <div id="contadorPadre" class="col-12 col-lg-6 justify-content-end">
            <div class="counter-card">
              <p class="counter-text">Personas han hecho un <br> padre nuestro por nosotros</p>
              <div class="counter-circle">
                <span class="counter-number">+{{ padreNuestroCount }}</span>
              </div>
              <button class="btn counter-btn" @click="incrementPadreNuestro">Clic + un padre nuestro</button>
            </div>
          </div>

          <!-- Contador de 'Un Rosario' -->
          <div class="col-12 col-lg-6">
            <div class="counter-card">
              <p class="counter-text">Personas han hecho un <br>  rosario por nosotros</p>
              <div class="counter-circle">
                <span class="counter-number">+{{ rosarioCount }}</span>
              </div>
              <button class="btn counter-btn" @click="incrementRosario">Clic + un rosario</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  mounted() {

      this.cargarOraciones();

  },
  data() {
    return {
      padreNuestroCount: 0, // Valor inicial para el contador de 'Un Padre Nuestro'
      rosarioCount: 0,      // Valor inicial para el contador de 'Un Rosario'
    };
  },
  methods: {
    async cargarOraciones(){

      const response = await axios.get(
          "https://angelicaymiguel.com:8000/get-prayers",
          {
              headers: {
                  "Access-Control-Allow-Origin": "*",
              },
              mode: "cors",
          }
      );

      if (response.data.success) {
        
        if(this.padreNuestroCount = response.data.allPrayers[0].oracion == "padre"){

          this.padreNuestroCount = response.data.allPrayers[0].likes;
          this.rosarioCount = response.data.allPrayers[1].likes;

        }else if(this.padreNuestroCount = response.data.allPrayers[0].oracion == "rosario"){

          this.padreNuestroCount = response.data.allPrayers[1].likes;
          this.rosarioCount = response.data.allPrayers[0].likes;

        }

      }

    },
    async incrementPadreNuestro() {
      // Método para incrementar el contador de 'Un Padre Nuestro'

      this.incrementarOracion('padre');

      //this.padreNuestroCount++;
    },
    async incrementRosario() {
      // Método para incrementar el contador de 'Un Rosario'
      //this.rosarioCount++;
      this.incrementarOracion('rosario');
    },
    async incrementarOracion(oracion){

      let data = {
        nombre: oracion,
      };

      const response = await axios.post(
          "https://angelicaymiguel.com:8000/add-like",
          data,
          {
              headers: {
                  "Access-Control-Allow-Origin": "*",
              },
              mode: "cors",
          }
      );

      if (response.data.success) {

        if(this.padreNuestroCount = response.data.allPrayers[0].oracion == "padre"){

          this.padreNuestroCount = response.data.allPrayers[0].likes;
          this.rosarioCount = response.data.allPrayers[1].likes;

        }else if(this.padreNuestroCount = response.data.allPrayers[0].oracion == "rosario"){

          this.padreNuestroCount = response.data.allPrayers[1].likes;
          this.rosarioCount = response.data.allPrayers[0].likes;

        }
        
      }
    }
  }
};
</script>

<style scoped>
p{
  font-family: "Gudea",sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #222;
}
#contadores{
  background-color:#7899AA;
  border-radius: 10px;
  display: flex;
  align-items: center; /* Alineación vertical */
  justify-content: center; /* Alineación horizontal */
}
.ora-title {
  font-family: Cardo;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #222;
  padding-left: 60px;
  margin-top: 48px;
}
@media (max-width: 767px) {
  .ora-title {
  background-color: #fff;
  padding-left: 10px;
  width: fit-content;
}
  }
.invite-text {
  font-size: 24px; /* Tamaño para el subtítulo */
  color: #333; /* Color oscuro para el texto */
  margin-bottom: 2%; /* Espacio debajo del subtítulo */
  font-family: 'Parisienne', cursive;
}
#oraciones{
  padding: 10%;
  padding-top: 32px;
}


@media (max-width: 991.98px) {
  .invite-text {
    text-align: center; /* Centrar el texto en pantallas pequeñas */
  }
}

.counter-card {
  display: flex;
  flex-direction: column; /* Apila los elementos verticalmente */
  align-items: center; /* Centra los elementos horizontalmente */
  justify-content: center; /* Centra los elementos verticalmente */
  height: 100%; /* O define una altura específica si es necesario */
  text-align: center; /* Asegura que el texto también esté centrado */
}

.counter-circle {
  background-color: #EFF3F5; /* Color de fondo de las bolas */
  border-radius: 50%; /* Hace que las bolas sean redondas */
  width: 100px; /* Tamaño de las bolas */
  height: 100px; /* Tamaño de las bolas */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 32px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.counter-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: #28464E;
}
#contadorPadre, .counter-card {
  padding: 0 40px; /* Aumenta el padding para más espacio entre las tarjetas */
}
.counter-text {
  font-family: "Gudea", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #222;
  margin: 16px 0; /* Ajusta el espaciado vertical según sea necesario */
  line-height: 1.2em; /* Asegura que el texto no sea demasiado apretado */
  max-height: 2.4em; /* Para garantizar que solo muestre dos líneas */
  overflow: hidden; /* Oculta el texto que exceda las dos líneas */
  white-space: nowrap; /* Evita que el texto se ajuste a la siguiente línea */
  text-overflow: ellipsis; /* Añade puntos suspensivos al final si el texto es demasiado largo */
}

.counter-btn {
  color: #28464E; /* Color del texto del botón */
  padding: 0.5rem 1rem; /* Padding del botón */
  cursor: pointer; /* Cambia el cursor al pasar por encima del botón */
  border-radius: 100px;
  border: 2px solid #7899AA;
  background-color:  #FFF;
  font-family: "Gudea",sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #28464E;
  display: inline-block; /* Asegura que el padding se aplique correctamente */
  text-align: center; /* Asegura que el texto esté centrado */
  white-space: nowrap; /* Evita que el texto pase a la siguiente línea */
  margin-bottom: 42px;
  margin-right: 0px;
}

.counter-btn:hover {
  background-color: #EFF3F5;
  border-radius: 100px;
  border: 2px solid #7899AA;
}

</style>
