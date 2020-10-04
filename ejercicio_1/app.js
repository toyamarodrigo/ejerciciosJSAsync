const obtenerChiste = require('./library');

// Codigo funcion callback

const funcionCallback = (chiste) => {
  console.log(chiste[0]);
};

// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(funcionCallback);
