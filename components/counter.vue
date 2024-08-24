<template>
  <div class="container">
    <div class="row text-center">
      <div class="col" v-for="(item, index) in countdown" :key="index">
        <div class="counter-circle d-flex align-items-center justify-content-center mx-auto">
          <div>
            <h2>{{ item.value }}</h2>
            <p class="unit-text">{{ item.unit }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetDate: new Date('June 15, 2024 15:30:00'),
      countdown: [
        { unit: 'Días', value: 0 },
        { unit: 'Horas', value: 0 },
        { unit: 'Minutos', value: 0 },
        { unit: 'Segundos', value: 0 },
      ],
    };
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      this.updateCountdown();
      this.interval = setInterval(() => {
        this.updateCountdown();
      }, 1000);
    },
    updateCountdown() {
      const now = new Date();
      const difference = this.targetDate - now;

      if (difference >= 0) {
        this.countdown[0].value = Math.floor(difference / (1000 * 60 * 60 * 24));
        this.countdown[1].value = Math.floor((difference / (1000 * 60 * 60)) % 24);
        this.countdown[2].value = Math.floor((difference / (1000 * 60)) % 60);
        this.countdown[3].value = Math.floor((difference / 1000) % 60);
      } else {
        clearInterval(this.interval);
      }
    },
    destroyed() {
      clearInterval(this.interval);
    }
  }
};
</script>

<style scoped>

h2 {
  font-weight: 500;
  font-style: normal;
}

.unit-text {
  font-weight: 400;
  font-style: normal;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}

.row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 -5px;
}

.col {
  padding: 0 2px;
  flex: 1;
  min-width: 60px;
}

.counter-circle {
  background-color: #7899AA;
  color: #ffffff;
  font-family: 'Cardo';
  opacity: 0.8;
  border-radius: 50%;
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.counter-circle h2, .unit-text {
  margin: 0;
}

@media (max-width: 499px) {
  .row {
    justify-content: space-between;
  }

  .counter-circle {
    width: 80px;
    height: 80px;
  }

  .counter-circle h2 {
    font-size: 1rem;
  }

  .unit-text {
    font-size: 0.8rem;
  }
  h2 {
  font-weight: 800;
  font-style: normal;
}
}


@media (min-width: 800px) and (max-width: 1200px) {

  .row {
    justify-content: center;
    gap: 20px;
  }

  .col {
    margin: 0;
    max-width: 90px;
  }

  .counter-circle {
    width: 90px;
    height: 90px;
  }

  .counter-circle h2 {
    font-size: 1.7rem;
  }

  .unit-text {
    font-size: 0.95rem;
  }
}

@media (min-width: 1200px) and (max-width: 1599px) {
  .row {
    justify-content: center;
    gap: 20px;
  }

  .col {
    margin: 0;
    max-width: 120px;
  }

  .counter-circle {
    width: 110px;
    height: 110px;
  }

  .counter-circle h2 {
    font-size: 2.5rem;
  }

  .unit-text {
    font-size: 1.1rem;
  }
}

@media (min-width: 1600px) {
  .row {
    justify-content: center;
    gap: 25px;
  }

  .col {
    margin: 0;
    max-width: 140px;
  }

  .counter-circle {
    width: 120px;
    height: 120px;
  }

  .counter-circle h2 {
    font-size: 2.8rem;
  }

  .unit-text {
    font-size: 1.2rem;
  }
}

/* Ajustes para pantallas de 630px a 700px */
@media (min-width: 630px) and (max-width: 700px) {
  .counter-circle {
    width: 120px; /* Tamaño aumentado de los círculos */
    height: 120px; /* Tamaño aumentado de los círculos */
  }

  .counter-circle h2 {
    font-size: 1.5rem; /* Ajustar el tamaño de la fuente si es necesario */
  }

  .unit-text {
    font-size: 0.9rem; /* Ajustar el tamaño de la fuente si es necesario */
  }
}

/* Ajustes para pantallas de 701px a 800px */
@media (min-width: 701px) and (max-width: 800px) {
  .counter-circle {
    width: 140px; /* Tamaño aumentado de los círculos */
    height: 140px; /* Tamaño aumentado de los círculos */
  }

  h2 {
  font-weight: 800;
  font-style: normal;
}

  .counter-circle h2 {
    font-size: 2rem; /* Ajustar el tamaño de la fuente si es necesario */
  }

  .unit-text {
    font-size: 1.2rem; /* Ajustar el tamaño de la fuente si es necesario */
  }
}


</style>
