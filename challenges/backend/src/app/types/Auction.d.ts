import {IVehicle} from "./Vehicle";

export type Auction = {
    label: string;
    state: number;
    endingTime: string;
    biddingAgentValue: number | null;
    didIBidAtLeastOnce: boolean;
    amIInvolved: boolean;
    amIHighestBidder: boolean;
    isParked: boolean;
    sellerContact: string | null;
    remainingDaysUntilReauctioning: number | null;
    remainingDaysUntilLatePickup: number | null;
    isExternalPaymentAllowed: boolean;
    latePickupFee: number | null;
    isTransportationBookingPossible: boolean;
    isExpressPickupAvailable: boolean;
    pickupPossibleInDays: number | null;
    sellerAccount: any;
    amIRegularBuyer: boolean;
    buyerSuccessFee: number;
    vatAmount: number;
    complaintPeriodEndAt: string | null;
    transportBookingPeriodEndAt: string | null;
    isCompoundPickup: boolean;
    hasIncreasedPickupTime: boolean;
    buyerCrossBorderProcessingAmount: number;
    isRecommended: boolean;
    sellerType: number;
    transportationTask: any;
    isTransportationAvailable: boolean;
    isMinAskReached: boolean;
    enforceTransportation: boolean;
    isWatching: boolean;
    biddingAgentValueNet: number | null;
    distanceToVehicleInKms: number | null;
    hasNextAuction: boolean | null;
    hasPreviousAuction: boolean | null;
    vatRate: number;
    isCrossBorderNetSale: boolean;
    buyerPurchaseFee: number;
    isTransportationAllowedForRegion: boolean;
    rating: number | null;
    remainingTimeInSeconds: number;
    remainingTimeForInstantPurchaseInSeconds: number | null;
    startedAt: string;
    purchaseConfirmedAt: string | null;
    purchaseRejectedAt: string;
    rejectionReason: number;
    rejectionReasonNote: string;
    rejectionReasonCompetitorName: string;
    directUploadRejectionReasons: any[];
    startingBidValue: number;
    startingBidValueNet: number;
    currentHighestBidValue: number;
    currentHighestBidValueNet: number;
    overridePayoutValue: number;
    highestBidValueAtEndingTime: number;
    highestBidValueAtEndingTimeNet: number | null;
    minimumRequiredAsk: number | null
    minimumRequiredAskNet: number | null;
    originalMinimumRequiredAsk: number | null;
    originalMinimumRequiredAskNet: number | null;
    numBids: number;
    purchasePrice: number;
    purchasePriceNet: number;
    associatedVehicle: Partial<IVehicle>;
    isRatedByDealership: boolean;
    isRatedByBuyer: boolean;
    isPaidByBuyer: boolean;
    outgoingPaymentConfirmedAt: string;
    incomingPaymentConfirmedAt: string;
    pickupConfirmedAt: string;
    locationCountryCode: string;
    locationAddress: string | null;
    locationCity: string;
    locationZip: string;
    inspectionLocationCountryCode: string;
    inspectionLocationAddress: string;
    inspectionLocationCity: string;
    inspectionLocationZip: string;
    sellerIban: string;
    urlToInvoice: string;
    urlToCorrectionInvoice: string | null;
    hotBid: boolean;
    instantPurchasePrice: number | null
    instantPurchasePriceNet: number | null;
    allowInstantPurchase: boolean;
    didEndWithInstantPurchase: boolean;
    instantPurchasePossibleUntil: string | null;
    auctioningIterations: number;
    priority: number;
    advertisementHtmlContent: string | null;
    buyerComplaint: number;
    internalReferenceText: string;
    _fk_uuid_vehicle: string;
    _fk_uuid_sellerUser: string;
    _fk_uuid_highestBiddingBuyerUser: string | null;
    urlToPaymentSite: string;
    needsReview: boolean;
    reviewReasons: any[];
    reviewReason: number;
    reviewReasonDetails: string;
    reviewComment: string;
    pickupPinCode: string;
    pickupPinUuid: string;
    pickupPinCodeEnteredAt: string;
    pickupPinUuidEnteredAt: string;
    pickupConfirmedWithNewPin: boolean;
    urlToPickupBuyerDocument: string | null;
    urlToPickupSellerDocument: string;
    paymentProcess: number;
    _fk_uuid_associatedBankAccount: string;
    draftReviewIterations: number;
    complaintTimeWindowExtendedAt: string;
    isSuspectedCashPayment: boolean;
    reviewStartedAt: string;
    readyToBeReinsertedSince: string | null;
    _fk_uuid_clonedFrom: string;
    type: number;
    isRejectionWaitPeriodOver: boolean;
    thirdPartyVehiclePurchaseInvoiceReference: string;
    sellerToCosInvoiceUrl: string;
    sellerToCosInvoiceUrlLastUpdatedAt: string;
    sellerToCosInvoiceUrlFirstUploadedAt: string | null;
    sellerToCosInvoiceIsValid: boolean;
    sellerToCosInvoiceComment: string;
    isLive: boolean;
    isTransportationDisabledManually: boolean;
    pickupInstructions: string;
    preventSellerFactoring: boolean;
    applyBuyerSuccessFee: boolean;
    documentShippingOrder: any;
    fieldsConfirmationStatus: any;
    isVATReportable: boolean;
    uploadMethod: number;
    prebookedServices: any[];
    isCosCheckPlusGuaranteeEnabled: boolean;
    isExtendedGuaranteeEnabled: boolean;
    urlToCoverLetter: string | null;
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    uuid: string;
    additionalTaxType: number;
    additionalTaxValue: number | null;
    additionalTaxExportDiscount: number;
    lastOfferBySeller: number;
    lastOfferBySellerNet: number | null;
    buyerRecommendationScore: number;
    inspectionWasCommissionedByCos: boolean;
    creatorType: number;
    _fk_uuid_creatingInternalUser: string;
    _fk_uuid_creatingSellerUser: string | null;
    isTest: boolean;
    displayMinAsk: boolean;
    locationGeoLat: number;
    previousCounterOfferByBuyer: number;
    previousCounterOfferByBuyerNet: number | null;
    previousLastOfferBySeller: number;
    previousLastOfferBySellerNet: number | null;
    renegotiationStoppedBySeller: boolean;
    renegotiationStoppedByBuyer: boolean;
    wasRenegotiationStoppageByBuyerAutomatic: boolean;
    wasRenegotiationStoppageBySellerAutomatic: boolean;
    numBuyerRenegotiationOfferRounds: number;
    numSellerRenegotiationOfferRounds: number;
    renegotiationMidpointValue: number;
    renegotiationMidpointValueNet: number | null;
    buyerAcceptedRenegotiationMidpoint: boolean;
    sellerAcceptedRenegotiationMidpoint: boolean;
    lastRenegotiationRoundEndedAt: string;
    numSecondsUntilRenegotiationTimeout: number;
    externalRenegotiationTicketUuid: string | null;
    counterOfferByBuyer: number;
    counterOfferByBuyerNet: number | null;
    thirdPartyVATDepositTransferReference: string | null;
    thirdPartyAdditionalTaxDepositTransferReference: string;
    thirdPartyAdditionalTaxTransferReference: string;
    thirdPartyVatTransferReference: string | null;
    thirdPartyVolumeChargeReference: string;
    thirdPartyVATDepositChargeReference: string;
    thirdPartyAdditionalTaxChargeReference: string;
    thirdPartyAdditionalTaxRefundReference: string;
    thirdPartyPayoutReference: string;
    thirdPartyVATDepositRefundReference: string | null;
    thirdPartyVATDepositReversalReference: string | null;
    thirdPartyAdditionalTaxDepositReversalReference: string;
    sellerSuccessFeeInvoiceReference: string;
    sellerListingFeeInvoiceReference: string;
    listingSurchargeFeeInvoiceReference: string | null;
    invoiceReference: string;
    thirdPartyInvoiceReference: string;
    thirdPartyCorrectionInvoiceReference: string | null;
    thirdPartyTransferReference: string;
    bookedServicesInvoiceReference: string | null;
    reauctionedWaitingForBuyerPaymentAt: string | null;
    isReauction: boolean | null;
    sellerViewHighestBidValue: number | null;
    sellerViewPurchaseConfirmedAt: string | null;
    reauctionedMergedAt: string | null;
};


export type AuctionList = {
    items: Auction[];
    total: number;
    page: number;
}
