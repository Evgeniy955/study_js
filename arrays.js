let arr = [
    [5, true, "stroka", 5.7, 0, -100],
    [1, 2, 3, 4, "Hello"]
];
arr[3] = "word";
console.log(arr.length)
console.log(arr)
console.log(arr[1][4])

let arr1 = [1, 2, 3, 4, 5];  // ✅ Самый популярный способ
let arr2 = new Array(5);  // ❌ Не рекомендуется (создаёт пустой массив длины 5)
let arr3 = Array.of(5);   // ✅ Создаёт массив `[5]`
let arr4 = [];  // Пустой массив

let fruits = ["🍎", "🍌", "🍊"];
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // 🍊

console.log(fruits[10]); // undefined


let numbers = [1, 2, 3];

// Добавление элементов
numbers.push(4); // Добавляет в конец → [1, 2, 3, 4]
numbers.unshift(0); // Добавляет в начало → [0, 1, 2, 3, 4]

// Удаление элементов
numbers.pop(); // Удаляет последний элемент → [0, 1, 2, 3]
numbers.shift(); // Удаляет первый элемент → [1, 2, 3]

// Обход массива
// 📌 forEach (выполняет функцию для каждого элемента)
let colors = ["red", "green", "blue"];
colors.forEach((color, index) => {
    console.log(`Цвет ${index}: ${color}`);
});

// Проверка наличия элементов
let items = ["apple", "banana", "cherry"];
console.log(items.includes("banana")); // true
console.log(items.indexOf("cherry")); // 2
console.log(items.indexOf("grape")); // -1 (нет в массиве)


let numbers0 = [4, 2, 9, 1];
numbers0.sort(); // По умолчанию сортирует как строки → [1, 2, 4, 9]
numbers0.sort((a, b) => a - b); // Числовая сортировка → [1, 2, 4, 9]
