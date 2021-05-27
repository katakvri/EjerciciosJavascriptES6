//Guardamos el diametro con un prompt
const diameter = prompt("Cual es el diametro del circulo a calcular?");
const pi = Math.PI;
if (isNaN(diameter)) {
    alert("Recargue la pagina e inserte un numero valido")
} else {
    // Calculamos el perimetro y guardamos el valor en un variable 
    const getPerimeter = (diameter) => Math.floor(pi * diameter);
    const perimeter = getPerimeter(diameter);
    // Lo mkismo con el area
    const getArea = (diameter) => Math.floor((diameter/2) * pi);
    const area = getArea(diameter)
    // Mostramos en consola el perimetro y el area calculados:
    console.log(`El perimetro del circulo dado es ${perimeter} y el area es ${area}`);
}
