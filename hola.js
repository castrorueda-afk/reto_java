const usuario = {
  nombre: "juan",
  apellido: "castro",
  edad: 25,
  direccion: {
    calle: "Calle 100",
    ciudad: "piedecuesta",
    pais: "Colombia"
  },
  
  presentarse() {
  
    const { nombre, apellido, edad, direccion: { ciudad, pais } } = this;
    
    return `Hola, soy ${nombre} ${apellido}, tengo ${edad} años y vivo en ${ciudad}, ${pais}`;
  }
};

console.log(usuario.presentarse());
