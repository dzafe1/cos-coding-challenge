/**
 * Interface for the logger service
 */
export interface ILogger {
    log(message: string, optionalParam?: any): void;

    error(message: string, optionalParam?: any): void;
}
