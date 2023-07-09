export type IVehicle = {
    id: number;
    externalId: string | null;
    uuid: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    vin: string;
    make: string;
    makeInternalDatReference: string | undefined;
    model: string;
    modelInternalDatReference: string | undefined | null;
    datBaseModelRaw: string | null;
    ez: string;
    mileageInKm: number;
    isOdometerInMiles: boolean;
    category: number;
    transmission: number;
    upholstery: number;
    numSeats: number;
    fuelType: number;
    doors: number;
    engineSizeInCcm: number;
    enginePowerInHp: number;
    bodyColorCode: number;
    dimensionWidthInCm: number | null;
    dimensionHeightInCm: number | null
    dimensionLengthInCm: number | null;
    unloadedWeightInKg: number | null;
    lastHu: string;
    huReportExists: boolean;
    huReportAvailable: number;
    numPreOwners: number;
    numKeys: number;
    vatIdReportable: boolean;
    fullServiceHistoryType: number;
    serviceHistoryAvailability: number;
    hasMaintenanceBook: boolean | null;
    isReimportedVehicle: boolean;
    euroNorm: string;
    hadAccident: boolean;
    accidentDescription: string | null;
    hasDamages: boolean;
    damagesDescription: string | null;
    damages: any[];
    additionalInfo: string | null;
    readyToDrive: number;
    readyToDriveDetails: string | null;
    vehicleImages: any[];
    "additionalDamages": string | null,
    urlToMotorSound: string | null;
    urlToAttachment1: string | null;
    urlToAttachment2: string | null;
    urlToAttachment3: string | null;
    urlToVehicleSummarySheet: string | null;
    urlToRegistrationDocument: string | null;
    urlsByLanguageToExpose: any;
    estimatedValue: number | null;
    lastServiceInspectionDate: string | null
    lastServiceInspectionMileage: number | null;
    isCocDocumentAvailable: boolean | null;
    isDataExcerptAvailable: boolean | null;
    countryOfLastRegistration: string;
    origin: number;
    dataSource: number;
    paintState: any[];
    tires: any[];
    dataWarnings: any[];
    inspectionUuid: string | null;
    technicalState: any[];
    fieldsConfirmationStatus: any;
    licensePlate: string | null;
    fuelConsumption: any;
    co2Emission: any;
    commercialUsage: any[];
    isVehicleClassN1: boolean | null;
    isIntendedUse01: boolean | null;
    hasEndorsements: boolean | null;
    sourceLanguage: string;
    isRollable: boolean | null;
    ac: number;
    navigation: number;
    headlights: number;
    coupling: number;
    vehicleHeater: number;
    parkingAssistance: number;
    sunRoof: number;
    sportPackage: number;
    equipmentData: any[];
    equipmentHighlights: any[];
};
