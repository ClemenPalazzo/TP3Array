
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}


const apariciones = new Array(13).fill(0); 

for (let i = 0; i < 50; i++) {
    const dado1 = lanzarDado();
    const dado2 = lanzarDado();
    const suma = dado1 + dado2;
    apariciones[suma]++;
}


const tablaResultados = document.getElementById('tablaResultados');

for (let suma = 2; suma <= 12; suma++) {
    const fila = document.createElement('tr');

    const celdaSuma = document.createElement('td');
    celdaSuma.textContent = suma;
    fila.appendChild(celdaSuma);

    const celdaApariciones = document.createElement('td');
    celdaApariciones.textContent = apariciones[suma];
    fila.appendChild(celdaApariciones);

    tablaResultados.appendChild(fila);
}
