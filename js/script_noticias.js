document.addEventListener("DOMContentLoaded", function () {
    const sitios = [
        {
            titulo: "La Prensa - Noticias sobre Extractivismo",
            descripcion: "Últimas noticias y reportajes sobre el impacto del extractivismo en Panamá.",
            imagen: "https://www.prensa.com/wp-content/uploads/2021/05/cropped-logo-192x192.png",
            url: "https://www.prensa.com/buscar/?q=extractivismo"
        },
        {
            titulo: "Telemetro - Medio Ambiente",
            descripcion: "Información sobre el impacto ambiental del extractivismo en Panamá.",
            imagen: "https://www.telemetro.com/themes/custom/telemetro/logo.png",
            url: "https://www.telemetro.com/noticias"
        },
        {
            titulo: "National Geographic - Recursos Naturales",
            descripcion: "Artículos detallados sobre la extracción de recursos naturales en América Latina.",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6a/National_Geographic_logo.svg",
            url: "https://www.nationalgeographic.com/environment"
        },
        {
            titulo: "BBC News - Minería y Medio Ambiente",
            descripcion: "Reportajes sobre los efectos de la minería en los ecosistemas.",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/BBC_News.svg/512px-BBC_News.svg.png",
            url: "https://www.bbc.com/mundo"
        },
        {
            titulo: "El País - Crisis Ambiental",
            descripcion: "Noticias recientes sobre la crisis ambiental causada por la explotación de recursos.",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/El_Pa%C3%ADs_logo.svg/512px-El_Pa%C3%ADs_logo.svg.png",
            url: "https://elpais.com/noticias/medio-ambiente/"
        }
    ];

    let container = document.getElementById("referencias-container");

    // Función para desordenar el array de sitios (para cargar de forma aleatoria)
    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function cargarReferencias(filtro = "") {
        container.innerHTML = ""; // Limpiar el contenedor antes de cargar nuevas referencias
        let sitiosFiltrados = sitios.filter(sitio => 
            sitio.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
            sitio.descripcion.toLowerCase().includes(filtro.toLowerCase())
        );

        sitiosFiltrados.forEach(sitio => {
            let card = document.createElement("div");
            card.classList.add("tarjeta");

            card.innerHTML = `
                <img src="${sitio.imagen}" alt="Vista previa">
                <h3>${sitio.titulo}</h3>
                <p>${sitio.descripcion}</p>
                <a href="${sitio.url}" target="_blank">Visitar sitio</a>
            `;

            container.appendChild(card);
        });
    }

    // Filtrar referencias en tiempo real
    document.getElementById("buscador").addEventListener("input", function () {
        cargarReferencias(this.value);
    });

    // Cargar referencias al inicio en orden aleatorio
    cargarReferencias();
});
