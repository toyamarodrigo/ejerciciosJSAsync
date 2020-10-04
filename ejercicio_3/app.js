const obtenerPokemon = require('./library');

// Codigo funcion callback

const funcionCallback = (pokemon) => {
  console.log('Name: ' + pokemon.name);
  console.log('Abilities: ');
  pokemon.abilities.forEach((el) => {
    console.log(el.ability.name);
  });
};

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon('charmander', funcionCallback);
