// Obtener la calidad del aire al elegir un lugar utilizando la API de AQICN
function obtenerCalidadAire() {
  // Obtener el valor del lugar ingresado por el usuario
    const lugar = document.getElementById('inputLugar').value;
    
  // Clave de API para acceder a la API de AQICN
    const apiKey = 'be6d53676fad5cbdefc1f177f18db266eaf5d362';

  // Construir la URL de la API utilizando el lugar y la clave de API 
    const url = `https://api.waqi.info/feed/${lugar}/?token=${apiKey}`;
    
    // Realizar una solicitud fetch a la URL de la API
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
  
        // Verificar si se obtuvo una respuesta válida de la API
        if (data.status === 'ok') {
          // Obtener el valor de la calidad del aire (AQI)
          const calidadAire = data.data.aqi;
          // Convertir la calidad del aire a un número entero
          const intNu=parseInt(calidadAire)

         

         // Elegir una plantilla aleatoria para mostrar los resultados 
          var plantesc=Math.floor(Math.random() * 2) + 1;

          var epilogo = ["El aumento en los niveles de contaminación es alarmante, es necesario estar informado de la situación ambiental y que tanto repercute a nuestra salud.", "La contaminación ambiental aumenta día a día, hay que estar al tanto de la situación y la repercusión en nuestro sistema.", "La contaminación del aire es una de las mayores amenazas ambientales para la salud pública a nivel mundial, es por ello que se debe estar enterado para prevenir y seguir recomendaciones.", "El cambio atmosférico nos desafía, pero también nos brinda la oportunidad de unirnos y encontrar soluciones innovadoras. ¡Juntos podemos marcar la diferencia y preservar nuestro planeta!", "El cambio atmosférico nos llama a tomar acción ahora. Cada pequeño paso cuenta. ¡Hagamos cambios en nuestra vida diaria y creemos un futuro sostenible!", "El cambio atmosférico es un recordatorio de que somos guardianes de nuestro planeta. Aceptemos el desafío y trabajemos juntos para proteger y preservar nuestro hogar común.", 
          "Tenemos la tarea por delante de poner en práctica las recomendaciones relacionadas con la calidad del aire cuando exista una urgencia ambiental para evitar daños a la salud.","El aumento en los niveles de contaminación es alarmante, es necesario estar informado de la situación ambiental y que tanto repercute a nuestra salud.",".En el caso de que vivas cerca de una zona de incendio, donde el humo sea denso, coloca toallas húmedas en las ranuras de puertas y ventanas.","Uso del transporte público y utilización del coche privado solo cuando sea completamente necesario. Alternativamente, se puede compartir coches privados entre varias personas. Cuantos menos coches, menos emisiones."];

          var ep=epilogo[Math.floor(Math.random() * epilogo.length)];

           //-------------------------Plantilla Uno--------------------------//
          if (plantesc==1){
            // Condicional si la calidad del aire está entre 0 y 50
            if ((intNu=> 0) && (intNu< 50)){
              resultado.innerHTML = "En "+lugar+" la contaminación es baja.  <br/> Existe un AQI (indice de calida de aire) de "+calidadAire+". <br/>Recomendaciones: se puede realizar cualquier actividad al aire libre <br><br>-Cubrebocas: No necesario <br> -Quedarte adentro: No necesario <br> -Ventanas: Abiertas <br> -Usar purificador: No necesario  <br> -Familia: Permitir salir al aire libre <br><br> "+ep;
            }
            // Condicional si la calidad del aire está entre 51 y 100
            if ((intNu>51) && (intNu<100)){
              resultado.innerHTML = "En "+lugar+" la contaminacion es regular. <br/> Existe un AQI (indice de calidad de aire) de "+calidadAire+". <br/>Recomendaciones: Las personas que son extremadamente sensibles deben limitar los esfuerzos al aire libre. <br><br>-Cubrebocas: No necesario <br> -Quedarte adentro: No necesario <br> -Ventanas: Abiertas <br> -Usar purificador: No necesario <br> -Familia: Grupos extremadamente sensibles no es recomendado salir <br><br>"+ep;
            }
            // Condicional si la calidad del aire está entre 101 y 150
            if ((intNu>101) && (intNu<150)){
              resultado.innerHTML = "En "+lugar+" la contaminacion es mala. <br/> Existe un AQI (indice de calidad de aire) de " +calidadAire+". <br/>Recomendaciones: Los niños, adultos mayores, personas que realicen actividad física o con enfermedades respiratorias, deben limitar su actividad al aire libre de manera prolongada. <br><br>-Cubrebocas: Recomendable <br> -Quedarte adentro: Recomendable <br> -Ventanas: Cerradas <br> -Usar purificador: No necesario  <br> -Familia: No exponer al aire en tiempos muy prolongados <br><br>" +ep;
            }
            // Condicional si la calidad del aire está entre 151 y 200
            if ((intNu>151) && (intNu<200)){
              resultado.innerHTML = "En "+lugar+" la contaminacion es muy mala. <br/> Existe un AQI (indice de calidad de aire) de "+calidadAire+". <br/>Recomendaciones: La población en general deben limitar su esfuerzo prolongado al aire libre <br><br>-Cubrebocas: Necesario <br> -Quedarte adentro: Recomendable <br> -Ventanas: Cerradas <br> -Usar purificador: Recomendable <br> -Familia: No exponer en tiempos muy prolongados <br><br>"+ep;
            }
            // Condicional si la calidad del aire es mayor a 200
            if (intNu>201){
              resultado.innerHTML = "En "+lugar+" la contaminacion es extremadamente dañina. <br/> Existe un AQI (indice de calidad de aire) de: " +calidadAire+". <br/>Recomendaciones: La población debe suspender todas las actividades al aire libre.  <br><br>-Cubrebocas: Necesario <br> -Quedarte adentro: Necesario <br> -Ventanas: Cerradas <br> -Usar purificador: Necesario <br> -Familia: No permitir salir al aire libre <br><br>" +ep;
            }
          } // Termina plantilla uno





          //-------------------------Plantilla dos--------------------------//
          if (plantesc==2){

            // Array de frases para la plantilla
            var plantA= ["La contaminación sigue la misma tendencia", "El aumento en la contaminación sigue incrementando", "La contaminación ambiental cada vez es más alta", "Últimamente han aumentado los contaminantes del aire"];
             // Condicional si la calidad del aire está entre 0 y 50
            
             if ((intNu=> 0) && (intNu< 50)){
              var plantb= ["Últimamente se han reducido los contaminantes", "La contaminación sigue la misma tendencia"];
              var a=plantb[Math.floor(Math.random() * plantb.length)];
            //Texto generado 
              resultado.innerHTML = a+". En la zona de "+lugar+" el día de hoy el estado del aire es bueno.  <br/>Existe un índice de calidad de aire de "+calidadAire+", por lo que el impacto en la salud es bajo. <br>Recomendación a la población: Se puede realizar cualquier actividad al aire libre  <br><br> -Cubrebocas: No necesario <br> -Quedarte adentro: No necesario";
              
            }
            
            // Condicional si la calidad del aire está entre 51 y 100
            if ((intNu>51) && (intNu<100)){
              //seleccion de varible aleatoria 
              var a=plantA[Math.floor(Math.random() * plantA.length)];
              //texto generado
              resultado.innerHTML = a+ ".  En la zona de "+lugar+" el día de hoy el estado del aire es regular. <br/>Existe un índice de calidad de aire de " +calidadAire+", por lo que el impacto en la salud es aceptable. <br> Recomendación a la población: Las personas que son extremadamente sensibles deben limitar los esfuerzos al aire libre";
            }
            

             // Condicional si la calidad del aire está entre 101 y 150
            if ((intNu>101) && (intNu<150)){
              //seleccion de varible aleatoria 
              var a=plantA[Math.floor(Math.random() * plantA.length)];
              //texto generado 
              resultado.innerHTML = a+". En la zona de "+lugar+" el día de hoy el estado del aire es malo. <br/>  Existe un índice de calidad de aire de "+calidadAire+", por lo que el impacto del aire es dañino a la salud de los grupos sensibles. <br/>Recomendación a la población: Los niños, adultos mayores, personas que realicen actividad física o con enfermedades respiratorias, deben limitar su actividad al aire libre de manera prolongada";
            }


            //condicional si es mayor de 151 y menor de 200
            if ((intNu>151) && (intNu<200)){
              //seleccion de varible aleatoria 
              var a=plantA[Math.floor(Math.random() * plantA.length)];
              //texto generado
              resultado.innerHTML = a+". En la zona de "+lugar+ " el día de hoy el estado del aire es muy malo. <br/> Existe un índice de calidad de aire de "+calidadAire+", por lo que el impacto del aire es dañino a la salud en general. <br>Recomendación a la población: La población en general deben limitar su esfuerzo prolongado al aire libre";
            }

            // Condicional si la calidad del aire está entre 151 y 200
            if (intNu>200){
              //seleccion de varible aleatoria 
              var a=plantA[Math.floor(Math.random() * plantA.length)];
              //texto generado
              resultado.innerHTML = a+". En la zona de "+lugar+" el día de hoy el estado del aire es extremadamente dañino. <br/> Existe un índice de calidad de aire de "+calidadAire+", por lo que la del aire es muy dañino a la salud. <br/>Recomendación a la población: La población debe suspender todas las actividades al aire libre";
            }
          } //termina if de plantilla 2

//-------------------------Semáforo--------------------------//
           
                // Definir los colores del semáforo
                let semaforoColor = '';
                if (intNu < 50) {
                  semaforoColor = 'verde';
                } else if (intNu < 100) {
                  semaforoColor = 'amarillo';
                } else if (intNu < 150) {
                  semaforoColor = 'naranja';
                } else if (intNu < 200) {
                  semaforoColor = 'rojo';
                } else {
                  semaforoColor = 'morado';
                }

                // Mostrar el semáforo y la información de calidad del aire
                semaforo.innerHTML = `
                  <div class="semaforo ${semaforoColor}"></div>
                `;

        } else {
          resultado.innerHTML = 'No se encontró información sobre la calidad del aire para ese lugar.';

        }
      })
      .catch(error => {
        console.error('Error al obtener la calidad del aire:', error);
      });
}

// Función para cambiar la imagen según el estado
function cambiarImagen(estado) {
  // Se obtiene el elemento de imagen del estado
  var imagenEstado = document.getElementById('imagenEstado');
  // Se inicializa la fuente de la imagen como una cadena vacía
  var imagenSrc = '';

  // Se utiliza una instrucción switch para asignar la fuente de la imagen según el estado especificado
  switch (estado) {
    case 'Ciudad de México':
      imagenSrc = 'img/cdmx.jpg';
      break;
    case 'Puebla':
      imagenSrc = 'img/Puebla.jpeg';
      break;
    case 'San Luis Potosí':
      imagenSrc = 'img/san.jpeg';
      break;
    case 'Guadalajara':
      imagenSrc = 'img/gua.jpeg';
      break;
    case 'Nayarit':
      imagenSrc = 'img/naya.png';
      break;
    case 'Guanajuato':
      imagenSrc = 'img/guana.jpeg';
      break;
    case 'Jalisco':
      imagenSrc = 'img/jalisco.jpg';
      break;
    case 'Durango':
      imagenSrc = 'img/dur.jpg';
      break;
    case 'Morelos':
      imagenSrc = 'img/mor.jpg';
      break;
    case 'Huludao':
      imagenSrc = 'img/hulu.jpg';
      break;
    case 'Jinchang':
      imagenSrc = 'img/Jin.jpg';
      break;
    case 'Patna':
      imagenSrc = 'img/Patna.jpg';
      break;
    case 'vacio':
      imagenSrc = 'img/default.jpg';
      break;
    
    default:
      // Si no se encuentra una coincidencia, se muestra la imagen predeterminada
      imagenSrc = 'img/qs.jpg';
      break;
  }
// Se establece la fuente de la imagen en el elemento de imagen del estado
  imagenEstado.setAttribute('src', imagenSrc);
}
