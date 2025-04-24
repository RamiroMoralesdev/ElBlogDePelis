import LogoText from "../components/LogoText.astro";




document.addEventListener('DOMContentLoaded', () => {
    const showButtons = document.querySelectorAll(".show-button");
  
    // Itera sobre cada botón y agrega un listener de eventos
    showButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        const alertDialog = document.querySelector(`#alert-dialog-${index}`);
        alertDialog.showModal();
      });
    });


    window.onload = function() {
      window.cerrarYPausar = function(boton) {
        const dialogo = boton.closest('dialog');
        const iframe = dialogo.querySelector('iframe');
        
        if (iframe) {
          // Guardamos la URL actual del iframe
          const currentSrc = iframe.src;
          
          iframe.src = '';
          // Restauramos el src después un Timeout
          setTimeout(() => {
            iframe.src = currentSrc;
          }, 10);
        }
    
        dialogo.close();
      }

  
      document.querySelectorAll('dialog button').forEach(button => {
        button.addEventListener('click', function() {
          cerrarYPausar(this);
        });
      });
    };
  
    const video = document.getElementById('video')
    
    const btnClose = document.querySelector('#tuBotonDeCerrar'); // Ajusta el selector
  
    if (btnClose) {
      btnClose.addEventListener("click", () => {
        if (video) video.pause();
      });
    }

    const next = document.querySelectorAll('.next');
    next.forEach((boton) => {
      boton.addEventListener('click', () => {
        const src = boton.dataset.video;
        if (src) video.src = src;
      });
      console.log(boton.dataset.video);
    });
    
  
    const prev = document.querySelectorAll('.prev');
  
    if (prev) {
      prev.forEach((boton) => {
        boton.addEventListener('click', () => {
          if (video) video.currentTime -= 10;
        });
      });
    }
  
    // Precargar imagenes en cache
    function preload(image, url) {
      fetch(url).then(request => request.blob()).then(() => {
        image.src = url;
      });
    }
  
    // Escuchar el evento de búsqueda
    document.addEventListener('buscar', (evento) => {
      const terminoBusqueda = evento.detail.toLowerCase();
      const listaPosts = document.getElementById('listPosts');
      const logoText = document.getElementById('logoText');
      
      if (listaPosts) {
        const posts = listaPosts.querySelectorAll('.post-item');
  
        posts.forEach((post) => {
          const titulo = post.querySelector('img')?.getAttribute('title')?.toLowerCase();
          if (titulo && titulo.includes(terminoBusqueda)) {
            post.style.display = 'block';
          } else {
            post.style.display = 'none';
          }
        });
      }

      // Actualizar el texto del logo
      if (logoText) {
        logoText.textContent = 'Resultados de la búsqueda para: ' + terminoBusqueda || "el blog de pelis";
        logoText.style.fontSize = "2rem";
        logoText.style.textAlign = "center";
        logoText.style.transition = "all 1s";
      }
    });
  });



  