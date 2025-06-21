// setInterval(my_func, 1000);
//
// let counter = 0;
//
// function my_func() {
//     counter++;
//     console.log(counter);
// }


// let counter_2 = 0;
//
// setInterval(function () {
//     counter_2++;
//     console.log("Прошло секунд: " + counter_2);
// }, 1500);


let id = setInterval(my_func, 1000);

let counter = 0;

function my_func() {
    counter++;
    console.log(counter);
    if (counter ===3)
        clearInterval(id);
}
