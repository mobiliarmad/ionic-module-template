import { NgModule } from '@angular/core';
import { MyProvider } from './providers/my-provider';
import { TestComponent } from "./testcomponent/testcomponent";
var MyModule = (function () {
    function MyModule() {
    }
    MyModule.forRoot = function () {
        return {
            ngModule: MyModule,
            providers: [MyProvider]
        };
    };
    return MyModule;
}());
export { MyModule };
MyModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    // declare all components that your module uses
                    TestComponent
                ],
                exports: [
                    // export the component(s) that you want others to be able to use
                    TestComponent
                ]
            },] },
];
/** @nocollapse */
MyModule.ctorParameters = function () { return []; };
//# sourceMappingURL=my-module.module.js.map