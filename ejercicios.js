document.addEventListener('DOMContentLoaded', function () {
    // Obtener el botón de cerrar por su ID
    var cerrarBtn = document.getElementById('cerrarBtn');
  
    // Evento de clic en el botón de cerrar
    cerrarBtn.addEventListener('click', function () {
      // Redirigir a la página de inicio (puedes ajustar la URL según tu estructura)
      window.location.href = 'tu_pagina_de_inicio.html';
    });
  });