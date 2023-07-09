import {expect} from 'chai';
import 'reflect-metadata';
import {Container} from 'inversify';
import {ILogger} from '../interfaces/ILogger';
import {IHttpClient} from '../interfaces/IHttpClient';
import {IConfiguration} from '../interfaces/IConfiguration';
import {DependencyIdentifier} from '../dependency-identifiers';
import {CarOnSaleClient} from "../classes/CarOnSaleClient";

/**
 * CarOnSaleClient tests
 */
describe('CarOnSaleClientTest', () => {
    let container: Container;
    let carOnSaleClient: CarOnSaleClient;
    let httpClientMock: IHttpClient;

    beforeEach(() => {
        container = new Container();

        // Mock dependencies
        container.bind<ILogger>(DependencyIdentifier.LOGGER).toConstantValue({
            log: () => {
            },
            error: () => {
            },
        });
        httpClientMock = {
            get: async () => ({
                items: [
                    {id: 1, numBids: 5, minimumRequiredAsk: 1000, currentHighestBidValue: 1500},
                    {id: 2, numBids: 3, minimumRequiredAsk: 2000, currentHighestBidValue: 2500},
                ],
            }),
            put: async () => {
            },
        };

        container.bind<IHttpClient>(DependencyIdentifier.HTTP_CLIENT).toConstantValue(httpClientMock);

        container.bind<IConfiguration>(DependencyIdentifier.CONFIG).toConstantValue({
            get: () => 'https://example.com',
        });

        carOnSaleClient = container.resolve<CarOnSaleClient>(CarOnSaleClient);
    });

    it('should retrieve running auctions', async () => {
        const authHeaders = {};

        const result = await carOnSaleClient.getRunningAuctions(authHeaders);

        expect(result).to.deep.equal({
            items: [{
                id: 1,
                numBids: 5,
                minimumRequiredAsk: 1000,
                currentHighestBidValue: 1500
            }, {id: 2, numBids: 3, minimumRequiredAsk: 2000, currentHighestBidValue: 2500}]
        });
    });

    it('should retrieve running auctions and detailed overview', async () => {
        const authHeaders = {};

        const result = await carOnSaleClient.getRunningAuctionsAndDetailedOverview(authHeaders);

        expect(result).to.deep.equal({
            "avgBidsPerAuction": 4,
            "avgProgressPercentage": 137.5,
            "avgProgressRatio": 1.375,
            "progressRatioAndPercentagePerAuction": [
                {
                    "auctionId": 1,
                    "progressPercentage": "150.00%",
                    "progressRatio": 1.5
                },
                {
                    "auctionId": 2,
                    "progressPercentage": "125.00%",
                    "progressRatio": 1.25,
                }
            ],
            "totalNumberOfAuctions": 2
        });
    });
});
