"use strict";
function isLoggedin() {
    return !!localStorage.getItem('x-token');
}
exports.isLoggedin = isLoggedin;
function getToken() {
    return localStorage.getItem('x-token');
}
exports.getToken = getToken;
//# sourceMappingURL=isLoggedIn.js.map