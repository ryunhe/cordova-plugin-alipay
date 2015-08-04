/*global cordova, module*/

module.exports = {
    pay: function (subject, body, price, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AliPay", "pay", [subject, body, price]);
    }
};
