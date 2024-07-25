
let resultadosTabla = [];

function generarTablaMultiplicar(numero) {
    resultadosTabla = []; 
    for (let i = 1; i <= 10; i++) {
        resultadosTabla.push(`${numero} x ${i} = ${numero * i}`);
    }
}


function mostrarTabla() {
    const numero = parseInt(document.getElementById('numero').value);
    if (!isNaN(numero)) {
        generarTablaMultiplicar(numero);
        mostrarResultadosTabla();
    } else {
        alert('Por favor, ingresa un número válido.');
    }
}

function mostrarResultadosTabla() {
    const listaResultados = document.getElementById('tablaResultados');
    listaResultados.innerHTML = '';
    resultadosTabla.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        listaResultados.appendChild(li);
    });
}
