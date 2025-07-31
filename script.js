function iniciarJuego() {
  document.getElementById('pantalla-inicio').style.display = 'none';
  document.getElementById('laboratorio').style.display = 'block';
  reproducirMusica();
}

function reproducirMusica() {
  const musica = document.getElementById('musica-fondo');
  musica.volume = 0.2;
  musica.play();
}

function mostrarSala(sala) {
  const contenido = document.getElementById("contenido");

  if (sala === "sala1") {
    contenido.innerHTML = `
      <h2>🧪 Sala 1: Modelo de Mosaico Fluido</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Fluid_mosaic_membrane.svg" width="300"/>
      <p>¿Qué componente da fluidez a la membrana?</p>
      <input type="text" id="respuesta1" placeholder="Tu respuesta">
      <button onclick="verificarRespuesta1()">Verificar</button>
      <p id="feedback1"></p>
    `;
  }

  if (sala === "sala2") {
    contenido.innerHTML = `
      <h2>🧬 Sala 2: Componentes</h2>
      <img src="https://i.imgur.com/L2Qlx5H.png" width="300"/>
      <p>Menciona una proteína que atraviesa completamente la membrana:</p>
      <input type="text" id="respuesta2" placeholder="Tu respuesta">
      <button onclick="verificarRespuesta2()">Verificar</button>
      <p id="feedback2"></p>
    `;
  }
}

function verificarRespuesta1() {
  const r = document.getElementById('respuesta1').value.toLowerCase().trim();
  const f = document.getElementById('feedback1');
  if (r === 'colesterol') {
    f.innerHTML = '✅ ¡Correcto! Avanzas a la siguiente sala.';
    document.getElementById('btn-sala2').disabled = false;
  } else {
    f.innerHTML = '❌ Incorrecto. Pista: también está en las hormonas esteroides.';
  }
}

function verificarRespuesta2() {
  const r = document.getElementById('respuesta2').value.toLowerCase().trim();
  const f = document.getElementById('feedback2');
  if (r.includes('integral') || r.includes('transmembrana')) {
    f.innerHTML = '✅ ¡Correcto! Has desbloqueado la Sala 3.';
    document.getElementById('btn-sala3').disabled = false;
  } else {
    f.innerHTML = '❌ Intenta de nuevo.';
  }
}
