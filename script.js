function mostrarSala(sala) {
  const contenido = document.getElementById('contenido');

  switch (sala) {
    case 'sala1':
      contenido.innerHTML = `
        <h2>🧬 Sala 1: Modelo de Mosaico Fluido</h2>
        <p>La membrana plasmática está formada por una bicapa de fosfolípidos con proteínas incrustadas, lo que permite una estructura dinámica y flexible.</p>
        <ul>
          <li><strong>Fosfolípidos:</strong> Forman la base de la bicapa.</li>
          <li><strong>Proteínas integrales:</strong> Atraviesan la membrana.</li>
          <li><strong>Colesterol:</strong> Regula la fluidez de la membrana.</li>
        </ul>
        <p>¿Qué pasaría si la membrana no fuera fluida? 🤔</p>
      `;
      break;

    case 'sala2':
      contenido.innerHTML = `
        <h2>🧪 Sala 2: Componentes de la Membrana</h2>
        <p>Explora los componentes esenciales de la membrana:</p>
        <ul>
          <li>🔹 Fosfolípidos</li>
          <li>🔹 Proteínas periféricas e integrales</li>
          <li>🔹 Glucolípidos y glucoproteínas</li>
        </ul>
        <p>Cada uno tiene funciones específicas que mantienen la homeostasis celular.</p>
      `;
      break;

    case 'sala3':
      contenido.innerHTML = `
        <h2>⚡ Sala 3: Transporte a través de la Membrana</h2>
        <p>¿Cómo entran y salen las sustancias de la célula?</p>
        <ul>
          <li>🟢 Difusión simple y facilitada</li>
          <li>🔵 Transporte activo (bomba Na⁺/K⁺)</li>
          <li>🟠 Endocitosis y exocitosis</li>
        </ul>
        <p>¡Cada mecanismo tiene un propósito y gasto energético diferente!</p>
      `;
      break;

    case 'sala4':
      contenido.innerHTML = `
        <h2>🧫 Sala 4: Caso Clínico - Camila</h2>
        <p>Camila, 6 años, necesita una transfusión de emergencia. Su sangre es O Rh-, pero está mostrando signos de rechazo...</p>
        <p>💡 ¿Qué estructura de la membrana está involucrada? ¿Qué función no se está cumpliendo?</p>
        <p>🎯 Pista: piensa en las <strong>glucoproteínas</strong> como marcadores celulares.</p>
      `;
      break;

    case 'sala5':
      contenido.innerHTML = `
        <h2>❓ Sala 5: Preguntas de razonamiento</h2>
        <ol>
          <li>¿Qué estructuras actúan como antígenos en la superficie de la célula?</li>
          <li>¿Qué ocurriría si fallaran los canales de transporte de iones?</li>
          <li>¿Cómo afectaría una mutación en una proteína integral al intercambio celular?</li>
        </ol>
        <p>Reflexiona y responde en voz alta o escríbelas en tu cuaderno. Puedes volver a otras salas si necesitas repasar. 🧠</p>
      `;
      break;

    default:
      contenido.innerHTML = '<p>Haz clic en una sala para comenzar tu misión celular.</p>';
  }
}
