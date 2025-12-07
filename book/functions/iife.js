// Классический синтаксис IIFE: функция вызывается сразу после определения.
(function () {
    console.log("IIFE!");
})();

// Стрелочная функция как IIFE: также вызывается немедленно.
(() => {
    console.log("run right away");
})();

// Пример IIFE с передачей аргумента.
(function (name) {
    console.log("Hello, " + name + "!");
})("Alice");

// IIFE, возвращающее значение и сохраняющее его в переменной.
const result = (function () {
    return 42;
})();
console.log("Result from IIFE:", result);

// IIFE для создания приватной области видимости.
const counter = (function () {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log("Count:", count);
        }
    };
})();
counter.increment();
counter.increment();
