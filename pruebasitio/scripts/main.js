let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/Firefox_Logo.png') {
      miImage.setAttribute('src','images/js.jpg');
    } else {
      miImage.setAttribute('src', 'images/Firefox_Logo.png');
    }
}

    let miBoton = document.querySelector('button');
    let miTitulo = document.querySelector('h1');
    
    function estableceNombreUsuario() {
      let miNombre = prompt('Por favor, ingresa tu nombre.');
      if(!miNombre) {
        estableceNombreUsuario();
      } else {
        localStorage.setItem('name', miNombre);
        miTitulo.textContent  = 'Mozilla es genial, ' + miNombre;
      }
    }
    
    if(!localStorage.getItem('name')) {
      estableceNombreUsuario();
    } else {
      let nombreAlmacenado = localStorage.getItem('name');
      miTitulo.textContent  = 'Mozilla es genial, ' + nombreAlmacenado;
    }
    
    miBoton.onclick = function() {
      estableceNombreUsuario();
    }