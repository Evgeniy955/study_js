let arr = ["grapefruit", 4, "hello", 5.6, true];

function printStuff(element, index) {
    console.log("Printing stuff:", element, "on array position:", index);
}

arr.forEach(printStuff);

let arr1 = ["squirrel", 5, "Tjed", new Date(), true];

function checkString(element) {
    return typeof element === "string";
}

let filterArr = arr1.filter(checkString);
console.log(filterArr);

console.log(arr1.every(checkString));

arr = ["grapefruit", 4, "hello", 5.6, true];
arr.copyWithin(0, 3, 4);
console.log(arr); // [5.6, 4, "hello", 5.6, true]

arr.copyWithin(0, 3, 5);
console.log(arr); // [5.6, true, "hello", 5.6, true]

let arr2 = ["grapefruit", 4, "hello", 5.6, true, false];
arr2.copyWithin(0, 3);
console.log(arr2); // [5.6, true, false, 5.6, true, false]

