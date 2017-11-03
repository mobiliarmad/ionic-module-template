import { Component } from '@angular/core';
var MyComponent = (function () {
    function MyComponent() {
    }
    return MyComponent;
}());
export { MyComponent };
MyComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-component',
                template: "\n      <div class=\"myClass\">I'm a special snowflake</div>\n    ",
                styles: ["\n      .myClass {\n        background-color: orchid;\n      }\n    "]
            },] },
];
/** @nocollapse */
MyComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=my-component.js.map