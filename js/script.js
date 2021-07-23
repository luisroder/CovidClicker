window.onload = function (event) {
    onInit();
};

function onInit() {
    // Define instance of State and Ui.
    let saveGame = new Savegame();
    let gameState = new State(saveGame);
    let ui = new Ui();

    // Define buildings.
    let descBat =
        "This little creature is a delicacy on the Wuhan market. It carries infectious diseases like CoVid-19.";
    let buildingBat = new Building(
        "../resource/bat_icon.png",
        "Wuhan Bat",
        descBat,
        15,
        0.2
    );

    // Add buildings to the shop.
    gameState.addShopItem(buildingBat);

    // Generate statistics.
    ui.updateStatistics();

    // Generate shop.
    ui.updateShop(gameState);

    // Update ui when state changes.
    gameState.onUpdate = function (state) {
        ui.updateState(state);
    };

    // Make main icon clickable.
    let mainIconEl = document.getElementById("main_icon");
    mainIconEl.addEventListener("click", function (event) {
        gameState.increaseTotal(1);
    });

    //  Add onclick funtionality to the about buttons.
    let btnAboutCc = document.getElementById("btn_about_cc");
    btnAboutCc.addEventListener("click", function (event) {
        alert(
            "Covid Clicker is an incremental/clicker game centered around the Corona Virus. This is just a project for fun and not to be taken very serious. Thanks for playing!"
        );
    });
    let btnAboutMe = document.getElementById("btn_about_me");
    btnAboutMe.addEventListener("click", function (event) {
        alert(
            "My name is Luis Roder and I am developing this game in my free time. I am new to developing web applications, so please be nice."
        );
    });
}