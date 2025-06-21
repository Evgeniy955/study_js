// Использование Number()
const num1 = Number("123"); // 123

// Использование parseInt()
const num2 = parseInt("123", 10); // 123

// Использование parseFloat()
const num3 = parseFloat("123.45"); // 123.45

// Если строка содержит нечисловые символы
const num4 = Number("123abc"); // NaN
const num5 = parseInt("123abc", 10); // 123
const num6 = parseFloat("123.45abc"); // 123.45

// 1. String to Number
const num1 = Number("123"); // 123
const num2 = parseInt("123", 10); // 123
const num3 = parseFloat("123.45"); // 123.45

// 2. Number to String
const str1 = String(123); // "123"
const str2 = (123).toString(); // "123"

// 3. Boolean to String
const str1 = String(true); // "true"
const str2 = false.toString(); // "false"

// 4. String to Boolean
const bool1 = Boolean("true"); // true
const bool2 = Boolean(""); // false

// 5. Number to Boolean
const bool1 = Boolean(1); // true
const bool2 = Boolean(0); // false

// 6. Boolean to Number
const num1 = Number(true); // 1
const num2 = Number(false); // 0

// 7. String to Object
const str = '{"key":"value"}';
const obj = JSON.parse(str); // { key: "value" }

// 8. Object to String
const obj = {key: "value"};
const str = JSON.stringify(obj); // '{"key":"value"}'

// 9. String to Array
const str = "1,2,3";
const arr = str.split(","); // [ "1", "2", "3" ]

// 10. Array to String
const arr = [1, 2, 3];
const str = arr.join(","); // "1,2,3"

// 11. Date to String
const date = new Date();
const str = date.toISOString(); // "2023-03-10T10:00:00.000Z"

// 12. String to Date
const str = "2023-03-10T10:00:00.000Z";
const date = new Date(str); // Date object

// 13. Symbol to String
const sym = Symbol("description");
const str = sym.toString(); // "Symbol(description)"

// 14. String to Symbol
const str = "description";
const sym = Symbol(str); // Symbol(description)

// 15. Undefined to String
const str = String(undefined); // "undefined"

// 16. Null to String
const str = String(null); // "null"

