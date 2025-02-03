document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("catalogacionForm").addEventListener("submit", enviarCatalogacion);
    document.getElementById("supervisionForm").addEventListener("submit", enviarSupervision);
});

function cambiarProceso() {
    const procesoSeleccionado = document.getElementById("proceso").value;
    document.getElementById("catalogacionForm").style.display = procesoSeleccionado === "catalogacion" ? "block" : "none";
    document.getElementById("supervisionForm").style.display = procesoSeleccionado === "supervision" ? "block" : "none";
}

function mostrarSeccionCatalogacion() {
    const estado = document.getElementById("estadoCatalogacion").value;
    document.getElementById("catalogacionProceso").style.display = estado === "proceso" ? "block" : "none";
    document.getElementById("catalogacionExitosa").style.display = estado === "exitosa" ? "block" : "none";
    document.getElementById("catalogacionRechazo").style.display = estado === "rechazo" ? "block" : "none";
}

function enviarCatalogacion(event) {
    event.preventDefault();
    alert("✅ Catalogación registrada con éxito.");
    document.getElementById("catalogacionForm").reset();
}

function enviarSupervision(event) {
    event.preventDefault();
    alert("✅ Supervisión registrada con éxito.");
    document.getElementById("supervisionForm").reset();
}
