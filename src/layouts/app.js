document.addEventListener('DOMContentLoaded', () => {
    const showButtons = document.querySelectorAll(".show-button");
  
    // Itera sobre cada botón y agrega un listener de eventos
    showButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        const alertDialog = document.querySelector(`#alert-dialog-${index}`);
        alertDialog.showModal();
      });
    });
  
    const video = document.getElementById('video')
    // Corrige esta línea:
    const btnClose = document.querySelector('#tuBotonDeCerrar'); // Ajusta el selector
  
    if (btnClose) {
      btnClose.addEventListener("click", () => {
        if (video) video.pause();
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
    });
  });