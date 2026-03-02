try {
    // Код, который может вызвать ошибку
    let result = someFunctionThatMightThrow();
    console.log("Результат:", result);
} catch (error) {
    // Обработка ошибки
    console.error("Произошла ошибка:", error);
    // Дополнительные действия, например:
    //  - logError(error);
    //  - displayErrorMessage("Произошла непредвиденная ошибка.");
} finally {
    // Этот код будет выполнен всегда
    console.log("Блок finally.");
}

// Пример с использованием throw:
// Функция проверяет возраст и выбрасывает разные ошибки в зависимости от ситуации.
function checkAge(age) {
    if (typeof age !== 'number') {
        // Выбрасываем TypeError, если тип неверный
        throw new TypeError('Возраст должен быть числом');
    }
    if (age < 0) {
        // Выбрасываем RangeError для недопустимого диапазона
        throw new RangeError('Возраст не может быть отрицательным');
    }
    if (age < 18) {
        // Выбрасываем обычную ошибку для случая, когда возраст меньше требуемого
        throw new Error('Доступ запрещен: пользователю меньше 18 лет');
    }
    return true; // Возраст прошел проверку
}

try {
    // Попробуем проверить возраст — измените значение для тестов
    checkAge(15);
    console.log('Доступ разрешен');
} catch (err) {
    // Разделяем обработку по типам ошибок
    if (err instanceof TypeError) {
        console.error('TypeError:', err.message);
    } else if (err instanceof RangeError) {
        console.error('RangeError:', err.message);
    } else if (err instanceof Error) {
        console.error('Error:', err.message);
    } else {
        // На случай, если было выброшено что-то нетипичное
        console.error('Неизвестная ошибка:', err);
    }
} finally {
    console.log('Проверка возраста завершена.');
}
