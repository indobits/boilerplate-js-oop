class Persona {
  constructor(nombre, apellido, estado) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.estado = estado;
  }

  get getNombre() {
      return this.success;
  }

  set setNombre(nombre) {
      this.nombre = nombre;
  }

  get getApellido() {
      return this.apellido;
  }

  set setApellido(apellido) {
      this.apellido = apellido;
  }

  get getEstado() {
      return this.estado;
  }

  set setEstado(estado) {
      this.estado = estado;
  }
}

module.exports = Persona;