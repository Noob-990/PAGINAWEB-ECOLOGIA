document.addEventListener("DOMContentLoaded", function() {
    let indice = 0;
    const imagenes = document.querySelectorAll(".carrusel-imagenes img");
    const anterior = document.querySelector(".anterior");
    const siguiente = document.querySelector(".siguiente");

    function mostrarImagen(i) {
        imagenes.forEach(img => img.style.display = "none"); // Oculta todas
        imagenes[i].style.display = "block"; // Muestra solo la actual
    }

    function avanzar() {
        indice = (indice + 1) % imagenes.length;
        mostrarImagen(indice);
    }

    siguiente.addEventListener("click", avanzar);

    anterior.addEventListener("click", function() {
        indice = (indice - 1 + imagenes.length) % imagenes.length;
        mostrarImagen(indice);
    });

    mostrarImagen(indice); // Mostrar la primera imagen al cargar

    // ⏳ Hacer que cambie automáticamente cada 3 segundos (3000ms)
    setInterval(avanzar, 1000);
});
