// && — И (AND): возвращает true, если оба операнда истинны.
//     Пример: true && false // false
// || — ИЛИ (OR): возвращает true, если хотя бы один операнд истинен.
//     Пример: true || false // true
// ! — НЕ (NOT): инвертирует значение (делает true из false и наоборот).
// Пример: !true // false??


// Оператор ?? (nullish coalescing operator) используется для возврата первого значения,
// которое не является null или undefined. Это полезно для задания значений по умолчанию.

// Арифметические операторы:
//
//
//     + — сложение
// - — вычитание
// * — умножение
// / — деление
// % — остаток от деления
// ** — возведение в степень
// Операторы сравнения:
//
//
//     == — сравнение по значению (нестрогое)
// === — строгое сравнение (по значению и типу)
// != — неравенство (нестрогое)
// !== — строгое неравенство
// > — больше
// < — меньше
// >= — больше или равно
// <= — меньше или равно
//
// x++ — постфиксный инкремент (увеличение на 1 после использования значения) он же Унарный оператор (один операнд
// ++x — префиксный инкремент (увеличение на 1 до использования значения)
// x-- — постфиксный декремент (уменьшение на 1 после использования значения)
// Пример:
let a = 5, b = 10;
console.log(a > 3 && b < 20); // true
console.log(a === 5 || b === 7); // true
console.log(!(a < b)); // false

let name = 'Yevhen'
let age = 35
let JavaScript = true
console.log(`Hello, my name is ${name}, I am ${age} years old and I can code`);
console.log('JavaScript:', JavaScript);


let nr = 2;
console.log(nr++); //добавляет при следующем вызове
console.log(nr);
console.log(++nr); // добавляет сразу

let cars = [
    {
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "black",
    },
    {
        model: "Picanto",
        make: "Kia",
        year: 2020,
        color: "red",
    },
    {
        model: "Peugeot",
        make: "208",
        year: 2021,
        color: "black",
    },
    {
        model: "Fiat",
        make: "Punto",
        year: 2020,
        color: "black",
    }
];

for (let car of cars) {
    if (car.color !== "black") {
        continue;
    }
    if (car.year >= 2020) {
        console.log("we could get this one:", car);
    }
}


for (const element of cars) {
    if (element.year >= 2020) {
        if (element.color === "black") {
            console.log("I have found my new car:", element);
            break;
        }
    }
}
