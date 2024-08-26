<template>

<nav class="navbar navbar-expand-lg navbar-light fixed-top bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">

		<img :src="`../img/header/logo.png`" class="img-fluid BodaLogo" alt="BODA LOGO">
	
	</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
		<li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Nuestra historia AMMA</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Cuando y Donde</a>
        </li>

		<li class="nav-item">
          <a class="nav-link" href="#">Ora con nostros</a>
        </li>

		<li class="nav-item">
          <a class="nav-link" href="#">Fotitos</a>
        </li>

		<li class="nav-item">
          <a class="nav-link" href="#">Mesa de regalos</a>
        </li>

        <li class="nav-item">
        	<button class="btn btn-outline-success" type="submit">Confirmar asistencia</button>
        </li>

      </ul>
        
    </div>
  </div>
</nav>


</template>
<script>

export default{
	components: {
		
	},
}
</script>

<style>

.BodaLogo {
  width: 100px;
  height: 90px;
  margin-left: 50px;
}

.navbar {
  text-align: center;
  background-color: #FFFFFF !important;
  transition: background-color 0.3s ease-in-out;
}

.navbar-nav{
  margin: auto; 
}

.nav-link {
  font-family: Gudea !important;
  font-size: 14px;
  font-weight: bold;
  color: #28464E !important;
}

.nav-item{
  margin-right: 20px;
  margin-left: 20px;
}

.btn{
  margin-right: 100px;
  background-color: #92B1C1;
  font-size: 14px;
  border-radius: 25px;
  color:#28464E;
  font-weight: bold;
  font-family: Gudea !important;
}

.btn:hover {
  background-color: #7899AA; 
  color:#28464E;

}

.btn:active {
  background-color: #7899AA !important; 
  color:#28464E !important;
}





</style>