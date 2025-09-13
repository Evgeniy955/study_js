// let date = new Date()
//
// console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate())
//
// let arr = [1, 2, 3, 4, 5]
//
// console.log(arr.join("|||"));
// console.log(arr.toSorted());
//
let arr_2 = [12, 42, 3, 41, 5]

let stroka = arr_2.toReversed().join(", ");
console.log(arr_2.toReversed().join(", "));
console.log(stroka.split(","));


// Создание объекта
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Доступ к свойствам
console.log(person); // { name: 'Alice', age: 30, city: 'New York' }
console.log(person.name); // Alice
console.log(person["age"]); // 30

// Изменение свойств
person.age = 31;
person["age"] = 32; // Литеральный синтаксис
person.city = "Boston";

// Добавление нового свойства
person.job = "Developer";

// Удаление свойства
delete person.city;

// Перебор всех свойств объекта
for (const key in person) {
    console.log(key + ": " + person[key]);
}

// Получение всех ключей и значений объекта
console.log(Object.keys(person)); // [ 'name', 'age', 'job' ]
console.log(Object.values(person)); // [ 'Alice', 31, 'Developer' ]
