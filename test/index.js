var tape = require("tape"),
    objectEvery = require("..");


tape("objectEvery(object, callback) tests whether all elements in the object pass the test implemented by the provided function", function(assert) {

    function fn(value, key) {
        return value === key;
    }

    assert.equals(objectEvery({
        a: "a",
        b: "b",
        c: "c"
    }, fn), true);
    assert.equals(objectEvery({
        a: "a",
        b: "c",
        c: "d"
    }, fn), false);

    assert.end();
});
