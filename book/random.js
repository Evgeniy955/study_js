// Получаем случайное число от 0 (включительно) до 1 (не включительно)
const randomValue = Math.random(); // Например: 0.345678
console.log(randomValue);

// Получаем случайное целое число от 0 до 9
const randomInt0to9 = Math.floor(Math.random() * 10); // Например: 7
console.log(randomInt0to9);

// Получаем случайное целое число в диапазоне от min до max (включительно)
const min = 5;
const max = 15;
const randomIntInRange = Math.floor(Math.random() * (max - min + 1)) + min; // Например: 12
console.log(randomIntInRange);

// Math.floor() округляет число вниз до ближайшего целого
const value = 7.9;
const floored = Math.floor(value); // Результат: 7
console.log(floored);
