import {ModuleWithProviders, NgModule} from '@angular/core';
import {MyProvider} from './providers/my-provider';
import {TestComponent} from "./testcomponent/testcomponent";

@NgModule({
    declarations: [
        // declare all components that your module uses
        TestComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        TestComponent
    ]
})
export class MyModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MyModule,
            providers: [MyProvider]
        };
    }
}

