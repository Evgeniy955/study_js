const arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
    "Laurence", "Mike", "Laurence", "Mike"]

function checkList(element, index) {
    return arr.indexOf(element) === index;
}

let filterArr = arr.filter(checkList);
console.log(filterArr);


let arrMath = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mapped_arr = arrMath.map(function (x) {
    return x * 2;
});
console.log(mapped_arr);


let mapped_arr1 = arrMath.map(x => x * 2);
console.log(mapped_arr1);
