const vagas = []

function listarVagas () {
    const vagasEmTexto = vagas.reduce((textofinal, vaga, indice) => {
        textofinal += indice + ". "
        textofinal += vaga.nome
        textofinal += " (" + vaga.candidatos.length + "candidatos)\n"
        return textofinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt("Informe um descrição para a vaga:")
    const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:")
  
    const confirmacao = confirm(
      "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )
  
    if (confirmacao) {
      const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
      vagas.push(novaVaga)
      alert("Vaga criada.")
    }
}

function exibirVaga() {
    const indice = prompt("Digite o indice da vaga: ")
    vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos:" + candidatosEmTexto
    )
}

function inscreverCandidato () {
    const candidato = prompt("Digite o nome do Canditado: ")
    const indice = prompt("Digite o indice da vaga: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
      )
    
    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Candidato inscrito com sucesso!")
    }
}

function exluirVaga () {
    const indice = prompt("Digite o indice da vaga a ser exluida: ")
    vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga exluida com sucesso!")
    }
}

function exibirMenu() {
    const opcao = prompt(
      "Cadastro de Vagas de Emprego" +
      "\n\nEscolha uma das opções" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) candidato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
    )
    return opcao
  }

  function executar () {
    let opcao = ""

    do{
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                exluirVaga()
            case "6":
                alert("Saindo do programa!!")
                break
            default:
                alert("Opção Invalida!")
        }
    }while (opcao !== "6");
  }

  executar()