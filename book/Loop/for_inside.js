let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
    arrOfArrays.push([]);
    for (let j = 0; j < 7; j++) {
        arrOfArrays[i].push(j);
    }
}

console.log(arrOfArrays);
console.table(arrOfArrays);

let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++) {
    names[i] = "hello " + names[i];
}

console.log(names);


let names2 = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names2.length; i++) {
    if (names2[i].startsWith("M")) {
        delete names2[i];
        continue;
    }
    names2[i] = "hello " + names2[i];
}
console.log(names2);

let names3 = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names3.length; i++) {
    if (names3[i].startsWith("M")) {
        names3.splice(i, 1);
        continue;
    }
    names3[i] = "hello " + names3[i];
}
console.log(names3);
