// Создаём массив имён
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

// Перебираем каждый элемент массива и выводим его в консоль
for (let name of names) {
    console.log(name);
}

console.log(" ");

// Создаём объект, описывающий автомобиль
let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
};

// Перебираем все свойства объекта car и выводим их значения в консоль
for (let prop in car) {
    console.log(car[prop]);
}

console.log(" ");


/**
 * Получает все ключи объекта `car` и выводит каждую пару "ключ: значение" в консоль.
 */
let arrKeys = Object.keys(car); // Массив всех ключей объекта car

for (let i = 0; i < arrKeys.length; i++) {
    // Перебирает массив ключей и выводит имя ключа и его значение
    console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
}

console.log(" ");

/**
 * Перебирает все значения объекта `car` и выводит каждое значение в консоль.
 */
for (let key of Object.values(car)) {
    console.log(key);
}

console.log(" ");

/**
 * Получает все пары ключ-значение объекта `car` в виде массива массивов
 * и выводит этот массив в консоль.
 * Каждый вложенный массив содержит пару [ключ, значение].
 */
let arrEntries = Object.entries(car);
console.log(arrEntries);

/**
 * Перебирает все пары ключ-значение объекта `car` и выводит каждую пару
 * в формате "ключ: значение" в консоль.
 */
for (const [key, value] of Object.entries(car)) {
    console.log(key, ":", value);
}

