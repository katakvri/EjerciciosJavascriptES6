class Coche {
    constructor(nombre, marca, velocidad) {
        this.nombre = nombre;
        this.marca = marca;
        this.velocidad = velocidad;
    }
    acelerar() {
        return this.velocidad += 30;
    }
    frenar() {
        return this.velocidad = 0;
    }
}

let coche = new Coche("Yaris","Toyota", 30);

console.log(coche);

console.log(coche.acelerar());

console.log(coche.frenar());