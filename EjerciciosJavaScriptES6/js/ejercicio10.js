document.querySelector("#envio").addEventListener("click", () => {
    const prime = document.querySelector("#prime");
    let numb = parseInt(document.querySelector("#number").value);
    if (numb == 0 || numb == 1 || numb == 4) return prime.innerHTML = "No primo";
    for (let i = 2; i < (numb / 2); i++) {
        if (numb % i == 0) return prime.innerHTML = "No primo";
    }
    return prime.innerHTML = "Es primo";
});

document.querySelector("#envio").addEventListener("click", () => {
    prime.innerHTML == "Es primo" ? prime.style.color = "red" : prime.style.color = "blue";
});
