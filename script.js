// 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести
//  в консоль результат 2^3 степени + 3 ^ 3 степени

function NumberCubed(numInput) {
  numInput = numInput ** 3;
  return numInput;
}

console.log(NumberCubed(2) + NumberCubed(3));

// 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение
//  задано неверно. Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль
//   текст "Размер заработной платы за вычетом налогов равен значение"

function Payroll(money) {
  money = money * 0.87;
  return money;
}
let moneyInput = Number(prompt("Введите размер заработной платы"));
if (!isNaN(parseFloat(moneyInput)) && isFinite(moneyInput)) {
  console.log(
    `Размер заработной платы за вычетом налогов равен ${Payroll(moneyInput)}`
  );
} else {
  alert("значение задано неверно");
}

// 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет
// максимальное значение среди этих чисел

function MaximumNumber(num1, num2, num3) {
  let maxNum = 0;
  if (num1 > num2) {
    maxNum = num1;
  } else {
    maxNum = num2;
  }
  if (maxNum > num3) {
    return maxNum;
  } else {
    maxNum = num3;
  }
  return maxNum;
}
let numA = Number(prompt("Введите число 1"));
let numB = Number(prompt("Введите число 1"));
let numC = Number(prompt("Введите число 1"));
console.log(MaximumNumber(numA, numB, numC));

// 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два
// числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение
// console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
// сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите
// внимание на разность, функция должна вычесть из большего числа меньшее, либо
// вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
// не нужно.

function SummNum(numberA, numberB) {
  let sum = numberA + numberB;
  return sum;
}

function Difference(numberA, numberB) {
  let difference = 0;
  if (numberA >= numberB) {
    difference = numberA - numberB;
  } else {
    difference = numberB - numberA;
  }
  return difference;
}

function Multiplication(numberA, numberB) {
  let multiplication = numberA * numberB;
  return multiplication;
}

function Division(numberA, numberB) {
  let division = numberA / numberB;
  return division;
}
console.log(SummNum(6, 2));
console.log(Difference(8, 10));
console.log(Multiplication(3, 5));
console.log(Division(27, 9));
