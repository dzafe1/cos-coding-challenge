import {ICarOnSaleClient} from "../interfaces/ICarOnSaleClient";
import {inject, injectable} from "inversify";
import {IHttpClient} from "../interfaces/IHttpClient";
import {IConfiguration} from "../interfaces/IConfiguration";
import {ILogger} from "../interfaces/ILogger";
import {DependencyIdentifier} from "../dependency-identifiers";
import {Auction, AuctionList} from "../types/Auction";
import {AuthenticationHeader} from "../types/AuthenticationHeader";
import {AuctionProgressRatioAndPercentage, AuctionsDetailedOverview} from "../types/AuctionsDetailedOverview";

@injectable()
export class CarOnSaleClient implements ICarOnSaleClient {

    private readonly _httpClient: IHttpClient;
    private readonly _config: IConfiguration;
    private readonly _logger: ILogger;

    constructor(
        @inject(DependencyIdentifier.HTTP_CLIENT) httpClient: IHttpClient,
        @inject(DependencyIdentifier.LOGGER) logger: ILogger,
        @inject(DependencyIdentifier.CONFIG) config: IConfiguration
    ) {
        this._httpClient = httpClient;
        this._logger = logger;
        this._config = config
    }


    /**
     * Get the list of running auctions
     * @param authHeaders
     */
    public async getRunningAuctions(authHeaders: AuthenticationHeader): Promise<AuctionList> {
        this._logger.log(`Trying to get running auctions`);
        const url: string = `${this._config.get('BASE_URL')}/v2/auction/buyer/?filter=""&count=false`;
        return await this._httpClient.get(url, authHeaders);
    }

    /**
     * Get the list of running auctions and detailed overview
     * @param authHeaders
     */
    public async getRunningAuctionsAndDetailedOverview(authHeaders: AuthenticationHeader): Promise<AuctionsDetailedOverview> {
        try {
            const {items: auctions} = await this.getRunningAuctions(authHeaders);

            // Calculate the number of auctions
            const numAuctions: number = auctions.length;

            // Calculate the average number of bids on an auction
            const totalBids: number = auctions.reduce((sum, auction) => sum + auction.numBids, 0);
            const avgBidsPerAuction: number = totalBids / numAuctions;

            // Calculate the progress ratio and progress percentage per auction
            const auctionProgressData: AuctionProgressRatioAndPercentage [] = auctions.map((auction: Auction) => {
                let progressRatio: number | null;
                let progressPercentage: string | number | null;

                if (auction.minimumRequiredAsk !== null && auction.minimumRequiredAsk !== 0) {
                    progressRatio = auction.currentHighestBidValue / auction.minimumRequiredAsk;
                    progressPercentage = (progressRatio * 100).toFixed(2) + '%';
                } else {
                    progressRatio = null;
                    progressPercentage = null;
                }


                return {
                    auctionId: auction.id,
                    progressRatio: progressRatio ? progressRatio : 1.0,
                    progressPercentage: progressPercentage ? progressPercentage : 100
                };
            });

            // Calculate the average progress ratio and average progress percentage
            const validAuctions: AuctionProgressRatioAndPercentage[] = auctionProgressData.filter((data) => data.progressRatio !== null);
            const avgProgressRatio: number = validAuctions.reduce((sum, data) => sum + data.progressRatio!, 0) / validAuctions.length;
            const avgProgressPercentage: number = avgProgressRatio * 100;

            return {
                progressRatioAndPercentagePerAuction: auctionProgressData,
                totalNumberOfAuctions: numAuctions,
                avgBidsPerAuction,
                avgProgressRatio,
                avgProgressPercentage,
            };
        } catch (error) {
            // Display the error message
            this._logger.error('Failed to retrieve running auctions:', error);
            // as per request in README.md
            process.exit(1);
        }
    }
}
