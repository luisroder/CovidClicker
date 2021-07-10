window.onload = function (event) {
    onInit();
}


function onInit() {
    let gameState = new State(0, 0);
    let ui = new Ui();
    let descBat = "This little creature is a delicacy on the Wuhan market. It carries infectious diseases like CoVid-19.";
    let buildingBat = new Building("../resource/bat_icon.png", "Wuhan Bat", descBat, 15, 0.2);
    let descBat2 = "This little creature is a delicacy on the Wuhan market. It2 carries infectious diseases like CoVid-19.";
    let buildingBat2 = new Building("../resource/textile_1.jpg", "Wuhan Bat2", descBat2, 150, 10);
    
    gameState.addShopItem(buildingBat);
    gameState.addShopItem(buildingBat2);

    ui.updateStatistics();
    ui.fillShop(gameState);
    gameState.onUpdate = function (state) {
        ui.updateState(state);
    }

    let mainIconEl = document.getElementById("main_icon");
    mainIconEl.addEventListener("click", function (event) {
        gameState.increaseTotal(1);
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