class State {
    constructor(infectionsTotal, infectionsPerSecond) {
        this.infectionsTotal = infectionsTotal;
        this.infectionsPerSecond = infectionsPerSecond;
        this.buildings = [];
        this.shopItems = [];
        this.onUpdate = function () {}
        // Updates infections every 1/10 seconds.
        this.timer = setInterval(() => {
            this.addNewInfections();
        }, 100);
    }

    // Increase total infections and call onUpdate
    increaseTotal(increment) {
        this.infectionsTotal += increment;
        this.onUpdate(this);
    }

    // Adds the infections per second to current infections.
    addNewInfections() {
        this.increaseTotal(this.infectionsPerSecond / 10);
    }

    // Add item to buildings, increase shopItem price and add building to center.
    buyBuilding(building, ui) {
        for(let i = 0;  i < this.shopItems.length; i++) {
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

    // Adds building to shopItems if it is not there yet.
    addShopItem(building) {
        if(!this.shopItems.includes(building)) {
            this.shopItems.push(building);
        }
    }

    // Updates infections per second based on owned buildings.
    updateInfectionRate() {
        let total = 0;
        this.buildings.forEach(item => {
            total += item.infectionRatePerSecond;
        })
        this.infectionsPerSecond = total;
    }
}