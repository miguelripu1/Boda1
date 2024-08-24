<template>
  <div class="swiper-container">
    <div class="rectangles-wrapper">
      <div class="blue-rectangle">
        <h1>Nuestra historia</h1>
        <h2>AMMA</h2>
        <p>Angélica María - Miguel Arcángel</p>
      </div>
      <div class="red-rectangle"></div>
    </div>
  <swiper
    @slideChange="onSlideChange"
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img :src="`../img/timeline/2015.png`" /></swiper-slide>
    <swiper-slide><img :src="`../img/timeline/2016.png`" /></swiper-slide>
    <swiper-slide><img :src="`../img/timeline/2017.png`" /></swiper-slide>
    <swiper-slide><img :src="`../img/timeline/2018.png`" /></swiper-slide>
    <swiper-slide><img :src="`../img/timeline/2019.png`" /></swiper-slide>
    <swiper-slide><img :src="`../img/timeline/2020.png`" /></swiper-slide>
    <swiper-slide><img :src="`../img/timeline/2021.png`" /></swiper-slide>
    <swiper-slide><img :src="`../img/timeline/2022.png`" /></swiper-slide>
    <swiper-slide><img :src="`../img/timeline/2023.png`" /></swiper-slide>
    <swiper-slide><img :src="`../img/timeline/2024.png`" /></swiper-slide>
    <swiper-slide><img :src="`../img/timeline/siempre.png`" /></swiper-slide>
  </swiper>
</div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';



  // import required modules
  import { EffectCoverflow, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
      };
    },
    methods: {
      onSlideChange(swiper) {
        const activeIndex = swiper.activeIndex;
        console.log(activeIndex);
      }
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    }
  };
</script>

<style scoped>

h1{
  font-family: Cardo;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #222;
}
h2{
  font-size: 32px;
	font-family: Parisienne;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
  color: #222;
}
p{
  font-family: "Gudea", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px ;
  color: #222;
}
/* Estilos para el contenedor del swiper y el rectángulo azul */
.swiper-container {
  position: relative;
  width: 100%;
  padding-top: 50px; /* Espacio superior para escritorio */
  padding-bottom: 50px; /* Espacio inferior para escritorio */
  margin-top: 50px;
  margin-bottom: 50px;
}

.blue-rectangle {
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 10;
  width: 400px; /* Ancho incrementado para escritorio */
  height: 40%; /* Altura reducida para escritorio */
  transform: translateY(-50%); /* Centrado verticalmente para escritorio */
  background-color: #7899AA;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.red-rectangle {
  background-color: #EFF3F5;
  width: 70%; /* en escritorio, ocupa todo el ancho hasta el borde derecho */
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1; /* Asegura que el rectángulo rojo quede detrás de los slides */
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
@media (min-width: 1200px) {
  .blue-rectangle {
    width: 420px; /* Ancho incrementado para escritorio */
  }

}

/* Ajustes específicos para dispositivos móviles */
@media (max-width: 768px) {
  .rectangles-wrapper{
    
    padding-right:50px;
    padding-left: 50px;

  }
  h1{
  font-family: Cardo;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #222;
}
h2{
  font-size: 24px;
	font-family: Parisienne;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
  color: #222;
}
  .swiper-container {
    padding-top: 0; /* Elimina el espacio superior para móvil */
    padding-bottom: 0; /* Elimina el espacio inferior para móvil */
    overflow: visible; /* Permite que el rectángulo rojo se extienda más allá del swiper */
  }

  .blue-rectangle {
    position: static;
    width: 100%;
    height: 200px;
    padding: 10px; /* Reducir el padding si es necesario */
    transform: none; /* Anula cualquier transformación para móvil */
    margin-top: 0; /* Asegura que no haya margen en la parte superior */
    border-radius: 10px; /* Bordes redondeados para todas las esquinas en móvil */
  }

  .red-rectangle {
  background-color: #EFF3F5;
  width: 100%; /* en escritorio, ocupa todo el ancho hasta el borde derecho */
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1; /* Asegura que el rectángulo rojo quede detrás de los slides */
  border-radius: 10px;
}

}

/* Resto de tus estilos CSS para los slides del swiper */
.mySwiper .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 400px;
  padding-left: 10px;
  padding-right: 10px;
}

.mySwiper{
  height:500px;
}
.mySwiper .swiper-slide img {
  display: block;
  width: 100%;
}

</style>