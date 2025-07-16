class Building {
  constructor(icon, name, description, basePrice, infectionRatePerSecond) {
    this.icon = icon;
    this.name = name;
    this.description = description;
    this.basePrice = basePrice;
    this.currentPrice = basePrice;
    this.infectionRatePerSecond = infectionRatePerSecond;
  }
}
