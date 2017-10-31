var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { MyComponent } from './components/my-component';
import { MyProvider } from './providers/my-provider';
var MyModule = (function () {
    function MyModule() {
    }
    MyModule_1 = MyModule;
    MyModule.forRoot = function () {
        return {
            ngModule: MyModule_1,
            providers: [MyProvider]
        };
    };
    MyModule = MyModule_1 = __decorate([
        NgModule({
            declarations: [
                // declare all components that your module uses
                MyComponent
            ],
            exports: [
                // export the component(s) that you want others to be able to use
                MyComponent
            ]
        })
    ], MyModule);
    return MyModule;
    var MyModule_1;
}());
export { MyModule };
//# sourceMappingURL=my-module.module.js.map