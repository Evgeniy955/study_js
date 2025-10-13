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


let arrKeys = Object.keys(car);
for (let i = 0; i < arrKeys.length; i++) {
    console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
}
