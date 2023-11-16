const pn = prompt('Digite seu primeiro nome: ')
const sb = prompt('Digite seu sobrenome: ')
const cpe = prompt('Digite seu campo de estudo: ')
const adn = prompt('Digite o ano de seu nascimento: ')

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + pn + " " + sb +
    "\nCampo de estudo: " + cpe +
    "\nIdade: " + (2023 - adn)
)
