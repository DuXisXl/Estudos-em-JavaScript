const e1 = prompt("Informe o primeiro numero: ")
const e2 = prompt("Informe o segundo numero: ")

const x = parseFloat(e1)
const y = parseFloat(e2)

const soma = x + y
const subtacao = x - y
const multiplicacao = x * y
const divi = x / y

alert(
    "Os resultados são\n" +
    "\nSoma = " + soma +
    "\nSubtação = " + subtacao +
    "\nMultiplicação = " + multiplicacao +
    "\nDivisão = " + divi
)