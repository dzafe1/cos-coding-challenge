import {ILogger} from "../interfaces/ILogger";
import {injectable} from "inversify";
import "reflect-metadata";

@injectable()
export class Logger implements ILogger {
    /**
     * Log a message
     * @param message
     * @param optionalParam
     */
    public log(message: string, optionalParam?: any): void {
        if (optionalParam)
            console.log(`[LOG]: ${message}`, optionalParam);
        else
            console.log(`[LOG]: ${message}`);

    }

    /**
     * Log an error
     * @param message
     * @param optionalParam
     */
    public error(message: string, optionalParam?: any): void {
        if (optionalParam)
            console.error(`[ERROR]: ${message}`, optionalParam);
        else
            console.error(`[ERROR]: ${message}`);
    }
}
