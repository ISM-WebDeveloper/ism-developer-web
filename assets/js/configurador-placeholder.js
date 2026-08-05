const serviceNames = {
    "desarrollo-implementacion": "Desarrollo e Implementación",
    "mantenimiento-evolucion": "Mantenimiento y Evolución",
    "monitoreo-observabilidad": "Monitoreo y Observabilidad",
    "respaldo-continuidad": "Respaldo y Continuidad Operacional",
    "ciberseguridad-proteccion": "Ciberseguridad y Protección Digital",
    "soporte-gestion": "Soporte y Gestión de Servicios"
};

const selectedService = document.getElementById("selectedService");
const requestedService = new URLSearchParams(window.location.search).get("servicio");

if (selectedService && requestedService && serviceNames[requestedService]) {
    selectedService.textContent = serviceNames[requestedService];
    document.title = `${serviceNames[requestedService]} | Configurador ISM Developer`;
}
