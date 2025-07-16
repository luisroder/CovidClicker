class CookieHandler {
  constructor() {}

  // Set a cookie
  setCookie(name, value, expirationDays) {
    // Check if value is an object, but not an array or null
    if (typeof value === 'object' && !Array.isArray(value) && value !== null)
      value = JSON.stringify(value);
    const d = new Date();
    d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
    // console.log('cookie');
  }

  // Get a Cookie by name
  getCookieByName(name) {
    let cookieName = name + '=';
    // console.log(cookieName);
    let decodedCookie = decodeURIComponent(document.cookie);
    // console.log(decodedCookie);
    let cookieArray = decodedCookie.split(';');
    cookieArray = cookieArray.map((x) => x.trim());
    // console.log(cookieArray);
    let rawCookie = cookieArray.find((x) => x.startsWith(cookieName));
    // console.log(rawCookie);
    if (rawCookie == undefined) return null;

    let cookieValue = rawCookie.substring(cookieName.length);
    return JSON.parse(cookieValue);
  }

  getGameState() {
    let gameState = new State();
    let gameStateCookie = this.getCookieByName('gameState');
    if (!gameStateCookie) return null;
    gameState.copyState(gameStateCookie);
    return gameState;
  }
}
