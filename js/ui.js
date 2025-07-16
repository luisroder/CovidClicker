class Ui {
  constructor() {}
  async updateStatistics() {
    try {
      let responseTotal = await fetch(
        'https://api-rki.provadis-it-ausbildung.de/germany'
      );
      let responseDays = await fetch(
        'https://api-rki.provadis-it-ausbildung.de/germany/history/deaths/1'
      );

      let jsonTotal = await responseTotal.json();
      let jsonDays = await responseDays.json();

      let statsNewEl = document.getElementById('new_deaths');
      let statsTotalEl = document.getElementById('total_deaths');
      statsNewEl.innerText = jsonDays.data[0].deaths;
      statsTotalEl.innerText = jsonTotal.deaths;
    } catch (error) {
      statsNewEl.innerText = error.message;
      statsTotalEl.innerText = error.message;
    }
  }
  updateState(gameState) {
    let totalInfections = document.getElementById('infections_total');
    let gainInfections = document.getElementById('infections_ps');
    let title = document.getElementById('pageTitle');

    title.innerText = Math.round(gameState.infectionsTotal) + ' Infections';
    totalInfections.innerText = Math.round(gameState.infectionsTotal);
    gainInfections.innerText = gameState.infectionsPerSecond.toFixed(1);

    let cookieHandler = new CookieHandler();
    cookieHandler.setCookie('gameState', gameState, 365);
  }
  //Add all items to the shopTable
  fillShop(gameState) {
    let shopTable = document.getElementById('shopTable');
    shopTable.innerHTML = '';
    gameState.shopItems.forEach((building) => {
      let tr = document.createElement('tr');
      tr.id = building.name;
      shopTable.appendChild(tr);
      tr = document.getElementById(building.name);

      let tdIcon = document.createElement('td');
      tdIcon.id = building.name + ' Icon';
      tr.appendChild(tdIcon);
      tdIcon = document.getElementById(building.name + ' Icon');
      let icon = document.createElement('img');
      icon.src = building.icon;
      icon.style.width = '50px';
      tdIcon.appendChild(icon);

      let tdName = document.createElement('td');
      tdName.innerText = building.name;
      tr.appendChild(tdName);

      let tdDesc = document.createElement('td');
      tdDesc.innerText = building.description;
      tr.appendChild(tdDesc);

      let tdInfo = document.createElement('td');
      tdInfo.innerHTML =
        'Price: ' +
        building.currentPrice +
        '<br />Gain: ' +
        building.infectionRatePerSecond;
      tr.appendChild(tdInfo);

      let tdBtn = document.createElement('td');
      tdBtn.id = building.name + ' Button';
      tr.appendChild(tdBtn);

      tdBtn = document.getElementById(building.name + ' Button');
      let btn = document.createElement('button');
      btn.innerText = 'Buy';
      btn.addEventListener('click', function (event) {
        gameState.buyBuilding(building);
      });
      tdBtn.appendChild(btn);
    });
  }

  // Render the middle part of the website
  renderCenter(gameState) {
    let centerGame = document.getElementById('centerGame');
    centerGame.innerHTML = '';
    console.log(gameState);
    gameState.buildings.forEach((building) => {
      let shopItem = gameState.shopItems.find((x) => x.id === building);
      this.appendBuildingCenter(centerGame, shopItem);
    });
  }

  // Append a bought building to the center screen
  appendBuildingCenter(element, building) {
    let image = document.createElement('img');
    image.src = building.icon;
    image.setAttribute('width', '50px');
    element.appendChild(image);
  }
}
