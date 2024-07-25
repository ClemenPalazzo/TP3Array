
const ciudades = [];

function solicitarCiudades() {
  let ciudad;
  while (true) {
    ciudad = prompt("Ingresa el nombre de una ciudad (o haz clic en cancelar para finalizar):");
    if (ciudad === null) {
      break;
    }
    ciudades.push(ciudad);
  }
}

solicitarCiudades();

const info = document.getElementById('info');
info.textContent = `El arreglo de ciudades tiene ${ciudades.length} elementos.`;


const listaCiudades = document.getElementById('listaCiudades');
const primerElemento = ciudades[0];
const tercerElemento = ciudades[2];
const ultimoElemento = ciudades[ciudades.length - 1];

const items = [
  `Elemento 1er posición: ${primerElemento}`,
  `Elemento 3er posición: ${tercerElemento}`,
  `Elemento última posición: ${ultimoElemento}`
];

items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  listaCiudades.appendChild(li);
});


ciudades.push('París');


const segundoElemento = ciudades[1];
const liSegundoElemento = document.createElement('li');
liSegundoElemento.textContent = `Elemento en segunda posición: ${segundoElemento}`;
listaCiudades.appendChild(liSegundoElemento);

ciudades[1] = 'Barcelona';

const arregloCompleto = document.getElementById('arregloCompleto');
ciudades.forEach(ciudad => {
  const li = document.createElement('li');
  li.textContent = `Elemento: ${ciudad}`;
  arregloCompleto.appendChild(li);
});
