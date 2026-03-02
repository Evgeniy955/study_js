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
