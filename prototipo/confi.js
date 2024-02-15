const toggleSwitch = document.getElementById('toggle');
const message = document.getElementById('message');

const swSonido = document.getElementById("swSonido");
const swSonidoMensajec = document.getElementById("swSonidoMensaje");

toggleSwitch.addEventListener('change', function () {
  if (toggleSwitch.checked) {
    message.innerText = 'ON';

  } else {
    message.innerText = 'OFF';

  }
});
 swSonido.addEventListener('change', function () {
  if (swSonido.checked) {
    swSonidoMensajec.innerText = 'ON';

  } else {
    swSonidoMensajec.innerText = 'OFF';

  }
});

document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('myAudio');
  const soundToggle = document.getElementById('swSonido');

  // Función para activar el sonido
  function activarSonido() {
    soundToggle.checked = true;
    audio.play();
  }

  // Función para desactivar el sonido
  function desactivarSonido() {
    soundToggle.checked = false;
    audio.pause();
    audio.currentTime = 0;
  }

  // Evento para activar el sonido cuando se carga la página
  activarSonido();

  // Evento de cambio en el interruptor de palanca
  soundToggle.addEventListener('change', function () {
    if (soundToggle.checked) {
      // Encendido: reproduzca el sonido
      audio.play();
    } else {
      // Apagado: pausa el sonido y reinicia la reproducción
      audio.pause();
      audio.currentTime = 0;
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Obtener el botón de cerrar por su ID
  const cerrarBtn = document.getElementById('cerrarBtn');
  // Evento de clic en el botón de cerrar
  cerrarBtn.addEventListener('click', function () {
    // Redirigir a la página de inicio (puedes ajustar la URL según tu estructura)
    window.location.href = 'configuar2.0.html';
  });
});


