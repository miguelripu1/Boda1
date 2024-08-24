<template>
	
		<div class="slider-principal">
			<picture class="imagen">
				<source style="color:red" media="(min-width: 800px)" :srcset="`../img/header/slider.png`" id="img-slider-principal" alt="Angelica & Miguel" class="img-fluid">
				<img :src="`../img/header/test.png`" id="img-slider-principal" alt="Angelica & Miguel" class="img-fluid">
			</picture>
	      <div class="slider-text">
	        <h1 id="name_couple" class="texto-parisienne">Angelica & Miguel</h1>
	        <h1 id="date_wedding" class="texto-cardo">15 Junio 2024</h1>
	      </div>
		</div>
		<div id="contador">
		    <CountdownTimer />
		</div>
</template>

<script>
import CountdownTimer from './counter.vue';

export default {
  components: {
    CountdownTimer
  },
};

</script>

<style scoped>

#img-slider-principal{
	width: 100%;
	object-fit: cover;
}
.imagen{
	width: 100%;
}
.slider-principal {
	position: relative;
	display: flex;
	text-align: center;
	color: white;
}


.slider-text {
	position: absolute;
	top: 67%;
	left: 50%;
	transform: translate(-50%, -60%);
	color: #FFFFFF; 
	line-height: 2.4vw;
}

#name_couple{
	font-size: 72px;
	color: var(--Basicos-Blanco, #FFF);
	font-family: Parisienne;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	white-space: nowrap; /* Impide el ajuste de línea */
}
@media screen and (max-width: 720px) {
    #name_couple {
        font-size: 40px; /* Ajusta este valor según necesites */
		white-space: nowrap; /* Impide el ajuste de línea */
        
    }
}
#date_wedding{
	font-family: Cardo;
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
}

@media screen and (max-width: 720px) {
    #date_wedding {
        font-size: 18px; /* Ajusta este valor según necesites */
		white-space: nowrap; /* Impide el ajuste de línea */
    }
}

#contador{
  transform: translateY(-110%);
}

@media (min-width: 150px) {
  #contador{
	  transform: translateY(-70%);
	}
}
@media (min-width: 480px) {
  #contador{
	  transform: translateY(-80%);
	}
}
@media (min-width: 650px) {
  #contador{
	  transform: translateY(-100%);
	}
}
@media (min-width: 768px) {
  #contador{
	  transform: translateY(-110%);
	}
}
@media (min-width: 768px) {
  #contador{
	  transform: translateY(-110%);
	}
}
@media (min-width: 800px) {
  #contador{
	  transform: translateY(-70%);
	}
}
@media (min-width: 1200px) {
  #contador{
	  transform: translateY(-100%);
	}
}
</style>