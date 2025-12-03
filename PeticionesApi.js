main();

async function main() {
  try {
    // Petición para obtener posts
    const respuestaUsuarios = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    // Convertir la respuesta a JSON. Es una promesa. Y la información se guarda en forma de objeto o array de objetos, una lista y se trata como un array.
    const usuarios = await respuestaUsuarios.json();

    mostrarNombreUsuariosForEach(usuarios);
    console.log("------");
    mostrarNombreUsuariosFor(usuarios);
  } catch (error) {
    console.error(error);
    return;
  }
}

// Diferentes formas de recorrer un array de usuarios y mostrar su nombre en consola
function mostrarNombreUsuariosForEach(usuarios) {
  for (let usuario of usuarios) {
    console.log(usuario.name);
  }
}

// Otra forma de hacerlo con un bucle for tradicional
function mostrarNombreUsuariosFor(usuarios) {
  for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].name);
  }
}

// Otra forma de hacerlo con una función anónima y forEach
function mostrarNombreUsuariosAnonima(usuarios) {
  usuarios.forEach((usuario) => {
    console.log(usuario.name);
  });
}
