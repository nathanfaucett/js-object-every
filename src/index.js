var keys = require("@nathanfaucett/keys");


module.exports = objectEvery;


function objectEvery(object, callback) {
    var objectKeys = keys(object),
        i = -1,
        il = objectKeys.length - 1,
        key;

    while (i++ < il) {
        key = objectKeys[i];

        if (!callback(object[key], key, object)) {
            return false;
        }
    }

    return true;
}
