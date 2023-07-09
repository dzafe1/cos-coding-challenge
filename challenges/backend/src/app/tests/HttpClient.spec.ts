import {expect} from 'chai';
import 'reflect-metadata';
import {ILogger} from '../interfaces/ILogger';
import {IHttpClient} from '../interfaces/IHttpClient';
import {HttpClient} from '../classes/HttpClient';

/**
 * Unit tests for the HttpClient class
 */
describe('HttpClient', () => {
    let httpClient: IHttpClient;
    let loggerMock: ILogger;

    beforeEach(() => {
        // Create a logger mock
        loggerMock = {
            log: () => {
            },
            error: () => {
            }
        };

        // Create the HttpClient instance
        httpClient = new HttpClient(loggerMock);
    });

    it('should retrieve data using GET request', async () => {
        // Mock the GET request with a response
        const responseData = {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        };
        // Call the get method
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        const result = await httpClient.get(url, {test: 1, test2: 2});

        // Assert that the result matches the expected response data
        expect(result).to.deep.equal(responseData);
    });

    it('should send data using PUT request', async () => {
        // Mock the PUT request with a response
        const responseData = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        };

        // Call the put method
        const url = 'https://jsonplaceholder.typicode.com/posts/1';
        const data = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        };
        const result = await httpClient.put(url, data);

        expect(result).to.deep.equal(responseData);
    });
});
