import {inject, injectable} from "inversify";
import {ILogger} from "../interfaces/ILogger";
import {DependencyIdentifier} from "../dependency-identifiers";
import "reflect-metadata";
import {IAuth} from "../interfaces/IAuth";
import {ICarOnSaleClient} from "../interfaces/ICarOnSaleClient";
import {AuthenticationHeader} from "../types/AuthenticationHeader";
import {AuctionsDetailedOverview} from "../types/AuctionsDetailedOverview";

@injectable()
export class AuctionMonitorApp {

    public constructor(
        @inject(DependencyIdentifier.LOGGER) private logger: ILogger,
        @inject(DependencyIdentifier.AUTH) private auth: IAuth,
        @inject(DependencyIdentifier.CAR_ON_SALE_CLIENT) private iCarOnSaleClient: ICarOnSaleClient
    ) {
    }

    /**
     * Start the auction monitor
     */
    public async start(): Promise<void> {
        this.logger.log(`Auction Monitor started.`);

        const {userId, token: authToken} = await this.auth.login();

        const authHeaders: AuthenticationHeader = {
            userId,
            authToken
        }
        const auctionsDetailedOverview: AuctionsDetailedOverview = await this.iCarOnSaleClient.getRunningAuctionsAndDetailedOverview(authHeaders);

        this.showAuctionsOverview(auctionsDetailedOverview);
    }

    /**
     * Show the auctions overview
     * @param overview
     * @private
     */
    private showAuctionsOverview(overview: AuctionsDetailedOverview): void {
        overview.progressRatioAndPercentagePerAuction.forEach((auction) => {
            this.logger.log(`Auction ${auction.auctionId} - Progress ratio: ${auction.progressRatio} Progress: (${auction.progressPercentage}%)`);
        });
        this.logger.log('Total number of auctions:', overview.totalNumberOfAuctions);
        this.logger.log('Average number of bids per auction:', overview.avgBidsPerAuction);
        this.logger.log('Average progress ratio:', overview.avgProgressRatio);
        this.logger.log('Average progress percentage:', overview.avgProgressPercentage.toFixed(2) + '%');
    }
}
