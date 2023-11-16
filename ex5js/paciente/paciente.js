let fila = []
let opcao = ""

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + " - " + fila[i] + "\n"
    }

    opcao = prompt(
        "Pacientes:\n" + pacientes +
        "\nEsolha uma Opção: \n1.Opção: Novo Paciente\n2.Opção: Consultar paciente\n3.Opção: Sair"
    )
    switch (opcao) {
        case "1":
            const novoPaciente = prompt("Digite o nome do Paciente: ")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            alert(pacienteConsultado + " foi consultado e seu nome tirado da fila!")
            break
        case "3":
            alert("Encerando...")
            break
        default:
            alert("Opção Invalida...")
    }
} while (opcao !== "3")
