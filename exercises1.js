// Exercícios de fundamentos

//Exercício 1: Olá, Mundo!
// Crie um script que imprima "Olá, mundo!" no console

console.log("Olá, Mundo!")

// Exercício 2: Conversão de tipos
// Dado o valor de uma string "1234", converta-o em um número e exiba o tipo da variável no console.

const valueString = "1234"
let valueNumber = Number(valueString)

console.log(typeof valueNumber)

// Exercício 3: Manipulação de strings
// Dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase.

const incrivelJS = "JavaScript é incrível"
const qtdCaracteres = incrivelJS.length
const qtdPalavras = incrivelJS.split(' ').length

console.log(`Qtd de caracteres: ${qtdCaracteres}`)
console.log(`Qtd de palavras: ${qtdPalavras}`)

// Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.

const myArray = ["João", "Matheus", "César", "Junior", "Gui"]

for(let i=0; i < myArray.length; i++){
    console.log(myArray[i])
}

// Exercício 5: Funções, Strings e Math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30"). A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM"). Use o objeto Math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.

function convertHour(hour24) {
    // Separar hora e minuto
    const [hour, minute] = hour24.split(":")

    // Converter 24 horas para 12 horas - Fórmula= resto da divisão por 12 ou o valor 12 pois se o resto for 0 = falsy

    const convertHour12 = hour % 12 || 12
    const hour12 = `${convertHour12}:${minute}`

    
    // Periodo 
    periodo = "AM"

    if (hour > 12) {
        periodo = "PM"
    }

    // Exibir
    console.log(hour12, periodo)
    
}

convertHour("16:16")
