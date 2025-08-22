window.onload = function (event) {
  onInit();
};

function onInit() {
  let cookieHandler = new CookieHandler();
  let gameStateCookie = cookieHandler.getGameState();

  let gameState = new State(500, 0);

  if (gameStateCookie === null) {
    let descBat =
      'This little creature is a delicacy on the Wuhan market. It carries infectious diseases like CoVid-19.';
    let buildingBat = new Building(
      0,
      '../resource/buildings/bat_icon.png',
      'Wuhan Bat',
      descBat,
      15,
      0.2
    );
    let descBat2 =
      'This little fucker thougt it was funny to go skiing in a CoVid-19 hotspot. He became a superspreader.';
    let buildingBat2 = new Building(
      1,
      '../resource/buildings/ski_icon.png',
      'Ischgl Skier',
      descBat2,
      150,
      10
    );

    gameState.addShopItem(buildingBat);
    gameState.addShopItem(buildingBat2);
  } else {
    gameState = gameStateCookie;
  }

  let ui = new Ui();
  ui.renderCenter(gameState);
  ui.updateStatistics();
  ui.fillShop(gameState);
  gameState.onUpdate = function (state) {
    ui.updateState(state);
  };

  let mainIconEl = document.getElementById('main_icon');
  mainIconEl.addEventListener('click', function (event) {
    gameState.increaseTotal(1);
  });
  let btnAboutCc = document.getElementById('btn_about_cc');
  btnAboutCc.addEventListener('click', function (event) {
    alert(
      'Covid Clicker is an incremental/clicker game centered around the Corona Virus. This is just a project for fun and not to be taken very serious. Thanks for playing!'
    );
  });
  let btnAboutMe = document.getElementById('btn_about_me');
  btnAboutMe.addEventListener('click', function (event) {
    alert(
      'My name is Luis Roder and I am developing this game in my free time. I am new to developing web applications, so please be nice.'
    );
  });
}
