document.addEventListener("DOMContentLoaded", function () {
    function verificarRespuesta(boton, estado) {
        let feedback = boton.parentElement.querySelector(".feedback");
        if (estado === "correcto") {
            feedback.textContent = "✅ ¡Correcto!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "❌ Incorrecto. Inténtalo de nuevo.";
            feedback.style.color = "red";
        }
    }

    // Hacer la función global para que funcione con los botones
    window.verificarRespuesta = verificarRespuesta;
});
