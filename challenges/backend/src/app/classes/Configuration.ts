import {inject, injectable} from "inversify";
import "reflect-metadata";
import {IConfiguration} from "../interfaces/IConfiguration";
import {ILogger} from "../interfaces/ILogger";
import {DependencyIdentifier} from "../dependency-identifiers";

@injectable()
export class Configuration implements IConfiguration {

    private readonly _logger: ILogger;


    constructor(@inject(DependencyIdentifier.LOGGER) logger: ILogger) {
        this._logger = logger;
    }

    /**
     * Get a configuration value
     * @param key
     */
    public get(key: string): string | undefined {
        const keyValue = process.env[key];
        if (!keyValue) {
            this._logger.error(`Configuration.get(): Key ${key} not found`);
            return undefined;
        }
        return process.env[key];
    }
}
