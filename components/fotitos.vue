<template>
	    <!-- Título -->
		<h1 class="gallery-title">Fotitos</h1>
	<div class="container">
	    <!-- Galería de fotos para pantallas grandes -->
	    <div class="photo-gallery d-none d-lg-block">
	      <div class="row">
	        <div class="col-4 mb-4">
	          <img :src="`../img/fotitos/fotito11.png`" alt="Foto 1" class="img-fluid">
	        </div>
	        <div class="col-4 mb-4">
	          <img :src="`../img/fotitos/fotito2.png`" alt="Foto 2" class="img-fluid">
	        </div>
	        <div class="col-4 mb-4">
	          <img :src="`../img/fotitos/fotito33.png`" alt="Foto 3" class="img-fluid">
	        </div>
	        <div class="col-8 mb-8">
	          <img :src="`../img/fotitos/fotito44.png`" alt="Foto 4" class="img-fluid">
	        </div>
	        <div class="col-4 mb-4">
	          <img :src="`../img/fotitos/fotito55.png`" alt="Foto 5" class="img-fluid">
	        </div>
	      </div>
	    </div>

	    <!-- Carrusel de Bootstrap para pantallas pequeñas -->
	    <div id="carouselExample" class="carousel slide d-lg-none" data-ride="carousel">
	      <div class="carousel-inner">
	        <div class="carousel-item active">
	          <img :src="`../img/fotitos/fotito11.png`" class="d-block w-100" alt="Foto 1">
	        </div>
	        <div class="carousel-item">
	          <img :src="`../img/fotitos/fotito2.png`" class="d-block w-100" alt="Foto 2">
	        </div>
	        <div class="carousel-item">
	          <img :src="`../img/fotitos/fotito33.png`" class="d-block w-100" alt="Foto 3">
	        </div>
	        <div class="carousel-item">
	          <img :src="`../img/fotitos/fotito55.png`" class="d-block w-100" alt="Foto 5">
	        </div>
	      </div>
	      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
		    <span class="carousel-control-prev-icon" aria-hidden="false"></span>
		    <span class="visually-hidden">Previous</span>
		  </button>
		  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
		    <span class="carousel-control-next-icon" aria-hidden="false"></span>
		    <span class="visually-hidden">Next</span>
		  </button>
	    </div>
	</div>

</template>

<script>
export default {

};
</script>

<style scoped>
.gallery-title {
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: Cardo;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color:#222;
  padding-left: 60px;
}
.container{
	padding-left: 0px;
	padding-right: 0px;
}
@media (max-width: 767px) {
  .gallery-title {
  background-color: #fff;
  padding-left: 10px;
  width: fit-content;
}
}
</style>
