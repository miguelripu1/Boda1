<template>
  <footer class="footer text-center text-lg-start">
    <div class="container-fluid">
      <div class="d-flex justify-content-between align-items-center row">
        <div class="text-center col-6">
          <p class="mb-0"><strong>Inspirado en teología del cuerpo</strong></p>
        </div>
        <div class="text-center col-2">
          <p class="mb-0"><strong>@Bodatdc </strong></p>
        </div>
        <div class="text-center col-4">
          <a href="https://instagram.com/bodastdc" target="_blank">
            <img :src="`../img/footer/instagram.png`" alt="Instagram" class="social-icon" />
          </a>
          <a href="https://www.tiktok.com/@bodastdc?_t=8pCm1wNZjnS&_r=1" target="_blank">
            <img :src="`../img/footer/tiktok.png`" alt="TikTok" class="social-icon" />
          </a>
          
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
p{
  color:#593e25;
}
.footer {
  padding: 0.5rem 0; /* Ajusta la altura del footer */
  width: 100%;
  background-color: #fff;

}

.row {
  margin-left: 0;
  margin-right: 0;
}

.social-icon {
  width: 32px;
  height: 32px;
  margin: 0 8px; /* Ajusta los márgenes horizontales */
}

@media (max-width: 507px) {
  .footer {
    padding: 0.25rem 0; /* Footer más delgado para pantallas pequeñas */
    font-size: 0.7rem;
  }

  .social-icon {
    width: 24px;
    height: 24px;
    margin: 0 4px; /* Márgenes más pequeños para los iconos */
  }
}

@media (max-width: 384px) {
  .footer {
    padding: 0.25rem 0; /* Mantiene la altura del footer */
    font-size: 0.5rem; /* Fuente más pequeña para pantallas pequeñas */
  }

  .social-icon {
    width: 24px;
    height: 24px;
    margin: 0 4px; /* Márgenes consistentes */
  }
}

@media (max-width: 293px) {
  .footer {
    padding: 0.2rem 0; /* Footer más delgado para pantallas muy pequeñas */
    font-size: 0.4rem; /* Fuente aún más pequeña */
  }

  .social-icon {
    width: 20px;
    height: 20px;
    margin: 0 2px; /* Márgenes reducidos */
  }
}
</style>
