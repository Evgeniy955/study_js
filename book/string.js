let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2);


// Определяем строковую переменную
let str = "Introduction to JavaScript.";

// Выводим длину строки
console.log(str.length);

// Преобразуем строку в верхний регистр и выводим
console.log(str.toUpperCase());

// Преобразуем строку в нижний регистр и выводим
console.log(str.toLowerCase());

// Проверяем, содержит ли строка "Java", и выводим результат
console.log(str.includes("Java"));

// Проверяем, начинается ли строка с "Intro", и выводим результат
console.log(str.startsWith("Intro"));

// Проверяем, заканчивается ли строка на "Script", и выводим результат
console.log(str.endsWith("Script"));

// Заменяем "JavaScript" на "JS" и выводим результат
console.log(str.replace("JavaScript", "JS"));

// Заменяем все вхождения "i" на "1" и выводим результат
console.log(str.replaceAll("i", "1"));

// Получаем подстроку с 0 по 12 индекс и выводим
console.log(str.slice(0, 12));

if (str.endsWith(".")) {
    str = str.slice(0, -1);
}
console.log(str);
console.log(str[0]);

let s1 = "Hello ";
let s2 = "JavaScript";
let result = s1.concat(s2);
console.log(result) // "Hello JavaScript";
