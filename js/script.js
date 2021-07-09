window.onload = function (event) {
    onInit();
}


function onInit() {
    let gameState = new State(0, 0);
    let ui = new Ui();
    let descBat = "This little creature is a delicacy on the Wuhan market. It carries infectious diseases like CoVid-19.";
    let buildingBat = new Building("../resource/bat_icon.png", "Wuhan Bat", descBat, 15, 0.2);
    //gameState.buyBuilding(buildingBat);
    ui.updateStatistics();
    ui.updateShop(buildingBat);
    gameState.onUpdate = function (state) {
        ui.updateState(state);
    }

    let mainIconEl = document.getElementById("main_icon");
    mainIconEl.addEventListener("click", function (event) {
        gameState.increaseTotal(1);
    });
    let btnBuy = document.getElementById("buyBat");
    btnBuy.addEventListener("click", function (event) {
        gameState.buyBuilding(buildingBat);
    });
    let btnAboutCc = document.getElementById("btn_about_cc");
    btnAboutCc.addEventListener("click", function (event) {
        alert("Covid Clicker is an incremental/clicker game centered around the Corona Virus. This is just a project for fun and not to be taken very serious. Thanks for playing!");
    });
    let btnAboutMe = document.getElementById("btn_about_me");
    btnAboutMe.addEventListener("click", function (event) {
        alert("My name is Luis Roder and I am developing this game in my free time. I am new to developing web applications, so please be nice.");
    });

}