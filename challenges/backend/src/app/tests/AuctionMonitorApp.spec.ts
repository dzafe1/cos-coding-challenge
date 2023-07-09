import {expect} from 'chai';
import chai from 'chai';
import spies from 'chai-spies';
import 'reflect-metadata';
import {ILogger} from "../interfaces/ILogger";
import {IAuth} from "../interfaces/IAuth";
import {ICarOnSaleClient} from "../interfaces/ICarOnSaleClient";
import {AuctionMonitorApp} from "../classes/AuctionMonitorApp";
import {AuctionsDetailedOverview} from "../types/AuctionsDetailedOverview";
import {CarOnSaleClient} from "../classes/CarOnSaleClient";
import {Container} from "inversify";
import {DependencyIdentifier} from "../dependency-identifiers";
import {IHttpClient} from "../interfaces/IHttpClient";
import {IConfiguration} from "../interfaces/IConfiguration";

chai.use(spies);

/**
 * AuctionMonitorApp tests
 */
describe('AuctionMonitorApp', () => {
    let loggerMock: ILogger;
    let authMock: IAuth;
    let container: Container;
    let carOnSaleClientMock: ICarOnSaleClient;
    let auctionMonitorApp: AuctionMonitorApp;
    let httpClientMock: IHttpClient;

    beforeEach(() => {
        container = new Container();

        // Mock dependencies
        loggerMock = {
            log: () => {
            },
            error: () => {
            },
        };
        container.bind<ILogger>(DependencyIdentifier.LOGGER).toConstantValue(loggerMock);


        authMock = {
            login: async () => (
                {
                    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlRPS0VOLWJ1eWVyLWNoYWxsZW5nZUBjYXJvbnNhbGUuZGUiLCJ1c2VyVXVpZCI6IjA1NGQ0NTc3LTY5YTAtNGU0Yi04ZTVlLTk3NWJjZjhjNjJjNyIsImlhdCI6MTY4ODg1Mjk5OCwiZXhwIjoxNjg5MTEyMTk4fQ.LESzPSqFL82LfpBlpRbL87B3yfzZc8Y5elTalXji0aQRyXtfwkqC4glQ2YVg0Vt6Z1VsFcrJq7wNKG_DIER0PI7uFizdEpVuAnGF7VePCbdX01i8BOWd8hCPQdtR5ox2QNNmKBvQ1u94zhorhgQxIDo-Dg0y3tyVamlyuRMt368",
                    "authenticated": true,
                    "userId": "buyer-challenge@caronsale.de",
                    "internalUserId": 2324,
                    "internalUserUUID": "054d4577-69a0-4e4b-8e5e-975bcf8c62c7",
                    "type": 1,
                    "privileges": "{SALESMAN_USER}"
                }
            ),
        };
        container.bind<IConfiguration>(DependencyIdentifier.CONFIG).toConstantValue({
            get: () => 'https://example.com',
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
        carOnSaleClientMock = container.resolve<CarOnSaleClient>(CarOnSaleClient);

        // Create the AuctionMonitorApp instance with mocked dependencies
        auctionMonitorApp = new AuctionMonitorApp(loggerMock, authMock, carOnSaleClientMock);
    });

    it('should start the auction monitor successfully', async () => {

        // Spy on the logger's log method
        const loggerSpy = chai.spy.on(loggerMock, 'log');

        // Call the start method
        await auctionMonitorApp.start();

        // Assert that the logger's log method was called
        expect(loggerSpy).to.be.called;
    });

    it('should show the auctions overview successfully', () => {

        // Spy on the logger's log method
        const loggerSpy = chai.spy.on(loggerMock, 'log');

        // Create a dummy overview
        const overview: AuctionsDetailedOverview = {
            progressRatioAndPercentagePerAuction: [],
            totalNumberOfAuctions: 0,
            avgBidsPerAuction: 0,
            avgProgressRatio: 0,
            avgProgressPercentage: 0,
        };

        // Call the showAuctionsOverview method
        auctionMonitorApp['showAuctionsOverview'](overview);
        expect(loggerSpy).to.be.called;

    });
});
