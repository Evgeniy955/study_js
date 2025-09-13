let booleans = [true, false, false, true];
console.log(booleans.length)

let purchases = ['Milk', 'Bread', 'Apples'];
console.log(purchases.length);
purchases[1] = 'Bananas';
console.log(purchases)

// Добавление элемента в конец массива
let favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
console.log(favoriteFruits); // ["grapefruit", "orange", "lemon", "tangerine"]

// Добавление элементов по индексу
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes); // ["circle", "triangle", "square", "trapezoid", "rectangle", "pentagon"]

// Замена элементов по индексу
let arrOfShapes1 = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes1.splice(2, 1, "square", "trapezoid");
console.log(arrOfShapes1); // ["circle", "triangle", "square", "trapezoid", "pentagon"]

// Удаление и замена элементов по индексу
let arrOfShapes2 = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes2.splice(2, 2, "square", "trapezoid");
console.log(arrOfShapes2); // ["circle", "triangle", "square", "trapezoid"]

// Объединение массивов
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7); // [1, 2, 3, 4, 5, 6]

// Объединение массива с отдельными элементами
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Копирование части массива
let arr9 = [1, 2, 3, 4, 5];
let partOfArr = arr9.slice(1, 4);
console.log(partOfArr); // [2, 3, 4]
arr9.slice(1, 4)
console.log(arr9) // [1, 2, 3, 4, 5]

// Удаление последнего элемента массива
let favoriteFruits1 = ["grapefruit", "orange", "lemon"];
favoriteFruits1.pop();
console.log(favoriteFruits1); // ["grapefruit", "orange"]

// Удаление первого элемента массива
let favoriteFruits2 = ["grapefruit", "orange", "lemon"];
favoriteFruits2.shift();
console.log(favoriteFruits2); // ["orange", "lemon"]

// Добавление элемента в начало массива
let favoriteFruits3 = ["grapefruit", "orange", "lemon"];
favoriteFruits3.unshift("tangerine");
console.log(favoriteFruits3); // ["tangerine", "grapefruit", "orange", "lemon"]

// Перебор массива с помощью forEach
let favoriteFruits4 = ["grapefruit", "orange", "lemon"];
favoriteFruits4.forEach((fruit, index) => {
    console.log(`Fruit ${index}: ${fruit}`);
});

// Поиск элемента в массиве
let favoriteFruits5 = ["grapefruit", "orange", "lemon"];
console.log(favoriteFruits5.includes("orange")); // true
console.log(favoriteFruits5.indexOf("lemon")); // 2
console.log(favoriteFruits5.indexOf("banana")); // -1 (нет в массиве)
console.log(favoriteFruits5.indexOf("orange", 2)); // -1 (нет в массиве после индекса 2)
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog); // 4 получаем последний индекс элемента "dog"

// Поиск элемента в массиве, если есть 6, то вернуть его
arr8 = [2, 6, 7, 8];
let findValue = arr8.find(function (e) {
    return e === 6
});
console.log(findValue);

// Сортировка массива
let favoriteFruits6 = ["grapefruit", "orange", "lemon"];
favoriteFruits6.sort();
console.log(favoriteFruits6); // ["grapefruit", "lemon", "orange"]

// Сортировка массива в обратном порядке
let favoriteFruits7 = ["grapefruit", "orange", "lemon"];
favoriteFruits7.reverse();
console.log(favoriteFruits7); // ["lemon", "orange", "grapefruit"]

// Преобразование массива в строку
let favoriteFruits8 = ["grapefruit", "orange", "lemon"];
let fruitsString = favoriteFruits8.join(", ");
console.log(fruitsString); // "grapefruit, orange, lemon"


arr8 = [2, 6, 7, 8];
let findValue = arr8.find(function (e) {
    return e === 6
});
console.log(findValue);
