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

    window.location.href = 'configuar2.0.html';
  });
});


