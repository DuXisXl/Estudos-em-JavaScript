const baralho = []
let opcao = ""

do {
    opcao = prompt(
        "Cartas do Baralho: " + baralho.length +
        "\n1.Opção: Adicionar Cartas\n2.Opção: Puxar uma Cartas\n3.Opção: Sair"
    )

    switch (opcao) {
        case "1":
            const cartaNova = prompt("Qual e a carta: ")
            baralho.push(cartaNova)
            alert("Carta " + cartaNova + " adicionada com sucesso!")
            break
        case "2":
            const cartaPuxada = baralho.pop()
            if (!cartaPuxada) {
                alert("Não há nenhuma carta no baralho!")
            } else {
                alert("Você puxou a carta " + cartaPuxada)
            }
            break
        case "3":
            alert("Finalizando")
            break
        default:
            alert("Opção invalida!")
    }
} while (opcao !== "3")