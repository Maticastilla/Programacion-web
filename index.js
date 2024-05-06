document.getElementById('miFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  
  const respuestas = [];
  for (let i = 1; i <= 6; i++) {
      const pregunta = document.getElementById('Pregunta' + i).value.toUpperCase();
      respuestas.push(pregunta);
  }
  
  
  const cantidadSI = respuestas.filter(respuesta => respuesta === 'SI').length;
  
  
  let imagenSrc = '';
  if (cantidadSI >= 2 && cantidadSI < 4) {
      imagenSrc = 'https://www.mascotas.com/cms/revista/Revista_5c479d45b4ba3_22012019.jpg'; 
  } else if (cantidadSI >= 4) {
      imagenSrc = 'https://i0.wp.com/thehappening.com/wp-content/uploads/2017/09/dancc83ados.jpg?fit=1024%2C694&ssl=1' ; 
  } else {
      
      imagenSrc = 'https://infofunes.com.ar/uploads/perro%20negrito%20.jpg';
  }
  
  
  const imagenResultado = document.getElementById('imagenResultado');
  imagenResultado.src = imagenSrc;
  imagenResultado.style.display = 'block';
});




'https://www.mascotas.com/cms/revista/Revista_5c479d45b4ba3_22012019.jpg'
'https://i0.wp.com/thehappening.com/wp-content/uploads/2017/09/dancc83ados.jpg?fit=1024%2C694&ssl=1'
'https://infofunes.com.ar/uploads/perro%20negrito%20.jpg'


