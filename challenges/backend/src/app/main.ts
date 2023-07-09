import 'dotenv/config'
import {Container} from "inversify";
import {AuctionMonitorApp} from "./classes/AuctionMonitorApp";
import {configureDependencies} from "./inversify.config";
import {ILogger} from "./interfaces/ILogger";


/*
 * Create the DI container.
 */
const container = new Container({
    defaultScope: "Singleton",
});

/*
 * Register dependencies in DI environment.
 */
configureDependencies(container);


/*
 * Inject all dependencies in the application & retrieve application instance.
 */
export const app = container.resolve<AuctionMonitorApp>(AuctionMonitorApp);

/*
 * Start the application
 */
(async () => {
    try {
        await app.start();
    } catch (error) {
        container.get<ILogger>('logger').error('An error occurred during application startup:', error)
        process.exit(1);
    }
})();
