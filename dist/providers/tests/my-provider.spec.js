import { MyProvider } from "../my-provider";
describe('MyProvider', function () {
    it('prints to the console', function () {
        var provider = new MyProvider();
        provider.myMethod();
        expect(true).toBeTruthy();
    });
});
//# sourceMappingURL=my-provider.spec.js.map