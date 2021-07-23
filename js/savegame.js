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
    deleteAllCookies() {
        var cookies = document.cookie.split(";");
    
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
}