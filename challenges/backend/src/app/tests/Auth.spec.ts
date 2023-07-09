import 'dotenv/config'
import 'reflect-metadata';
import {Container} from "inversify";
import {DependencyIdentifier} from "../dependency-identifiers";
import {IAuth} from "../interfaces/IAuth";
import {expect} from "chai";
import {configureDependencies} from "../inversify.config";


/**
 * Auth tests
 */
describe('Auth', () => {
    const container = new Container({
        defaultScope: "Singleton",
    });

    let auth: IAuth

    beforeEach(() => {
        configureDependencies(container);
        auth = container.get<IAuth>(DependencyIdentifier.AUTH);
    });

    it('should login successfully', async () => {
        const result = await auth.login();

        // Assert any expectations based on the response or behavior
        expect(result.userId).equal('buyer-challenge@caronsale.de');
    });

});
