import { Injectable } from '@angular/core';
var MyProvider = (function () {
    function MyProvider() {
    }
    MyProvider.prototype.myMethod = function () {
        console.log("I'm afraid I can't do that in version 0.0.14");
    };
    return MyProvider;
}());
export { MyProvider };
MyProvider.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MyProvider.ctorParameters = function () { return []; };
//# sourceMappingURL=my-provider.js.map