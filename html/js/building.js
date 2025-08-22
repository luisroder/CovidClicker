class Building {
  constructor(id, icon, name, description, basePrice, infectionRatePerSecond) {
    this.id = id;
    this.icon = icon;
    this.name = name;
    this.description = description;
    this.basePrice = basePrice;
    this.currentPrice = basePrice;
    this.infectionRatePerSecond = infectionRatePerSecond;
  }
}
