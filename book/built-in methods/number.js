// Преобразование строки в целое число
let str_int = "6";
let int_int = parseInt(str_int);
console.log("Type of ", int_int, "is", typeof int_int);

// Преобразование строки с плавающей точкой в целое число (дробная часть отбрасывается)
let str_float = "7.6";
let int_float = parseInt(str_float);
console.log("Type of", int_float, "is", typeof int_float);

// Преобразование бинарной строки в число (parseInt не распознает префикс 0b)
let str_binary = "0b101";
let int_binary = parseInt(str_binary);
console.log("Type of", int_binary, "is", typeof int_binary);

// Преобразование строки с плавающей точкой в число с плавающей точкой
let str_float1 = "7.6";
let float_float = parseFloat(str_float1);
console.log("Type of", float_float, "is", typeof float_float);

// Проверка, является ли значение целым числом
let x = 3;
let str = "integer";
console.log(Number.isInteger(x)); // true
console.log(Number.isInteger(str)); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger(2.4)); // false

// Округление числа до 3 знаков после запятой (возвращает строку)
let x1 = 1.23456;
let newX = x1.toFixed(3);
console.log(x1, newX);

// Форматирование числа с заданной точностью (всего 4 значащих цифры)
newX = x1.toPrecision(4);
console.log(newX);

// Нахождение максимального значения из списка чисел
let highest = Math.max(2, 56, 12, 1, 233, 4);
console.log(highest);

// Нахождение минимального значения из списка чисел
let lowest = Math.min(2, 56, 12, 1, 233, 4);
console.log(lowest);

// Округление чисел до ближайшего целого
let x2 = 6.78;
let y = 5.34;
console.log("X:", x, "becomes", Math.round(x2));
console.log("Y:", y, "becomes", Math.round(y));
