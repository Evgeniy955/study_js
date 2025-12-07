/**
 * Стрелочная функция, выводит переданный аргумент в консоль.
 * @param {*} x - Любое значение для вывода.
 */
let doingArrowStuff = x => console.log(x);
// Пример вызова:
doingArrowStuff("Great!");

/**
 * Стрелочная функция, выводит сумму двух чисел.
 * @param {number} x - Первое число.
 * @param {number} y - Второе число.
 */
let addTwoNumbers = (x, y) => console.log(x + y);
// Пример вызова:
addTwoNumbers(5, 3);

/**
 * Стрелочная функция, выводит "hi" в консоль.
 */
let sayHi = () => console.log("hi");
sayHi()

console.log("------------------")

/**
 * Массив строк.
 * @type {string[]}
 */
const arr = ["squirrel", "alpaca", "buddy"];
// Выводит каждый элемент массива в консоль.
arr.forEach(e => console.log(e));

// SPREAD

/**
 * Массив строк для демонстрации spread-оператора.
 * @type {string[]}
 */
let spread = ["so", "much", "fun"];
/**
 * Новый массив, объединяющий строки с использованием spread-оператора.
 * @type {string[]}
 */
let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
console.log(message);

/**
 * Функция, выводит сумму двух чисел.
 * @param {number} x - Первое число.
 * @param {number} y - Второе число.
 */
function addTwoNumbers1(x, y) {
    console.log(x + y);
}

/**
 * Массив чисел для передачи в функцию через spread.
 * @type {number[]}
 */
let arr1 = [5, 9];
addTwoNumbers1(...arr1);

/**
 * Функция, выводит сумму четырёх чисел.
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} a
 */
function addFourNumbers2(x, y, z, a) {
    console.log(x + y + z + a);
}

/**
 * Массивы чисел для передачи в функцию через spread.
 * @type {number[]}
 */
let arr2 = [5, 9];
let arr3 = [6, 7];
addFourNumbers2(...arr2, ...arr3); // addFourNumbers(5, 9, 6, 7);

// REST

/**
 * Функция, принимает любое количество аргументов и выводит их сумму.
 * @param {...number} args - Любое количество чисел.
 */
function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    console.log(sum);
}

sumAll(2, 3, 4)
