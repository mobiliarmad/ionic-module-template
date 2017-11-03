import { Component } from "@angular/core";
var TestComponent = (function () {
    function TestComponent() {
    }
    return TestComponent;
}());
export { TestComponent };
TestComponent.decorators = [
    { type: Component, args: [{
                selector: 'testcomponent',
                template: "\n      <div class=\"test-class\">Test successful! Module works!</div>\n    ",
                styles: ["\n      .test-class {\n          background-color: green;\n      }\n    "]
            },] },
];
/** @nocollapse */
TestComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=testcomponent.js.map