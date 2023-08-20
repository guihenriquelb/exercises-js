//Variáveis e tipos de dados: Escreva um programa que declare duas variáveis, “nome” e “idade”, e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”.

let nome = "Guilherme"
let idade = 21

console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`)

//Operadores: Crie um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números.

let num1 = prompt("Digite o primeiro número:")
let num2 = prompt("Digite o segundo número:")

num1 = Number(num1)
num2 = Number(num2)

console.log(`A soma é: ${num1 + num2}`)
console.log(`A Subtração é: ${num1 - num2}`)
console.log(`A multiplicação é: ${num1 * num2}`)
console.log(`A divisão é: ${num1 / num2}`)

//Condições: Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.

let idadeM = prompt("Qual sua idade?")
idadeM = Number(idadeM)

if (idadeM >= 18) {
 console.log("Maior de idade")
} else {
 console.log("Menor de idade")
}


//Loops: Crie um loop que imprima todos os números de 1 a 100.

for(let i = 0; i <= 100; i++){
 console.log(i)
}

//Funções: Escreva uma função que aceite dois números como argumentos e retorne sua soma.

function soma(n1, n2){
 console.log(n1 + n2)
}

soma(17, 17)

//Arrays: Escreva um programa que declare um array de suas frutas favoritas e imprima cada fruta na lista usando um loop.

const frutas = ["Maçã", "Laranja", "Abacate"]

for(let i = 0; i <=2; i++){
    console.log(frutas[i])
}

//Objetos: Crie um objeto que represente um livro, com propriedades para título, autor e número de páginas. Imprima cada propriedade no console.

const livros = {
    nome: "Harry Potter",
    autor: "J.K Rowling"
}

console.log(livros.nome)
console.log(livros.autor)

//Eventos DOM: Crie uma página HTML com um botão que, quando clicado, exiba um alerta que diga “Você clicou no botão!”.

function alertButton(){
    alert("Você clicou no botão!")
}

