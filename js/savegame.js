class Savegame {
    constructor() {}

    // Set a cookie.
    setCookie(key, value) {
        document.cookie = key + "=" + value;
    }

    // Get a cookie.
    getCookie(key) {
        key += "=";
        let cookieArray = document.cookie.split(";");
        for (let i = 0; i < cookieArray.length; i++) {
            cookieArray[i] = cookieArray[i].trim();
            if (cookieArray[i].indexOf(key) == 0) {
                return cookieArray[i].substring(key.length, cookieArray[i].length);
            }
        }
    }
}