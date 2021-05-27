function upper() {
    var a = prompt("Inserta la palabra a convertir en mayusculas: ");
    var uppered = "";
    for(var x=0; x < a.length; x++) {
        uppered += String.fromCharCode(a.charCodeAt(x) > 96 && a.charCodeAt(x) < 123 ? a.charCodeAt(x) - 32 : a.charCodeAt(x));
    }
    return uppered;
}
console.log(upper());