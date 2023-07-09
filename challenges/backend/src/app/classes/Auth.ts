import {inject, injectable} from "inversify";
import {IAuth} from "../interfaces/IAuth";
import {Authentication} from "../types/Authentication";
import {DependencyIdentifier} from "../dependency-identifiers";
import {ILogger} from "../interfaces/ILogger";
import {IHttpClient} from "../interfaces/IHttpClient";
import {IConfiguration} from "../interfaces/IConfiguration";


@injectable()
export class Auth implements IAuth {

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
     * Login to the API
     */
    public async login(): Promise<Authentication> {
        this._logger.log('Trying to login');
        const url: string = `${this._config.get('BASE_URL')}/v1/authentication/${this._config.get('USER_ID')}`;
        return await this._httpClient.put(url, {password: this._config.get('PASSWORD')});
    }
}
