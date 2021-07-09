class Ui {
    constructor() {}
    async updateStatistics() {
        try {
            let responseTotal = await fetch("https://api-rki.provadis-it-ausbildung.de/germany");
            let responseDays = await fetch("https://api-rki.provadis-it-ausbildung.de/germany/history/deaths/1");

            let jsonTotal = await responseTotal.json();
            let jsonDays = await responseDays.json();

            let statsNewEl = document.getElementById("new_deaths");
            let statsTotalEl = document.getElementById("total_deaths");
            statsNewEl.innerText = jsonDays.data[0].deaths;
            statsTotalEl.innerText = jsonTotal.deaths;
        } catch (error) {
            statsNewEl.innerText = error.message;
            statsTotalEl.innerText = error.message;
        }
    }
    updateState(gameState) {
        let totalInfections = document.getElementById("infections_total");
        let gainInfections = document.getElementById("infections_ps");
        let title = document.getElementById("pageTitle");

        title.innerText = Math.round(gameState.infectionsTotal) + " Infections";
        totalInfections.innerText = Math.round(gameState.infectionsTotal);
        gainInfections.innerText = gameState.infectionsPerSecond.toFixed(1);
    }
    updateShop(building) {
        let icon = document.getElementById("buildingIcon");
        let name = document.getElementById("buildingName");
        let description = document.getElementById("buildingDescription");
        let info = document.getElementById("buildingInfo");

        icon.src = building.icon;
        name.innerText = building.name;
        description.innerText = building.description;
        info.innerHTML = "Price: " + building.basePrice + "<br />Gain: " + building.infectionRatePerSecond;
    }
    updateCenter(building) {
        let centerGame = document.getElementById("centerGame");
        let image = document.createElement("img");
        image.src = building.icon;
        image.setAttribute("width", "50px");
        centerGame.appendChild(image);
    }
}