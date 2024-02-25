const toggleSwitch = document.getElementById('swMusica');
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
  const audio = document.getElementById('miAudio');
  const soundToggle = document.getElementById('swSonido');


  function activarSonido() {
    soundToggle.checked = true;
    audio.play();
  }


  function desactivarSonido() {
    soundToggle.checked = false;
    audio.pause();
    audio.currentTime = 0;
  }


  activarSonido();


  soundToggle.addEventListener('change', function () {
    if (soundToggle.checked) {

      audio.play();
    } else {

      audio.pause();
      audio.currentTime = 0;
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {

  const cerrarBtn = document.getElementById('cerrarBtn');

  cerrarBtn.addEventListener('click', function () {

    window.location.href = "configuar2.0.html";
  });
})

document.addEventListener('DOMContentLoaded', function () {
  const btnLenguaje = document.querySelector('.btn3');

  btnLenguaje.addEventListener('click', function () {
      alert('El lenguaje es español');
  });
});


function guardar() {

  const nombre = document.getElementById('usuario').value;
  const contra = document.getElementById('contraseña').value;


  console.log('Nombre:', nombre);
  console.log('Contraseña:', contra);
}

