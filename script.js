function mostrarSala(nombreSala) {
  const contenido = document.getElementById('contenido');

  if (nombreSala === 'sala1') {
    contenido.innerHTML = `
      <h2>🧬 Modelo de Mosaico Fluido</h2>
      <p>La membrana plasmática se describe como un mosaico fluido porque...</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Fluid_mosaic_membrane.svg/1200px-Fluid_mosaic_membrane.svg.png" alt="Modelo de mosaico fluido" style="max-width:100%; border-radius:10px; margin-top:10px;">
    `;
  }

  else if (nombreSala === 'sala2') {
    contenido.innerHTML = `
      <h2>🧪 Componentes de la Membrana</h2>
      <ul>
        <li><strong>Fosfolípidos:</strong> forman la bicapa.</li>
        <li><strong>Proteínas integrales:</strong> cruzan la membrana.</li>
        <li><strong>Proteínas periféricas:</strong> asociadas a un solo lado.</li>
        <li><strong>Glucoproteínas y glucolípidos:</strong> reconocimiento celular.</li>
      </ul>
      <img src="https://i.pinimg.com/originals/fc/f6/d1/fcf6d127f8d768f30875c781697d3042.jpg" alt="Componentes de la membrana" style="max-width:100%; border-radius:10px; margin-top:10px;">
    `;
  }

  else if (nombreSala === 'sala3') {
    contenido.innerHTML = `
      <h2>⚡ Transporte a través de la Membrana</h2>
      <ul>
        <li><strong>Difusión simple:</strong> sustancias pequeñas y lipofílicas.</li>
        <li><strong>Difusión facilitada:</strong> a través de canales o proteínas.</li>
        <li><strong>Transporte activo:</strong> usa ATP (como la bomba Na⁺/K⁺).</li>
        <li><strong>Endocitosis y exocitosis:</strong> transporte masivo.</li>
      </ul>
      <img src="https://www.lifeder.com/wp-content/uploads/2019/05/transporte-activo.jpg" alt="Transporte celular" style="max-width:100%; border-radius:10px; margin-top:10px;">
    `;
  }

  else if (nombreSala === 'sala4') {
    contenido.innerHTML = `
      <h2>🧫 Caso clínico: Camila</h2>
      <p>Camila, una niña de 6 años, presenta fatiga muscular crónica, bajo crecimiento y disfunción neuromuscular. Exámenes revelan alteración en la bomba Na⁺/K⁺, afectando el equilibrio osmótico y la conducción nerviosa.</p>
      <p><strong>¿Qué trastorno celular podría explicar sus síntomas?</strong></p>
      <img src="https://cdn.pixabay.com/photo/2017/02/08/01/33/child-2048895_1280.jpg" alt="Camila paciente ficticia" style="max-width:100%; border-radius:10px; margin-top:10px;">
    `;
  }

  else if (nombreSala === 'sala5') {
    contenido.innerHTML = `
      <h2>❓ Preguntas de razonamiento</h2>
      <ol>
        <li>Si una proteína integral deja de funcionar, ¿qué proceso se vería más afectado?</li>
        <li>¿Por qué una célula no puede sobrevivir sin la bomba Na⁺/K⁺?</li>
        <li>¿Cómo se relacionan los síntomas de Camila con el transporte activo?</li>
      </ol>
      <p><em>¡Escríbelas en tu cuaderno, resuélvelas y gana la llave final del escape!</em></p>
    `;
  }
}
