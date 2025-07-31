<body>
<div id="menu">
  <button onclick="mostrarSala('sala1')" id="btn-sala1">🧪 Sala 1</button>
  <button onclick="mostrarSala('sala2')" id="btn-sala2" disabled>🧬 Sala 2</button>
  <button onclick="mostrarSala('sala3')" id="btn-sala3" disabled>⚡ Sala 3</button>
  <button onclick="mostrarSala('sala4')" id="btn-sala4" disabled>🧫 Sala 4</button>
  <button onclick="mostrarSala('sala5')" id="btn-sala5" disabled>🧠 Sala 5</button>
</div>
function mostrarSala(sala) {
  const contenido = document.getElementById("contenido");

  if (sala === "sala1") {
    contenido.innerHTML = `
      <h2>🧪 Sala 1: Modelo de Mosaico Fluido</h2>
      <p>La membrana plasmática se comporta como un mosaico fluido, compuesto por una bicapa de fosfolípidos en la que se insertan proteínas...</p>
      <p><strong>Pregunta:</strong> ¿Qué componente le da fluidez a la membrana?</p>
      <input type="text" id="respuesta1" placeholder="Tu respuesta aquí">
      <button onclick="verificarRespuesta1()">Enviar</button>
      <p id="feedback1"></p>
    `;
  }

  if (sala === "sala2") {
    contenido.innerHTML = `
      <h2>🧬 Sala 2: Componentes de la Membrana</h2>
      <p>En esta sala aprenderás sobre los fosfolípidos, proteínas, glucolípidos y glucoproteínas. Cada uno cumple funciones vitales en la membrana...</p>
    `;
  }

  // Puedes ir agregando más salas aquí igual que las anteriores
}

function verificarRespuesta1() {
  const respuesta = document.getElementById("respuesta1").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback1");

  if (respuesta === "colesterol") {
    feedback.innerHTML = "✅ ¡Correcto! Has desbloqueado la Sala 2.";
    document.getElementById("btn-sala2").disabled = false;
  } else {
    feedback.innerHTML = "❌ Respuesta incorrecta. Pista: también se encuentra en las hormonas esteroides.";
  }
}
<script src="script.js"></script>
