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
    buyBuilding(building, ui) {
        //if (this.infectionsTotal >= building.basePrice) {
        //    this.increaseTotal((-1) * (building.basePrice));
        //    this.buildings.push(building);
        //    this.updateInfectionRate();
        //    let ui = new Ui();
        //    ui.updateCenter(building);
        //}
        console.log(this.shopItems);
        console.log(this.shopItems.length);
        for(let i = 0; i++; i < this.shopItems.length) {
            console.log(this.shopItems[i]);
            console.log("test");

            if(this.shopItems[i].name == building.name && this.infectionsTotal >= this.shopItems[i].currentPrice){
                this.increaseTotal((-1) * (this.shopItems[i].currentPrice));
                this.buildings.push(building);
                this.updateInfectionRate();
                ui.updateCenter(building);
                this.shopItems[i].currentPrice *= 1.15;
                ui.updateShop(this);                
            }
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