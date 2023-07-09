export type AuctionsDetailedOverview = {
    progressRatioAndPercentagePerAuction: AuctionProgressRatioAndPercentage[],
    avgBidsPerAuction: number,
    avgProgressRatio: number,
    avgProgressPercentage: number,
    totalNumberOfAuctions: number
}

export type AuctionProgressRatioAndPercentage = {
    auctionId: number,
    progressRatio: number | null,
    progressPercentage: string | number | null
}
