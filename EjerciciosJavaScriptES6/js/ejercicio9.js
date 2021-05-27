const itsPrime = numb => {
    if (numb == 0 || numb == 1 || numb == 4) return "No es primo";
    for (let i = 2; i < (numb / 2); i++) {
        if (numb % i == 0) return "No es primo";
    }
    return "Es primo";
};

console.log(itsPrime(15));
console.log(itsPrime(7));
console.log(itsPrime(16));
console.log(itsPrime(47));
console.log(itsPrime(17));
