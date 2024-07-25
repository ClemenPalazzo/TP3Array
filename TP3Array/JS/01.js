
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
 
  const listaMeses = document.getElementById('listaMeses');
  
 
  meses.forEach(mes => {
    const li = document.createElement('li');
    li.textContent = mes;
    listaMeses.appendChild(li);
  });
  