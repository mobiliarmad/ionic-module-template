import {ModuleWithProviders, NgModule} from '@angular/core';
import {MyComponent} from './components/my-component';
import {MyProvider} from './providers/my-provider';
import {TestComponent} from "./testcomponent/testcomponent";

@NgModule({
    declarations: [
        // declare all components that your module uses
        MyComponent,
        TestComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        MyComponent,
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

