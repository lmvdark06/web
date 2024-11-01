function calcular() {
    // Obtencion de Valores
    const nombre = document.getElementById("nombre").value;
    const tipoEvento = document.getElementById("tipoEvento").value;
    const fechaContrato = document.getElementById("fechaContrato").value;
    const fecha = document.getElementById("fecha").value;
    const personas = parseInt(document.getElementById("personas").value);
    const paquete = document.getElementById("paquete").value;

    // Salones y capacidades
    const salonOroCapacidad = 200;
    const salonPlataCapacidad = 150;
    const salonBronceCapacidad = 100;
    const costoBasePersona = 19.5;

    let salonSeleccionado;
    let costoTotal = 0;
    let empleadoAsignado;
    const depositoSeguridad = 200; // Depósito

    // Designacion de salon
    if (personas <= salonBronceCapacidad) {
        salonSeleccionado = "Salón Bronce";
        empleadoAsignado = "Chris";
    } else if (personas <= salonPlataCapacidad) {
        salonSeleccionado = "Salón Plata";
        empleadoAsignado = "Jonas";
    } else if (personas <= salonOroCapacidad) {
        salonSeleccionado = "Salón Oro";
        empleadoAsignado = "Melvin";
    } else {
        document.getElementById("resultado").innerText = "El número de personas excede la capacidad máxima.";
        return;
    }

    // Calcular costo base
    costoTotal = personas * costoBasePersona;

    // Aplicar IVA (15%)
    const iva = costoTotal * 0.13;
    costoTotal += iva;

    // Extra
    const costoExtraEvento = 200;
    if (tipoEvento === "boda" || tipoEvento === "bautizo") {
        costoTotal += costoExtraEvento;
    }

    // Añadir el depósito de seguridad al costo total
    costoTotal += depositoSeguridad;

    // Resultado Final
    document.getElementById("resultado").innerText = `
        Informacion y contrato
        ______________________
        Nombre del cliente: ${nombre}
        Fecha del contrato: ${fechaContrato}
        Fecha del evento: ${fecha}
        Servicio adquirido: Paquete ${paquete}
        Cantidad de personas: ${personas}
        Local designado: ${salonSeleccionado}
        Asesor de ventas: ${empleadoAsignado}
        Costo total del evento (con IVA y depósito): $${costoTotal.toFixed(2)}
        Depósito de seguridad por posibles daños: $${depositoSeguridad}
    `;
}
