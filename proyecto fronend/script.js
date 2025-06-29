// Contenidos para cada sección
const contenidos = {
  seguridad: `
    <h3>Seguridad de los Datos</h3>
    <ul class="list-group list-group-flush mt-3">
      <li class="list-group-item bg-transparent">🔒 Tus datos están cifrados y protegidos</li>
      <li class="list-group-item bg-transparent">👤 Solo tú decides qué información mostrar</li>
      <li class="list-group-item bg-transparent">🛑 Puedes ocultar o revocar el acceso en cualquier momento</li>
      <li class="list-group-item bg-transparent">✅ Solo personas autorizadas podrán ver tus datos</li>
      <li class="list-group-item bg-transparent">🔍 Cada acceso queda registrado y es auditable</li>
      <li class="list-group-item bg-transparent">📱 Puedes actualizar o eliminar datos fácilmente</li>
    </ul>
  `,
  documentos: `

  <h3>Números de Emergencia en Chile</h3>
  <ul class="list-group list-group-flush mt-3">
    <li class="list-group-item bg-transparent">🚑 Ambulancia: 131</li>
    <li class="list-group-item bg-transparent">🚒 Bomberos: 132</li>
    <li class="list-group-item bg-transparent">🚓 Carabineros: 133</li>
    <li class="list-group-item bg-transparent">📞 Policía de Investigaciones (PDI): 134</li>
    <li class="list-group-item bg-transparent">🚨 Emergencias Médicas: 131</li>
    <li class="list-group-item bg-transparent">📱 SOS Mujer (Violencia de Género): 1455</li>
    <li class="list-group-item bg-transparent">🆘 ONEMI (Emergencias Nacionales): 137</li>
  </ul>
`,

  agenda: `

    <h4>Centros Asistenciales Recomendados</h4>
    <div class="card" style="width: 100%; max-width: 400px;">
      <div class="card-body">
        <h5 class="card-title">Clínica Vida Saludable</h5>
        <h6 class="card-subtitle mb-2 text-muted">Centro Médico General</h6>
        <p class="card-text">
          Dirección: Av. Salud 123, Ciudad<br/>
          Teléfono: +56 2 2345 6789<br/>
          Horario: Lun - Vie, 08:00 - 18:00
        </p>
        <a href="https://www.clinicavidasaludable.cl" target="_blank" class="card-link">Visitar sitio web</a>
      </div>
    </div>
  `
};

// Esperar que el DOM esté cargado para acceder a elementos
document.addEventListener('DOMContentLoaded', () => {
  const btnDocumentos = document.getElementById('btnDocumentos');
  const btnAgenda = document.getElementById('btnAgenda');
  const btnComenzar = document.getElementById('btnComenzar');
  const activityBox = document.querySelector('.activity-box');

  btnDocumentos.addEventListener('click', () => {
    activityBox.innerHTML = contenidos.documentos;
  });

  btnAgenda.addEventListener('click', () => {
    activityBox.innerHTML = contenidos.agenda;
  });

  btnComenzar.addEventListener('click', () => {
    activityBox.innerHTML = contenidos.seguridad;
  });
});
