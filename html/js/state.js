class State {
  constructor(infectionsTotal, infectionsPerSecond) {
    this.infectionsTotal = infectionsTotal;
    this.infectionsPerSecond = infectionsPerSecond;
    this.buildings = [];
    this.shopItems = [];
    this.onUpdate = function () {};
    this.timer = setInterval(() => {
      this.addNewInfections();
    }, 100);
  }

  copyState(obj) {
    if (arguments[0])
      for (var prop in arguments[0]) this[prop] = arguments[0][prop];
  }

  increaseTotal(increment) {
    this.infectionsTotal += increment;
    this.onUpdate(this);
  }
  addNewInfections() {
    this.increaseTotal(this.infectionsPerSecond / 10);
  }
  buyBuilding(building) {
    if (this.infectionsTotal >= building.currentPrice) {
      this.increaseTotal(-1 * building.currentPrice);
      this.buildings.push(building.id);
      this.updateInfectionRate();
      let ui = new Ui();
      ui.renderCenter(this);
      let shopItem = this.shopItems.find((item) => item.id === building.id);
      shopItem.currentPrice = Math.round(shopItem.currentPrice * 1.15);
      ui.fillShop(this);
    }
  }
  addShopItem(building) {
    if (!this.shopItems.includes(building)) {
      this.shopItems.push(building);
    }
  }
  updateInfectionRate() {
    let total = 0;
    this.buildings.forEach((item) => {
      let shopItem = this.shopItems.find((x) => x.id === item);
      total += shopItem.infectionRatePerSecond;
    });
    this.infectionsPerSecond = total;
  }
}
