// Espera a que todo el contenido del HTML se haya cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Define las respuestas correctas
    const correctAnswers = {
        q1: "chickenjockey",
        q2: "mish",
        q3: "Y2hpbGVtb3Jyb24=", // Esta es la respuesta sensible a mayúsculas/minúsculas
        q4: "/home/chickenjockey/.config",
        q5: "hatsune miku fornite la del fornite"
    };

    // --- LÓGICA DE VALIDACIÓN DE PREGUNTAS ---
    const questionBlocks = document.querySelectorAll('.question-block');
    questionBlocks.forEach(block => {
        const input = block.querySelector('input');
        const button = block.querySelector('button');
        const feedbackMessage = block.querySelector('.feedback-message');

        button.addEventListener('click', () => {
            const questionId = input.id;
            // Obtenemos el valor sin modificarlo todavía
            let userAnswer = input.value.trim();
            const correctAnswer = correctAnswers[questionId];

            // IMPORTANTE: Solo convertimos a minúsculas si NO es la pregunta 3
            if (questionId !== 'q3') {
                userAnswer = userAnswer.toLowerCase();
            }

            // Valida la respuesta
            if (userAnswer === correctAnswer) {
                feedbackMessage.textContent = '¡Correcto!';
                feedbackMessage.className = 'feedback-message correct';
            } else {
                feedbackMessage.textContent = 'Incorrecto. Intenta de nuevo.';
                feedbackMessage.className = 'feedback-message incorrect';
            }
            feedbackMessage.style.display = 'block';
        });
    });

    // --- LÓGICA PARA EL DECODIFICADOR BASE64 (CORREGIDO) ---
    // (Movido fuera del bucle forEach)
    const base64Input = document.getElementById('base64-input');
    const decodeButton = document.getElementById('decode-btn');
    const decodedOutput = document.getElementById('decoded-output');

    decodeButton.addEventListener('click', () => {
        const encodedString = base64Input.value.trim();

        if (encodedString === "") {
            decodedOutput.textContent = 'Por favor, introduce un texto para decodificar.';
            return;
        }

        try {
            const decodedString = atob(encodedString);
            decodedOutput.textContent = decodedString;
        } catch (error) {
            decodedOutput.textContent = 'Error: El texto introducido no es válido en Base64.';
        }
    });
});