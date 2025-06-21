function info(word) {
    console.log(word + "!");
}


// function summa(a, b) {
//     let res = a + b;
//     console.log(res);
//     info(res)
// }
//
// summa(5, 7);

// function summa2 (arr) {
//     let sum2 = 0;
//     for (let i = 0; i < arr.length; i++)
//         sum2 += arr[i];
//
//     console.log(sum2);
// }
function summa2 (arr) {
    let sum2 = 0;
    for (const element of arr)
        sum2 += element;

    return sum2;
}

let array = [6, 8, 1];
let array_2 = [6, 8, 1, 7];

let res = summa2(array);
console.log("Результат", res);
summa2(array_2);
