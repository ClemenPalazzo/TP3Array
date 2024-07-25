let saldo = 1000; 
const transacciones = []; 

function verSaldo() {
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Tu saldo actual es: $${saldo}`;
    transacciones.push(`Consulta de saldo: $${saldo}`);
}

function ingresarDinero() {
    const monto = parseFloat(prompt("Ingresa el monto a depositar:"));
    if (!isNaN(monto) && monto > 0) {
        saldo += monto;
        const resultado = document.getElementById('resultado');
        resultado.textContent = `Has ingresado: $${monto}. Tu nuevo saldo es: $${saldo}`;
        transacciones.push(`Ingreso de dinero: $${monto}`);
    } else {
        alert("Por favor, ingresa un monto válido.");
    }
}

function retirarDinero() {
    const monto = parseFloat(prompt("Ingresa el monto a retirar:"));
    if (!isNaN(monto) && monto > 0) {
        if (monto <= saldo) {
            saldo -= monto;
            const resultado = document.getElementById('resultado');
            resultado.textContent = `Has retirado: $${monto}. Tu nuevo saldo es: $${saldo}`;
            transacciones.push(`Retiro de dinero: $${monto}`);
        } else {
            alert("Fondos insuficientes.");
        }
    } else {
        alert("Por favor, ingresa un monto válido.");
    }
}

function verTransacciones() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '<h2>Últimas Transacciones:</h2><ul>';
    transacciones.forEach(transaccion => {
        resultado.innerHTML += `<li>${transaccion}</li>`;
    });
    resultado.innerHTML += '</ul>';
}

function salir() {
    const resultado = document.getElementById('resultado');
    resultado.textContent = "Gracias por usar el cajero automático. ¡Hasta luego!";
}
