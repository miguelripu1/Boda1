<template>
 <h2 class="itinerary-title">Itinerario</h2>
  <div class="container contenedor">
    <div class="row">
      <div class="col">
        <!-- Itinerario para pantallas grandes (web) -->
        <img v-if="isLargeScreen" :src="itinerarioWeb" alt="Itinerario Web" class="img-fluid d-none d-md-block" />
        <!-- Imagen para pantallas pequeñas (mobile) -->
        <img  v-else :src="itinerarioMobile" alt="Itinerario Mobile" class="img-fluid d-block d-md-none" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLargeScreen: false,
      itinerarioWeb: '../img/itinerario/itinerario_web.png',
      itinerarioMobile: '../img/itinerario/itinerario_mobile.png'
    };
  },
  mounted() {
    this.isLargeScreen = window.innerWidth >= 768;
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isLargeScreen = window.innerWidth >= 768;
    }
  }
};
</script>

<style scoped>
.contenedor{
  padding-left: 60px;
  padding-right: 60px;
}
.itinerary-title {
  font-family: Cardo;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #593E25;
  padding-left: 60px; 
  width: fit-content;
  margin-top: 64px;
  margin-bottom: 32px;
}


 @media (max-width: 991px){
  .itinerary-title {
  font-size: 32px;
  }
  .contenedor{
  padding-left: 20px;
  padding-right: 20px;
}
}

@media (max-width: 767px) {
  .itinerary-title {
  background-color: #fff;
  padding-left: 10px;
  width: fit-content;
}
  }
</style>
