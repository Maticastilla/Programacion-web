document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
    // Obtén los valores de los campos de entrada
    const respuestas = [];
    for (let i = 1; i <= 6; i++) {
        const pregunta = document.getElementById('Pregunta' + i).value.toLowerCase();
        respuestas.push(pregunta);
    }
    
    // Cuenta la cantidad de 'si' en cada respuesta
    const cantidadSI = respuestas.map(respuesta => contarPalabra(respuesta, 'si'));
    
    // Muestra los resultados
    const resultadosHTML = cantidadSI.map((cantidad, index) => {
        return Cantidad de 'SI' en Pregunta ${index + 1}: ${cantidad};
    }).join('<br>');
    document.getElementById('resultado').innerHTML = resultadosHTML;
    
    // Determina la imagen a mostrar
    let imagenSrc = '';
    if (cantidadSI.every(cantidad => cantidad === 0)) {
        imagenSrc = 'https://www.mascotas.com/cms/revista/Revista_5c479d45b4ba3_22012019.jpg';
    } else if (cantidadSI.some(cantidad => cantidad >= 4)) {
        imagenSrc = 'https://i0.wp.com/thehappening.com/wp-content/uploads/2017/09/dancc83ados.jpg?fit=1024%2C694&ssl=1';
    } else {
        imagenSrc = 'https://infofunes.com.ar/uploads/perro%20negrito%20.jpg';
    }
    
    // Muestra la imagen resultado
    const imagenResultado = document.getElementById('imagenResultado');
    imagenResultado.src = imagenSrc;
    imagenResultado.style.display = 'block';
});

// Función para contar la cantidad de una palabra en una cadena
function contarPalabra(cadena, palabra) {
    const expresionRegular = new RegExp('\\b' + palabra + '\\b', 'gi');
    const coincidencias = cadena.match(expresionRegular);
    return coincidencias ? coincidencias.length : 0;
}