const generateRandomString = () => {
    const characters = 'BCDFGHJKLMNPQRSTVWXZ';
    const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
    const randomChar2 = characters.charAt(Math.floor(Math.random() * characters.length))
    const randomNumber = (numero1 = 1, numero2 = 9) => Math.floor(Math.random() * (numero2 - numero1) + numero1);
    var result = [randomChar, randomChar2, randomNumber(), randomNumber(), randomNumber()];
    return result.join("");
  };

console.log(generateRandomString());