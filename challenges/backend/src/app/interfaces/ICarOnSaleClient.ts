import {AuctionList} from "../types/Auction";
import {AuthenticationHeader} from "../types/AuthenticationHeader";
import {AuctionsDetailedOverview} from "../types/AuctionsDetailedOverview";

/**
 * This service describes an interface to access auction data from the CarOnSale API.
 */
export interface ICarOnSaleClient {

    getRunningAuctions(headers: AuthenticationHeader): Promise<AuctionList>

    getRunningAuctionsAndDetailedOverview(headers: AuthenticationHeader): Promise<AuctionsDetailedOverview>

}
