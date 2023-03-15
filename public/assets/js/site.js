

const maxCaracteres = 80;
const misParrafos = document.querySelectorAll(".card-text");

misParrafos.forEach((parrafo) => {
    const contenido = parrafo.innerHTML;

    if (contenido.length > maxCaracteres) {
      const contenidoTruncado = contenido.substring(0, maxCaracteres);
      parrafo.innerHTML = contenidoTruncado + '...';
    }

});

