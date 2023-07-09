import {ILogger} from "./interfaces/ILogger";
import {IAuth} from "./interfaces/IAuth";
import {IHttpClient} from "./interfaces/IHttpClient";
import {IConfiguration} from "./interfaces/IConfiguration";
import {ICarOnSaleClient} from "./interfaces/ICarOnSaleClient";
import {DependencyIdentifier} from "./dependency-identifiers";
import {Container} from "inversify";
import {Logger} from "./classes/Logger";
import {Auth} from "./classes/Auth";
import {HttpClient} from "./classes/HttpClient";
import {Configuration} from "./classes/Configuration";
import {CarOnSaleClient} from "./classes/CarOnSaleClient";


/**
 * Configure the dependencies in the DI container.
 * @param container
 */
export function configureDependencies(container: Container): void {
    container.bind<ILogger>(DependencyIdentifier.LOGGER).to(Logger);
    container.bind<IAuth>(DependencyIdentifier.AUTH).to(Auth);
    container.bind<IHttpClient>(DependencyIdentifier.HTTP_CLIENT).to(HttpClient);
    container.bind<IConfiguration>(DependencyIdentifier.CONFIG).to(Configuration);
    container.bind<ICarOnSaleClient>(DependencyIdentifier.CAR_ON_SALE_CLIENT).to(CarOnSaleClient);
}
