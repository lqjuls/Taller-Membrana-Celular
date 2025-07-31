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

  // Aquí puedes seguir agregando las demás salas
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
