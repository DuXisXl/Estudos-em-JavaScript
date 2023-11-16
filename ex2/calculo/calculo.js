const n1 = prompt("Digite o nome do personagem: ")
const p1 = parseFloat(prompt("Digite o poder de ataque do personagem: "))

const n2 = prompt("Digite o nome do personagem adversario: ")
let vida = parseFloat(prompt("Digite a quantidade de vida dele: "))
const def = parseFloat(prompt("Digite a quantidade de pontos de defesa: "))
const esc = prompt("Ele possui escudo? [S/N]: ")

let dano = 0

if (p1 > def && esc === 'Não'){
    dano = p1 - def
}else if (p1 > def && esc === 'Sim'){
    dano = (p1 - def) / 2
}

vida -= dano

alert(n1 + " causou " + dano + " pontos de dano em " + n2)
alert(
  n1 + "\nPoder de ataque: " + p1 + "\n\n" +
  n2 + "\nPontos de vida: " + vida +
  "\nPoder de defesa: " + def + "\nPossui escudo: " + esc
)