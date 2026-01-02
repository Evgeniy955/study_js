// Создаём массив с разными типами данных
let arr = ["grapefruit", 4, "hello", 5.6, true];

// Функция для вывода элемента и его индекса
function printStuff(element, index) {
    console.log("Printing stuff:", element, "on array position:", index);
}

// Для каждого элемента массива вызываем функцию printStuff
arr.forEach(printStuff);

// Новый массив с разными типами данных
let arr1 = ["squirrel", 5, "Tjed", new Date(), true];

// Функция проверяет, является ли элемент строкой
function checkString(element) {
    return typeof element === "string";
}

// Фильтруем только строки из массива arr1
let filterArr = arr1.filter(checkString);
// То же самое, но с использованием стрелочной функции
let filterArr1 = arr1.filter(element => typeof element === "string");
console.log(filterArr);
console.log(filterArr1);

// Проверяем, все ли элементы массива arr1 — строки
console.log(arr1.every(checkString)); // false
console.log(arr1.every(element => typeof element === "string")); // false
// Проверяем, все ли элементы отфильтрованного массива — строки
console.log(filterArr.every(checkString)); // true

// Массив чисел
const arr0 = [1, 2, 3, 4, 5];

// Проверяем, есть ли в массиве хотя бы одно чётное число
const hasEven = arr0.some(num => num % 2 === 0);
console.log(hasEven); // true

// Копируем элементы внутри массива с помощью copyWithin
arr = ["grapefruit", 4, "hello", 5.6, true];
arr.copyWithin(0, 3, 4);
console.log(arr); // [5.6, 4, "hello", 5.6, true]

arr.copyWithin(0, 3, 5);
console.log(arr); // [5.6, true, "hello", 5.6, true]

// Копируем элементы с позиции 3 до конца массива
let arr2 = ["grapefruit", 4, "hello", 5.6, true, false];
arr2.copyWithin(0, 3);
console.log(arr2); // [5.6, true, false, 5.6, true, false]

// Поиск подстроки "lo" в строке
let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos); // 17

// Поиск несуществующей подстроки возвращает -1
let notFound = searchStr.search("JavaScript");
console.log(notFound); // -1

// Создание подстрок с помощью slice
let str = "Create a substring";
let substr1 = str.slice(5); // с 5-го символа до конца
let substr2 = str.slice(0, 3); // с 0 по 3 символ (не включая 3)
console.log("1:", substr1);
console.log("2:", substr2);

// Замена подстроки "buddy" на "Pascal"
let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi);

// Преобразование строки к нижнему регистру и первая буква — заглавная
let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
console.log(first_capital);

// Проверка, начинается ли строка с "You"
let encouragement = "You are doing great, keep up the good work!";
let bool_start = encouragement.startsWith("You");
console.log(bool_start);

// Проверка, заканчивается ли строка на "Something else"
let bool_end = encouragement.endsWith("Something else");
console.log(bool_end);
