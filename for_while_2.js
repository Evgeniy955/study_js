for (let i = 10; i <=20; i+= 2) {
    if (i > 15)
        break;
    console.log(i)
}

console.log(" ")

for (let p = 10; p <=20; p++) {
    if (p % 2 === 0)
        continue
    console.log(p)
}

let arr = [5, 7, 3, 8, 9, "Hello"];
for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
    console.log("Элемент " + (i+ 1) + ": " + arr[i]);
}

let arr = [5, 7, 3, 8, 9, "Hello"];
arr.forEach((item, i, array) => {
    if (typeof item === "number") {
        array[i] = item * 2;
    }
    console.log("Элемент " + (i + 1) + ": " + array[i]);
});

let arr2 = [5, 7, 3, 8, 9, "Hello"];
let index = 0;
for (let value of arr2) {
    if (typeof value === "number") {
        arr2[index] = value * 2;
    }
    console.log("Элемент " + (index + 1) + ": " + arr2[index]);
    index++;
}
