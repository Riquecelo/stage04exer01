let num1 = Number(prompt("Insira o primeiro número:"))
let num2 = Number(prompt("Insira o segundo número:"))

let soma = num1 + num2
let sub = num1 - num2
let mult = num1 * num2
let rest = num1 % num2

alert(`A soma dos dois números é:  ${soma}`)
alert(`A subtração dos dois números é:  ${sub}`)
alert(`A multiplicação dos dois números é:  ${mult}`)
alert(`O resto da operação entre os números é:  ${rest}`)

if((soma % 2) == 0){
    alert(`O resultado da soma entre os números é par`)
}
if(num1 == num2){
    alert('Os números inseridos são iguais')
}else{
    alert('Os números são diferentes')
}