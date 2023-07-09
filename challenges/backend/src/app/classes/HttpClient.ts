import {inject, injectable} from "inversify";
import {IHttpClient} from "../interfaces/IHttpClient";
import axios, {AxiosInstance} from "axios";
import {ILogger} from "../interfaces/ILogger";
import {DependencyIdentifier} from "../dependency-identifiers";
import {AuthenticationHeader} from "../types/AuthenticationHeader";

@injectable()
export class HttpClient implements IHttpClient {
    private readonly _logger: ILogger;
    private readonly _axios: AxiosInstance;

    constructor(@inject(DependencyIdentifier.LOGGER) logger: ILogger) {
        this._logger = logger;
        this._axios = axios.create();
    }

    /**
     * Get data from a URL
     * @param url
     * @param headerOptions
     */
    public async get(url: string, headerOptions?: AuthenticationHeader): Promise<any> {
        this._logger.log('Creating GET request');
        try {
            let config;
            if (headerOptions) {
                this._logger.log('Header options', headerOptions);
                config = {
                    headers: {
                        ...headerOptions
                    },
                    timeout: 20000
                }
            }
            const response = await this._axios.get(url, config);
            return response.data;
        } catch (e) {
            this._logger.error('Error in HttpClient.get()', e);
            // as per request in README.md
            process.exit(1);
        }
    }

    /**
     * Put data to a URL
     * @param url
     * @param data
     */
    public async put(url: string, data: any): Promise<any> {
        this._logger.log('Creating PUT request');
        try {
            const response = await this._axios.put(url, data, {timeout: 20000})
            return response.data;
        } catch (e) {
            this._logger.error('Error in HttpClient.put()', e);
            // as per request in README.md
            process.exit(1);
        }
    }


}
