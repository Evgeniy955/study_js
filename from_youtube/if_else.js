// Пример проверки числа
let number = 15;

// Проверяем, равно ли число 10
if (number === 10) {
    console.log("Число равно 15");
} else {
    console.log("Число не равно 15");
}

// Пример проверки оценки
let score = 75;

// Проверяем диапазон оценки
if (score >= 90) {
    console.log("Отлично");
} else if (score >= 70) {
    console.log("Хорошо");
} else if (score >= 50) {
    console.log("Удовлетворительно");
} else {
    console.log("Плохо");
}

// Пример тернарного оператора для возраста
let age = 17.5;
// Если возраст больше или равен 18, доступ разрешен, иначе запрещен
// Тернарный оператор
let access = age >= 18 ? "Доступ разрешен" : "Доступ запрещен";
console.log(access); // Выводит: Доступ запрещен

// Проверка оценки с использованием !==
let score2 = 70;

// Если оценка больше или равна 90
if (score2 >= 90) {
    console.log("Отлично");
// Если оценка не равна 70
} else if (score2 !== 70) {
    console.log("Хорошо");
// Если оценка равна 70
} else {
    console.log("Плохо");
    console.log(score2);
}

// Пример switch-case для строки
let stroka = "Hello";

// Проверяем значение переменной stroka
switch (stroka) {
    case "4":
        console.log("Переменная равна 4");
        break;
    case "45":
        console.log("Переменная равна 45");
        break;
    case "Hello":
        // исполняемый код
        console.log("Переменная равна Hello");
        break;
    default:
        // исполняемый код, если совпадения не найдены
        console.log("Default");
        break;
}
