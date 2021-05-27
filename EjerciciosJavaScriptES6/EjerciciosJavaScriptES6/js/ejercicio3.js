function counterChar(string) {
    debugger;
    const stringNoSpaces = string.replace(/\s/g, "");
    const stringLowered = stringNoSpaces.toLowerCase(); 
    var count = {};
    stringLowered.split("").forEach(s => {
        count[s] ? count[s]++ : count[s] = 1;        
    });
    return count;
}
console.log(counterChar("Hola Mundo"));
console.log(counterChar("Que lo que mi loco"))