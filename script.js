function iniciarJuego() {
  document.getElementById("pantalla-inicio").style.display = "none";
  document.getElementById("laboratorio").style.display = "block";
  document.getElementById("musica-fondo").play();
}

function mostrarSala(sala) {
  const contenido = document.getElementById("contenido");

  if (sala === "sala1") {
    contenido.innerHTML = `
      <h2>🧪 Sala 1: Mosaico Fluido</h2>
      <p>La membrana plasmática es como un mosaico dinámico de lípidos y proteínas.</p>
      <img src="https://i.imgur.com/R7UtZ3N.png" alt="Mosaico Fluido">
      <p><strong>Pregunta:</strong> ¿Qué componente le da fluidez a la membrana?</p>
      <input type="text" id="respuesta1" placeholder="Escribe tu respuesta aquí" />
      <button onclick="verificarRespuesta1()">Enviar</button>
      <p id="feedback1"></p>
    `;
  }

  if (sala === "sala2") {
    contenido.innerHTML = `
      <h2>🧬 Sala 2: Componentes de la membrana</h2>
      <p>Aquí aprenderás sobre los fosfolípidos, proteínas y carbohidratos de membrana.</p>
      <img src="https://i.imgur.com/VzOZsLq.png" alt="Componentes de la membrana">
      <p><em>¡Buen trabajo al desbloquear esta sala!</em></p>
    `;
  }
}

function verificarRespuesta1() {
  const respuesta = document.getElementById("respuesta1").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback1");

  if (respuesta === "colesterol") {
    feedback.innerHTML = "✅ ¡Correcto! Has desbloqueado la Sala 2.";
    document.getElementById("btn-sala2").disabled = false;
    new Audio("https://cdn.pixabay.com/download/audio/2023/03/02/audio_623a5041a1.mp3?filename=correct-answer-143023.mp3").play();
  } else {
    feedback.innerHTML = "❌ Respuesta incorrecta. Pista: también está presente en las hormonas esteroides.";
  }
}
