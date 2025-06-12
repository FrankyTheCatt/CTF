// Espera a que todo el contenido del HTML se haya cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Define las respuestas correctas, igual que antes.
    const correctAnswers = {
        q1: "chickenjockey",
        q2: "mish",
        q3: "Y2hpbGVtb3Jyb24=",
        q4: "/home/chickenjockey/.config",
        q5: "hatsune miku fornite la del fornite"
    };

    // 2. Selecciona TODOS los bloques de preguntas.
    const questionBlocks = document.querySelectorAll('.question-block');

    // 3. Itera sobre cada bloque de pregunta para asignarle su propia lógica.
    questionBlocks.forEach(block => {
        // Encuentra el input, el botón y el mensaje DENTRO de cada bloque.
        const input = block.querySelector('input');
        const button = block.querySelector('button');
        const feedbackMessage = block.querySelector('.feedback-message');

        // Agrega un evento de 'click' al botón de ESTE bloque.
        button.addEventListener('click', () => {
            const questionId = input.id; // Obtiene el ID de la pregunta (ej. "q1")
            const userAnswer = input.value.trim().toLowerCase(); // Obtiene la respuesta del usuario
            const correctAnswer = correctAnswers[questionId]; // Busca la respuesta correcta

            // Valida la respuesta
            if (userAnswer === correctAnswer) {
                feedbackMessage.textContent = '¡Correcto!';
                feedbackMessage.className = 'feedback-message correct'; // Aplica estilo de éxito
            } else {
                feedbackMessage.textContent = 'Incorrecto. Intenta de nuevo.';
                feedbackMessage.className = 'feedback-message incorrect'; // Aplica estilo de error
            }
            feedbackMessage.style.display = 'block'; // Muestra el mensaje
        });


        // =============== LÓGICA PARA EL DECODIFICADOR BASE64 ===============

// Obtiene las referencias a los nuevos elementos del decodificador
const base64Input = document.getElementById('base64-input');
const decodeButton = document.getElementById('decode-btn');
const decodedOutput = document.getElementById('decoded-output');

// Agrega un evento 'click' al botón de decodificar
decodeButton.addEventListener('click', () => {
    const encodedString = base64Input.value.trim();

    if (encodedString === "") {
        decodedOutput.textContent = 'Por favor, introduce un texto para decodificar.';
        return;
    }

    try {
        // La función atob() decodifica una cadena en Base64
        const decodedString = atob(encodedString);
        decodedOutput.textContent = decodedString;
    } catch (error) {
        // Si atob() falla (porque el texto no es Base64 válido), muestra un error
        decodedOutput.textContent = 'Error: El texto introducido no es válido en Base64.';
    }
        });
    });
});