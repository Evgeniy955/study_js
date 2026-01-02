// 1. Удаление дубликатов из массива имён
const arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
    "Laurence", "Mike", "Laurence", "Mike"]

// Функция возвращает true только для первого вхождения элемента
function checkList(element, index) {
    // indexOf возвращает индекс первого вхождения элемента
    return arr.indexOf(element) === index;
}

// Фильтруем массив, оставляя только уникальные значения
let filterArr = arr.filter(checkList);
console.log(filterArr); // ['Laurence', 'Mike', 'Larry', 'Kim', 'Joanne']

// 2. Применение метода map для удвоения значений массива
let arrMath = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Используем обычную функцию для удвоения каждого элемента
let mapped_arr = arrMath.map(function (x) {
    return x * 2;
});
console.log(mapped_arr); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// То же самое, но с использованием стрелочной функции
let mapped_arr1 = arrMath.map(x => x * 2);
console.log(mapped_arr1); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// 3. Замена гласных в строке на их индекс в массиве гласных
let javaScriptString = "I love JavaScript"
// Массив гласных букв
const charArray = ["a", "e", "i", "o", "u"];
// Проходим по каждому символу строки (в нижнем регистре)
for (let char of javaScriptString.toLowerCase()) {
    // Проверяем, является ли символ гласной
    if (charArray.includes(char)) {
        console.log(char); // Выводим найденную гласную
        // Заменяем все вхождения этой гласной на её индекс в массиве charArray
        javaScriptString = javaScriptString.replaceAll(char, String(charArray.indexOf(char)));
    }
}
console.log(javaScriptString); // Строка с заменёнными гласными

// 4. Преобразование строки: первая буква каждого слова — заглавная
let newStr = "thIs wiLl bE CapiTalized For eAch woRd";
let upperWords = []

// Функция, которая изменяет глобальный массив upperWords
function capitalizeWords(str) {
    // Приводим строку к нижнему регистру и разбиваем на слова
    let newArr = str.toLowerCase().split(" ")
    // Для каждого слова делаем первую букву заглавной и добавляем в upperWords
    newArr.forEach(word => upperWords.push(word.slice(0, 1).toUpperCase() + word.slice(1)));
    // Выводим результат
    console.log(upperWords.join(" "))
}

capitalizeWords(newStr);

// Более правильная функция, возвращающая новую строку
function capitalizeWords1(str) {
    return str
        .toLowerCase() // Приводим к нижнему регистру
        .split(" ") // Разбиваем на слова
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Делаем первую букву заглавной
        .join(" "); // Собираем обратно в строку
}

console.log(capitalizeWords1(newStr));
