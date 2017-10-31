import {MyProvider} from "../my-provider";

describe('MyProvider', () => {

    it('prints to the console', () => {
        let provider = new MyProvider();
        provider.myMethod();
        expect(true).toBeTruthy();
    });
});