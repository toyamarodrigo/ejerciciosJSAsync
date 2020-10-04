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
