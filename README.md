object-every
=======

tests whether all elements in the object pass the test implemented by the provided function.


```javascript
var objectEvery = require("@nathanfaucett/object-every");


objectEvery({
        a: "a",
        b: "b",
        c: "c"
    },
    function(value, key) {
        return value === key;
    }
) === true;
```
