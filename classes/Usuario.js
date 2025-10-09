export class Usuario {
  nombre;
  email;
  edad;
  #pin = 1234;

  constructor(nombre, email, edad) {
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
  }

  static crear(nombre,email,edad){
    return new this(nombre,email,edad)
  }

  cambiarPin(actual,nuevo){
    if(actual == this.#pin){
      this.#pin = nuevo
      return true
    } 
    return false
  }
}
