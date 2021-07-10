class State {
    constructor(infectionsTotal, infectionsPerSecond) {
        this.infectionsTotal = infectionsTotal;
        this.infectionsPerSecond = infectionsPerSecond;
        this.buildings = [];
        this.shopItems = [];
        this.onUpdate = function () {}
        this.timer = setInterval(() => {
            this.addNewInfections();
        }, 100);

    }
    increaseTotal(increment) {
        this.infectionsTotal += increment;
        this.onUpdate(this);
    }
    addNewInfections() {
        this.increaseTotal(this.infectionsPerSecond / 10);
    }
    buyBuilding(building) {
        if (this.infectionsTotal >= building.basePrice) {
            this.increaseTotal((-1) * (building.basePrice));
            this.buildings.push(building);
            this.updateInfectionRate();
            let ui = new Ui();
            ui.updateCenter(building);
        }
    }
    addShopItem(building) {
        if(!this.shopItems.includes(building)) {
            this.shopItems.push(building);
        }
    }
    updateInfectionRate() {
        let total = 0;
        this.buildings.forEach(item => {
            total += item.infectionRatePerSecond;
        })
        this.infectionsPerSecond = total;
    }
}