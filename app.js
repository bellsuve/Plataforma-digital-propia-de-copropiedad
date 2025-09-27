// Portal Copropiedad Demo
document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('#menu li');
  const views = document.querySelectorAll('.view');
  const exportBtn = document.getElementById('exportBtn');
  const dashboard = document.getElementById('dashboard');

  // Cambiar vista
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const target = item.getAttribute('data-view');
      views.forEach(v => v.style.display = 'none');
      document.getElementById(target).style.display = 'block';
    });
  });

  // Datos de ejemplo
  let data = JSON.parse(localStorage.getItem('copropiedadData')) || {
    reservas: [],
    fracciones: [],
    reportes: [],
    votaciones: []
  };

  function saveData() {
    localStorage.setItem('copropiedadData', JSON.stringify(data));
  }

  // Dashboard simple
  function renderDashboard() {
    dashboard.innerHTML = `
      <h2>Resumen</h2>
      <p>Reservas: ${data.reservas.length}</p>
      <p>Fracciones: ${data.fracciones.length}</p>
      <p>Reportes: ${data.reportes.length}</p>
      <p>Votaciones: ${data.votaciones.length}</p>
    `;
  }
  renderDashboard();

  // Exportar JSON
  exportBtn.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'copropiedad-data.json';
    a.click();
    URL.revokeObjectURL(url);
  });
});