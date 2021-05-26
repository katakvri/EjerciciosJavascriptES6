
document.querySelector("#calcular").addEventListener("click", function() {
    let diameter = parseInt(document.querySelector("#diameter").value);
    parseInt(diameter);
    const pi = Math.PI;
    
    if (isNaN(diameter)) {
        diameter.value = "";
    } else {
        // Calculamos el perimetro y guardamos el valor en un variable 
        const getPerimeter = (diameter) => Math.floor(pi * diameter);
        const perimeter = getPerimeter(diameter);
        // Lo mismo con el area
        const getArea = (diameter) => Math.floor((diameter/2) * pi);
        const area = getArea(diameter)
        // Seleccionamos los span para insertar los resultados
        const perimeterSpace = document.querySelector("#perimeter");
        perimeterSpace.innerHTML = perimeter;
        const areaSpace = document.querySelector("#area");
        areaSpace.innerHTML = area; 
    }
});


