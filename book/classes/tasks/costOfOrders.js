class CalculatingTheCostOfOrders {
    #priceCucumber = 170;
    #priceBanana = 200;

    constructor(cucumber, banana) {
        this.countCucumber = cucumber;
        this.countBanana = banana;
    }

    getCommonPrice() {
        return (this.#priceCucumber * this.countCucumber) + (this.#priceBanana * this.countBanana);
    }

    get commonPrice() {
        return this.getCommonPrice();
    }

    set countOfProducts(products) {
        let args = products;
        this.countCucumber = args[0];
        this.countBanana = args[1];
    }
}

let order1 = new CalculatingTheCostOfOrders(2, 3);
console.log(order1.commonPrice);
order1.countOfProducts = [5, 4];
console.log(order1.commonPrice);
order1.countOfProducts = [0, 2];
console.log(order1.commonPrice);

