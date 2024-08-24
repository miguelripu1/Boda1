<template>
<h1 class="section-title">Confirmar asistencia</h1>
    <div class=" container ">
    
        <div class="no-kids-container">
            <img :src="`../img/asistencia/ninos.png`" alt="No niños" class="icon-img">
            <h3 class="title">Nota</h3>
            <p class="message">Nos gustaría que todos nos acompañaran, por motivos logísticos, hemos limitado el número de invitados. Si alguien no está incluido en la lista, sabemos que nos acompañaran de corazón.  Nos entusiasma invitarlos a una celebración especial solo para adultos.</p>
        </div>

        <div class="row confirmation-section align-items-center">
            <div class="col-md-6 confirm-form">
                <div v-if="search == false">
                    <h2 style="color: #28464E;margin-bottom: 24px; margin-top:32px;">¡Asegura tu cupo aquí!</h2>

                    <div v-if="multiple == false">
                        <p>
                            Ingresa tu nombre completo y encuentra tus pases individuales o
                            los de tu grupo familiar.
                        </p>
                    </div>
                    <div v-else>
                        <p>
                            Hemos encontrado a alguien con tu mismo nombre Por favor, selecciona quién eres.
                        </p>
                    </div>

                    <p>Se sincero con tu confirmación, gracias por tu colaboración</p>

                    <div v-if="error" class="text-red-500 text-center my-4">
                         <strong>{{ mensajeError }}</strong>
                    </div>

                    <div v-if="multiple == false">
                        <div class="input-group mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Escribe tu nombre y apellido"
                              aria-label="Recipient's username"
                              aria-describedby="basic-addon2"
                              v-model="invitado"
                            >
                        </div>
                    </div>
                    <div v-else>

                        <div class="mb-3" v-for="duplicado in duplicados" :key="duplicado._id">
                            <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    type="radio" 
                                    :id="`${duplicado.name}`"  
                                    :value="duplicado"
                                    v-model="confirmacion_duplicado"
                                >
                                <label class="form-check-label" :for="`invitado-${duplicado._id}`">
                                    {{ duplicado.name }}
                                </label>
                            </div>
                        </div>

                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" @click="searchPerson">Buscar</button>
                        </div>
                    </div>
                    <div v-if="multiple == true">
                    <div class="input-group mb-3">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" @click="inicioForm">Volver</button>
                            </div>
                        </div>
                    </div>
                    <!--reCAPTCHA  -->
                    <!-- <div class="g-recaptcha" data-sitekey="your_site_key"></div> -->
                </div>
                <div v-else>
                    <h2 style="margin-bottom: 24px; margin-top:32px;" >{{ name }}</h2>
                    <h3 style="margin-bottom: 24px;">Para ti tenemos {{ cantidad }} lugares reservados</h3>
                    <p>
                        El cupo aplica únicamente para la o las personas indicadas en cada invitación. Si necesitas un cupo adicional, avísanos para sumar a esa persona a la lista de espera. Te haremos saber si algún cupo se libera.
                    </p>
                    <div class="input-group mb-3">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" @click="searchPerson">Volver</button>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-6" style="padding-right: 0px; padding-left: 0px;" :class="{ 'pases-section': search }">
                <div v-if="search == false">
                    <img :src="`../img/confirmar/pareja.png`" alt="Pareja" class="img-fluid">
                </div>
                <div v-else >
                    
                    <h3 style="padding-top:12px" class="mb-3 text-center">Pases</h3>
                    <p style="padding-left: 6%;"><strong>Selecciona la o las casillas con unSI de los nombres de los invitados que asistirán.</strong></p>

                    <div class="row mb-2" style="padding-left: 6%;">
                        <div class="col-8"></div>
                        <div class="col-2"><strong>Sí</strong></div>
                        <div class="col-2"><strong>No</strong></div>
                    </div>

                    <!-- Line -->
                    <div class="row mb-3">
                        <div class="col-12">
                            <hr class="custom-hr"> 
                        </div>
                    </div>

                    <form @submit.prevent="confirmarAsistencia" style="padding-left: 6%; margin-bottom: 12px;">
                        <div class="row mb-3" v-for="(invitado, index) in invitados" :key="index">

                            <div class="col-8">
                                <label>{{ invitado.name }}</label>
                            </div>
                            <div class="col-2">
                                <label>
                                  <input 
                                    type="radio" 
                                    :name="`confirmation-${invitado._id}`" 
                                    value="si" 
                                    v-model="invitado.confirmation"
                                    :checked="invitado.confirmation === 'si'">                                  
                                </label>
                            </div>
                            <div class="col-2">
                                <label>
                                  <input 
                                    type="radio" 
                                    :name="`confirmation-${invitado._id}`" 
                                    value="no" 
                                    v-model="invitado.confirmation"
                                    :checked="invitado.confirmation !== 'si'">
                                </label>
                            </div>

                        </div>
                        <button type="submit" class="btn btn-outline-secondary" id="buttonConfirmacion">Confirmar</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      search : false,
      name : "",
      cantidad : "",
      invitados : [],
      invitado:"",
      confirmaciones: [],
      multiple:false,
      duplicados:[],
      confirmacion_duplicado : "",
      error : false,
      mensajeError : "",
    };
  },
  methods: {
    async searchPerson() {

        try {

            if (this.search == false) {

                this.invitados.length = 0;
                this.error = false;
                let data;

                if(this.multiple == false){

                    data = {
                        nombre: this.invitado,
                    };

                }else{

                    data = {
                        nombre: this.confirmacion_duplicado.name,
                    };

                }
                
                if ( data.nombre=="" || !this.validateName(data.nombre) || typeof data.nombre === "undefined" ) {
                    //console.log(this.multiple);
                    this.error = true;
                    this.mensajeError = "El campo nombre no puede estar vacio y debe ser valido.";
                    //this.multiple = false;//por si acaso
                    return;

                }
                
                const response = await axios.post(
                    "https://angelicaymiguel.com:8000/get-guests",
                    data,
                    {
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                        },
                        mode: "cors",
                    }
                );
                
                this.duplicados.length = 0;
                if (response.data.success) {
                    
                    this.search = true;//si encontro
                    //this.invitados = response.data.guests;
                    this.invitados = response.data.guests.map(invitado => ({
                      ...invitado,
                      confirmation: invitado.confirmation || 'no'
                    }));
                    this.cantidad = this.invitados.length;                    
                    this.name = this.invitados[0].name;//poner primer nombre de la lista
                    this.multiple = false;//por si acaso
                    this.initializeConfirmations();

                }else if(!response.data.success){

                    if(response.data.names!=null){

                        this.multiple = true;
                        this.duplicados = response.data.names;

                    }else{
                    
                        //mensaje de no
                        this.error = true;
                        this.mensajeError = response.data.error;
                        this.multiple = false;//por si acaso

                    }                    

                }

            }else{
                this.search = false;
                this.name = "";
                this.duplicados.length = 0;
                this.invitado = "";
            }

        } catch (error) {

            console.error(error);

        }

    },

    async confirmarAsistencia(){
 
        //console.log('Asistentes confirmados:', this.confirmaciones);
        const resultado = this.invitados.map(invitado => ({
            id: invitado._id, 
            confirmado: invitado.confirmation
        }));
        //console.log(resultado);debugger;

        let data = {
                guestUpdates: resultado,
            };

        const response = await axios.post(
            "https://angelicaymiguel.com:8000/confirmation-guests",
            data,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
                mode: "cors",
            }
        );


        this.search = false;
        
        if (response.data.success) {
            
             Swal.fire({
              title: '¡Exito!',
              text: response.data.message,
              icon: 'success',
            });

        }else{

            Swal.fire({
              title: 'Error',
              text: 'Hubo un error, intentelo mas tarde',
              icon: 'error',
            });

        }

    },
    validateName(name) {

        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ' -]+$/;
        return nameRegex.test(name);

    },
    inicioForm() {

        this.multiple = false;
        this.name = "";
        this.duplicados.length = 0;
        this.invitado = "";

    },
    initializeConfirmations() {

        this.confirmaciones = this.invitados
            .filter(invitado => invitado.confirmation)
            .map(invitado => invitado);
        
    },
  },
};
</script>

<style scoped>
.section-title{
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
h2{
  font-family: "Gudea", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 24px ;
}
h3{
  font-family: "Gudea", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 20px ;
}
p{
  font-family: "Gudea", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px ;
  color: #222;
}

.confirm-assistance-section {
  background-color: #EDD4D5; 
  padding: 20px; 
  margin-bottom: 2%;
  border-radius: 10px;
}

.no-kids-section {
  background-color: #EDD4D5; 
  padding: 10px; 
  border-radius: 10px;
}

.no-kids-section .icon-img {
  width: 70%; 
  margin-right: 10px; 
}

.message-section {
  background-color: #EDD4D5;
  text-align: left; 
  padding: 10px; 
  border-radius: 10px;
  padding-right: 30px;
  text-align: justify;
}


.confirmation-section {
  background-color: #EFF3F5; 
  margin-bottom: 2%;
  margin: 0px;
  border-radius: 10px;
}

.confirm-form{
  padding: 0 5% 0 3%;
}

.confirm-form h2 {
  color: #222; 
}

.confirm-form .btn-outline-secondary {
  background-color: #7899AA; /* Color de fondo del botón */
  color: #222; /* Color del texto del botón */
  font-weight: 700;
  border: 1px solid #7899AA; /* Elimina el borde del botón */
  border-radius: 20px; /* Bordes redondeados del botón */
  padding: 0.5rem 1rem; /* Padding del botón */
  cursor: pointer; /* Cambia el cursor al pasar por encima del botón */
}

.confirm-form .btn-outline-secondary:hover {
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
 
}


.pases-section{
  background-color: #7899AA;
  padding: 2% 7%;
  border-radius: 20px;
}

#buttonConfirmacion{
  background-color: #EFF3F5; /* Color de fondo del botón */
  color: #28464E; /* Color del texto del botón */
  font-weight: 700;
  border: 1px solid #EFF3F5;
  border-radius: 20px; /* Bordes redondeados del botón */
  padding: 0.5rem 1rem; /* Padding del botón */
  cursor: pointer; /* Cambia el cursor al pasar por encima del botón */
}
#buttonConfirmacion:hover {
  border-radius: 100px;
  border: 1px solid #7899AA;
}
@media (max-width: 991px) {
  /* Ajustes para pantallas pequeñas */
  .section-title{
    background-color: #fff;
    padding-left: 10px;
    width: fit-content;
  }
}
 
.no-kids-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 65px;
  background-color: #EDD4D5;
  border-radius: 10px;
  box-sizing: border-box;
  margin: auto;
  margin-bottom: 40px;
}

.icon-img {
  width: 64px;
  height: auto;
  margin-right: 65px;
}

.title {
  margin-right: 65px;
  white-space: nowrap;
}

.message {
  text-align: justify;
  flex-grow: 1;
  margin-top: 16px;
}

input[type='radio'] {
    accent-color: #000000;
}

.custom-hr {
    width: 80%;         
    margin-left: auto;  
    margin-right: auto;  
    height: 2px;
    background-color: #000000;
    border: none;
}

@media (max-width: 767px) {
  .no-kids-container {
    flex-direction: column;
    padding: 20px;
    align-items: center;
    text-align: center;
  }

  .icon-img {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .title {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .message {
    text-align: center;
  }
}
</style>
