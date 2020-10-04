const obtenerPokemon = require('./library');

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon('pidgey').then((pokemon) => {
  console.log(`Name: ${pokemon.name}`);
  console.log('Abilities: ');
  pokemon.abilities.forEach((el) => {
    console.log(el.ability.name);
  });
});
