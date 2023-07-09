import {expect} from 'chai';
import {Logger} from "../classes/Logger";

/**
 * Unit tests for the Logger class
 */
describe('Logger', () => {
    let logger: Logger;
    let consoleOutput: any[];

    beforeEach(() => {
        logger = new Logger();
        consoleOutput = [];
        console.log = (...args: any[]) => {
            consoleOutput.push(...args);
        };
    });

    it('should log a message without optional parameter', () => {
        // Arrange
        const expectedMessage = '[LOG]: Test message';

        // Act
        logger.log('Test message');

        // Assert
        expect(consoleOutput[0]).to.equal(expectedMessage);
    });

    it('should log a message with optional parameter', () => {
        // Arrange
        const expectedMessage = '[LOG]: Test message';
        const optionalParam = {foo: 'bar'};

        // Act
        logger.log('Test message', optionalParam);

        // Assert
        expect(consoleOutput[0]).to.equal(expectedMessage);
        expect(consoleOutput[1]).to.deep.equal(optionalParam);
    });
});
