// Проверяем день недели с помощью if...else if
let day = "Monday";

// Если день равен "Monday"
if (day === "Monday") {
    console.log("It's Monday");
// Если день равен "Tuesday"
} else if (day === "Tuesday") {
    console.log("It's Tuesday");
// Если день равен "Wednesday"
} else if (day === "Wednesday") {
    console.log("It's Wednesday");
// Если день не совпадает ни с одним из вариантов
} else {
    console.log("Unknown day");
}


// Проверяем день недели с помощью switch

switch (day) {
    // Если день равен "Monday"
    case "Monday":
        console.log("It's Monday");
        break;
    // Если день равен "Tuesday"
    case "Tuesday":
        console.log("It's Tuesday");
        break;
    // Если день равен "Wednesday"
    case "Wednesday":
        console.log("It's Wednesday");
        break;
    // Если день не совпадает ни с одним из вариантов
    default:
        console.log("Unknown day");
        break;
}

// Пример с несколькими условиями

let day = "Monday";
let isHoliday = true;

// Используем if...else if для проверки дня и праздника
if (day === "Monday" && isHoliday) {
    console.log("Понедельник и праздник");
} else if (day === "Monday") {
    console.log("Понедельник, но не праздник");
} else if (day === "Tuesday" && isHoliday) {
    console.log("Вторник и праздник");
} else if (day === "Tuesday") {
    console.log("Вторник, но не праздник");
} else {
    console.log("Другой день");
}

// Используем switch для проверки дня и вложенного условия праздника
switch (day) {
    case "Monday":
        if (isHoliday) {
            console.log("Понедельник и праздник");
        } else {
            console.log("Понедельник, но не праздник");
        }
        break;
    case "Tuesday":
        if (isHoliday) {
            console.log("Вторник и праздник");
        } else {
            console.log("Вторник, но не праздник");
        }
        break;
    default:
        console.log("Другой день");
        break;
}

// Проверяем день недели с помощью switch с несколькими case

let day = "Saturday";

switch (day) {
    // Если день равен "Monday" или "Tuesday"
    case "Monday":
    case "Tuesday":
        console.log("Начало недели");
        break;
    // Если день равен "Saturday" или "Sunday"
    case "Saturday":
    case "Sunday":
        console.log("Выходной");
        break;
    // Если день не совпадает ни с одним из вариантов
    default:
        console.log("Обычный день");
        break;
}
