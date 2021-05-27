var robotName = prompt("Escribe tu nombre para convertirlo a CodigoNombre");
const alphabet = ["0","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

function nameCode(string) {
    const stringNoSpaces = string.replace(/\s/g, "");
    const stringUpper = stringNoSpaces.toUpperCase();
    const name = stringUpper.slice(0, 2);
    const nameSplitted = name.split("");
    nameSplitted.push(alphabet.indexOf(nameSplitted[0]));
    nameSplitted.push(alphabet.indexOf(nameSplitted[1]));
    return nameSplitted.join("");

};

console.log(nameCode(robotName));