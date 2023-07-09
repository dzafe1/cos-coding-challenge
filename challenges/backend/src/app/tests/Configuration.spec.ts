import {expect} from 'chai';
import {Configuration} from "../classes/Configuration";
import {ILogger} from "../interfaces/ILogger";
import {Container} from "inversify";
import {DependencyIdentifier} from "../dependency-identifiers";

/**
 * Configuration tests
 */
describe('Configuration', () => {
    let configuration: Configuration;
    let container: Container;
    let loggerMock: ILogger;

    beforeEach(() => {
        container = new Container();

        loggerMock = {
            log: () => {
            },
            error: () => {
            }
        };

        container.bind<ILogger>(DependencyIdentifier.LOGGER).toConstantValue(loggerMock);

        configuration = container.resolve<Configuration>(Configuration);
    });

    it('should return the configuration value for a valid key', () => {
        const key = 'MY_CONFIG_KEY';
        const expectedValue = 'my_config_value';
        process.env[key] = expectedValue;
        const actualValue = configuration.get(key);

        // Assert
        expect(actualValue).to.equal(expectedValue);
    });

    it('should return undefined for an invalid key', () => {
        const key = 'INVALID_KEY';
        const actualValue = configuration.get(key);
        expect(actualValue).to.be.undefined;
    });

});
