# Ejercicios JS Async

Ejercicios para practicar código asincrónico de JavaScript usando Callbacks y Promesas

## 1- Imprimir por consola el chiste extraido usando funciones callback

[Ejercicio1](https://github.com/toyamarodrigo/ejerciciosJSAsync/tree/master/ejercicio_1/app.js)

```js
const obtenerChiste = require('./library');

// Codigo funcion callback

const funcionCallback = (chiste) => {
  console.log(chiste[0]);
};

// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(funcionCallback);
```

## 2- Imprimir por consola el chiste extraido usando Promesas

[Ejercicio2](https://github.com/toyamarodrigo/ejerciciosJSAsync/tree/master/ejercicio_2/app.js)

```js
const obtenerChiste = require('./library');

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
obtenerChiste().then((chiste) => {
  console.log(chiste[0]);
});
```

## 3- Imprimir por consola los siguientes datos del pokemon elegido (nombre hardcodeado) usando funciones Callbacks

- Nombre
- Habilidades

[Ejercicio3](https://github.com/toyamarodrigo/ejerciciosJSAsync/tree/master/ejercicio_3/app.js)

```js
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
```

obtenerPokemon('charmander', funcionCallback);

## 4- Imprimir por consola los siguientes datos del pokemon elegido (nombre hardcodeado) usando Promesas

- Nombre
- Habilidades

[Ejercicio4](https://github.com/toyamarodrigo/ejerciciosJSAsync/tree/master/ejercicio_4/app.js)

```js
const obtenerPokemon = require('./library');

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon('pidgey').then((pokemon) => {
  console.log(`Name: ${pokemon.name}`);
  console.log('Abilities: ');
  pokemon.abilities.forEach((el) => {
    console.log(el.ability.name);
  });
});
```

## 5- Imprimir por consola los siguientes datos de la persona extraida usando Callbacks

- Nombre
- Genero
- Pais, Estado, Ciudad, Calle, Nro, Código Postal
- Email
- Nombre de usuario
- Password

[Ejercicio5](https://github.com/toyamarodrigo/ejerciciosJSAsync/tree/master/ejercicio_5/app.js)

```js
const obtenerPersonaFake = require('./library');

// Codigo funcion callback

const funcionCallback = (persona) => {
  persona.results.forEach((el) => {
    console.log(`Name: ${el.name.title}. ${el.name.first} ${el.name.last}`);
    console.log(`Gender: ${el.gender}`);
    console.log(`Country: ${el.location.country}`);
    console.log(`State: ${el.location.state}`);
    console.log(`City: ${el.location.city}`);
    console.log(
      `Street: ${el.location.street.number} ${el.location.street.name}`
    );
    console.log(`Email: ${el.email}`);
    console.log(`Username: ${el.login.username}`);
    console.log(`Password: ${el.login.password}`);
  });
};

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(funcionCallback);
```

## 6- Imprimir por consola los siguientes datos de la persona extraida usando Promesas

- Nombre
- Genero
- Pais, Estado, Ciudad, Calle, Nro, Código Postal
- Email
- Nombre de usuario
- Password

[Ejercicio6](https://github.com/toyamarodrigo/ejerciciosJSAsync/tree/master/ejercicio_6/app.js)

```js
const obtenerPersonaFake = require('./library');

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then((persona) => {
  persona.results.forEach((el) => {
    console.log(`Name: ${el.name.title}. ${el.name.first} ${el.name.last}`);
    console.log(`Gender: ${el.gender}`);
    console.log(`Country: ${el.location.country}`);
    console.log(`State: ${el.location.state}`);
    console.log(`City: ${el.location.city}`);
    console.log(
      `Street: ${el.location.street.number} ${el.location.street.name}`
    );
    console.log(`Email: ${el.email}`);
    console.log(`Username: ${el.login.username}`);
    console.log(`Password: ${el.login.password}`);
  });
});
```
