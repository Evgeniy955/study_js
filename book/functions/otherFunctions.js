// Рекурсивная функция: выводит числа от nr до 0
function getRecursive(nr) {
    console.log(nr); // Выводим текущее значение
    if (nr > 0) {
        getRecursive(--nr); // Рекурсивно вызываем с уменьшенным значением
    }
}

getRecursive(3); // Пример вызова

/**
 * рекурсивная функция getRecursive(3) получена;
 *  рекурсивная функция getRecursive(2) получена;
 *     рекурсивная функция getRecursive(1) получена;
 *      рекурсивная функция getRecursive(0) получена;
 *      выполнение getRecursive(0) завершено;
 *     выполнение getRecursive(1) завершено;
 *  выполнение getRecursive(2) завершено;
 * выполнение getRecursive(3) завершено.
 */

// Рекурсивная функция с логированием начала и конца
function logRecursive(nr) {
    console.log("Started function:", nr); // Логируем начало
    if (nr > 0) {
        logRecursive(nr - 1); // Рекурсивный вызов
    } else {
        console.log("done with recursion"); // Базовый случай
    }
    console.log("Ended function:", nr); // Логируем завершение
}

logRecursive(3); // Пример вызова

// Вложенные функции: внутренняя функция имеет доступ к переменным внешней
function doOuterFunctionStuff1(nr) {
    console.log("Outer function"); // Внешняя функция
    doInnerFunctionStuff(nr); // Вызов внутренней функции

    function doInnerFunctionStuff(x) {
        console.log(x + 7); // Используем аргумент x
        console.log("I can access outer variables:", nr); // Доступ к nr из внешней области
    }
}

doOuterFunctionStuff1(2); // Пример вызова

// Еще один пример вложенных функций
function doOuterFunctionStuff(nr) {
    console.log("Outer function");
    doInnerFunctionStuff(nr);

    function doInnerFunctionStuff(x) {
        console.log(x + 7);
        console.log("I can access outer variables:", nr);
    }
}

doOuterFunctionStuff(2);

// Анонимная функция, присвоенная переменной
let functionVariable = function () {
    console.log("Not so secret though."); // Анонимная функция
};
functionVariable(); // Вызов анонимной функции

// Пример функции обратного вызова (callback)
function doFlexibleStuff(executeStuff) {
    executeStuff(); // Вызов переданной функции
    console.log("Inside doFlexibleStuffFunction."); // Дополнительный вывод
}

doFlexibleStuff(functionVariable); // Передаем анонимную функцию как callback

// Пример использования setTimeout: функция выполнится через 1 секунду
let youGotThis = function () {
    console.log("You're doing really well, keep coding!"); // Сообщение поддержки
};
setTimeout(youGotThis, 1000); // Задержка перед выполнением
