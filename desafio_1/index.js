let firstNumber = prompt("Insira o primeiro número:");
let secondNumber = prompt("Insira o segundo número:");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const rest = firstNumber % secondNumber;

alert("A soma dos dois números é:"  + sum);
alert("A subtração dos dois números é:"  + sub);
alert("A multiplicação dos dois números é:"  + multi);
alert("A divsão dos dois números é:"  + div);
alert("O resto da divisão dos dois número é:"  + rest);

let evenOrOdd;

if (rest == 0) {
  alert(" a soma dos dois números é par" + sum);
} else {
  alert(" a soma dos dois números é impar" + sum);
}

let equality;

if (firstNumber == secondNumber) {
  alert(" os dois números inseridos são iguais");
} else {
  alert(" os dois números inseridos são diferentes");
}
