const nome = prompt("Digite seu nome: ")
let esc = prompt("Você ja visitou alguma cidade?: ")

let city = ""
let cityn = 0

while (esc === "Sim"){
    city += prompt("Digite o nome da cidade: ") + " "
    cityn += 1
    esc = prompt("Você visitou mais alguma cidade?:")
}

alert(
    "No fim você visitou uma quantidade de" + " " + cityn + " cidades" +
    "\nSendo elas " + city +
    "\nMuito obrigado por compartilhar isso " + nome
)