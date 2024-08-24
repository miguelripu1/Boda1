<template>
  <div class="container saludo-container">
    <div class="row">
      <div class="col-12 text-center">
        <h1 style="margin-bottom:8px" class="titulo-saludo">El amor me lo explica todo</h1>
        <h2 style="margin-bottom:32px" class="subtitulo-saludo">San Juan Pablo II</h2>
        <p class="texto-saludo">
          Nos llena de alegría compartir con ustedes este momento tan especial en nuestras vidas. Nos vamos a casar, marcando el comienzo de una historia que estamos seguros será extraordinaria. Creemos en el poder del amor verdadero, ese que todo lo puede, que supera cualquier obstáculo y nos une en un lazo indestructible. Para nosotros, el amor es la fuerza que nos impulsa a enfrentar juntos cualquier desafío.
        </p>
        <h2 class="subtitulo-saludo">
          “Uno solo puede ser vencido, pero dos pueden resistir. ¡La cuerda de tres hilos no se rompe fácilmente!” Eclesiastés 4:12
        </h2>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
h1 {
  font-family: Parisienne;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #28464E;
}
h2 {
  font-family: "Gudea", sans-serif;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  color: #222;
}
.saludo-container {
  padding: 0rem 1rem;
  color:#28464E;
}


.texto-saludo {
  font-family: "Gudea", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #222;
}

.cita-biblica {
  font-size: 1.25rem;
  color: #6c757d;
  font-style: italic;
}

@media (max-width: 600px) {
  .saludo-container {
  margin-top: -60px; /* Ajustar este valor según sea necesario */
}
}

@media (min-width: 600px) and (max-width: 800px) {
  .saludo-container {
  margin-top: -80px; /* Ajustar este valor según sea necesario */
}
}

@media (min-width: 800px) and (max-width: 1200px) {
  .saludo-container {
  margin-top: -7vw; /* Ajustar este valor según sea necesario */
}
}
@media (min-width: 1200px) and (max-width: 1600px) {
  .saludo-container {
  margin-top: -8vw; /* Ajustar este valor según sea necesario */
}
}
@media (min-width: 1600px) {
  .saludo-container {
  margin-top: -6vw; /* Ajustar este valor según sea necesario */
}
}
</style>
