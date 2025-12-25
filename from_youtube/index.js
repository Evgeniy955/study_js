function converter(miles) {
    return (miles * 1.60934).toFixed(4);
}

console.log(`Расстояние 130 миль, равно ${converter(130)} кm.`);
