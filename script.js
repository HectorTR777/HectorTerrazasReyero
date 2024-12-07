// Mostrar la fecha y hora actual
const datetimeElement = document.getElementById('fechayhora');
function updateDateTime() {
    const now = new Date();
    datetimeElement.textContent = `Fecha y hora: ${now.toLocaleString()}`;
}
updateDateTime();
setInterval(updateDateTime, 1000);
