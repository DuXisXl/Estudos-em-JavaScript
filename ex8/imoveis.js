const imoveis = []
let escolha = ""

do {
    let casas = ""
    escolha = prompt(
        "Bem vindo(a) ao cadastro de Imóveis!\n" +
        "Numero de imoveis registrados: " + imoveis.length +
        "\n\nEscolha uma das opções: \n1.Opção: Adicionar um novo imovel. \n2.Opção: Ver imoveis registrados. \n3.Opção: Sair."
    )

    switch (escolha) {
        case "1":
            const imovel = {}
            imovel.nomeProprietario = prompt("Digite o nome do proprietario: ")
            imovel.quantidadeQuartos = prompt("Digite a quantidade de quartos: ")
            imovel.banheiros = prompt("Digite a quantidade de banheiros: ")
            imovel.garage = prompt("O imovel possui garagem?:")
            imoveis.push(imovel)
            alert("Imovél salvo com sucesso!")
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].nomeProprietario +
                    "\nQuartos: " + imoveis[i].quantidadeQuartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem: " + imoveis[i].garage
                )
            }
            break
        case "3":
            alert("Finalizando...")
            break
        default:
            alert("Opção invalida!")
            break
    }
} while (escolha !== "3")