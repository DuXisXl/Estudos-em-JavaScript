c1 = prompt("Digite o Nome do primeiro carro")
c1v = prompt("Digite sua velocidade: ")
cr1 = c1 + ' ' + c1v

c2 = prompt("Digite o nome do segundo carro: ")
c2v = prompt("Digite sua velocidade: ")
cr2 = c2 + ' ' + c2v

if (c1v > c2v){
    alert(
        "O carro" + cr1 + "KM/H" +
        "Sendo mais rapido e ganhou"
    )
}else if (c1v == c2v){
    alert("Ambos os carros estavam na mesma velocidade!")
}else{
    alert(
        "O carro 2: " + cr2 + "KM/H" +
        "Sendo mais rapido entao ganhou"
    )
}