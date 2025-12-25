// Создание двумерного массива (матрицы 3x3)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Доступ к элементу массива (второй ряд, третий столбец)
console.log(matrix[1][2]); // 6

// Изменение значения элемента (первый ряд, первый столбец)
matrix[0][0] = 10;

// Перебор всех элементов двумерного массива
for (const row of matrix) {
    for (const value of row) {
        console.log(value);
    }
}

// Creating a three-dimensional array (3x2x2)
const threeDimArray = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ],
    [
        [9, 10],
        [11, 12]
    ]
];
// Accessing an element (second block, first row, second column)
console.log(threeDimArray[1][0][1]); // 6

// Перебор всех элементов трехмерного массива
for (const plane of threeDimArray) {
    for (const row of plane) {
        for (const value of row) {
            console.log(value);
        }
    }
}

let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];
console.log(arrOfArrays[1][2]) // 6
