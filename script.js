// script.js

// Espera a que todo el contenido del HTML se haya cargado
document.addEventListener('DOMContentLoaded', () => {

    // Define las respuestas correctas (en minúsculas para una comparación fácil)
    const correctAnswers = {
        q1: "santiago",
        q2: "marte",
        q3: "def",
        q4: "coquimbo"
    };

    // Obtiene una referencia al botón y al div de mensaje
    const validateButton = document.getElementById('validateBtn');
    const resultMessage = document.getElementById('result-message');

    // Añade un "escuchador de eventos" que se activa cuando se hace clic en el botón
    validateButton.addEventListener('click', () => {
        let allCorrect = true;

        // Itera sobre cada pregunta para validar la respuesta
        for (const questionId in correctAnswers) {
            const userInput = document.getElementById(questionId).value.trim().toLowerCase();
            if (userInput !== correctAnswers[questionId]) {
                allCorrect = false;
                break; // Si una es incorrecta, no hace falta seguir comprobando
            }
        }

        // Muestra el mensaje de resultado apropiado
        if (allCorrect) {
            resultMessage.textContent = '✅ ¡Felicidades! Todas las respuestas son correctas.';
            resultMessage.className = 'correct'; // Aplica el estilo de éxito
        } else {
            resultMessage.textContent = '❌ Alguna respuesta es incorrecta. ¡Inténtalo de nuevo!';
            resultMessage.className = 'incorrect'; // Aplica el estilo de error
        }

        resultMessage.style.display = 'block'; // Hace visible el mensaje
    });
});