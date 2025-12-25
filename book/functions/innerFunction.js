// Пример использования встроенной функции Math.max()
// Math.max возвращает наибольшее из переданных чисел
const maxNumber = Math.max(10, 5, 20, 8);
console.log("Максимальное число:", maxNumber); // 20

// Пример использования встроенной функции parseInt()
// parseInt преобразует строку в целое число
const num = parseInt("123");
console.log("Число после parseInt:", num); // 123

// Пример использования встроенной функции Array.isArray()
// Array.isArray проверяет, является ли объект массивом
const arr = [1, 2, 3];
console.log("Это массив?", Array.isArray(arr)); // true

// Пример использования встроенной функции JSON.stringify()
// JSON.stringify преобразует объект в строку JSON
const obj = {name: "Alice", age: 25};
const jsonString = JSON.stringify(obj);
console.log("JSON строка:", jsonString); // {"name":"Alice","age":25}

// Пример использования встроенной функции String.toUpperCase()
// toUpperCase возвращает строку в верхнем регистре
const greeting = "hello";
console.log("Верхний регистр:", greeting.toUpperCase()); // HELLO

// setTimeout вызывает функцию один раз через заданное количество миллисекунд
setTimeout(function () {
    console.log("This runs after 2 seconds");
}, 2000);

// setInterval вызывает функцию повторно через заданный интервал времени
let count = 0;
const intervalId = setInterval(function () {
    count++;
    console.log("Interval count:", count);
    if (count === 3) {
        clearInterval(intervalId); // Останавливаем интервал после 3 повторов
        console.log("Interval stopped");
    }
}, 1000);
