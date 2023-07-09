/**
 * Interface for configuration
 */
export interface IConfiguration {
    get(key: string): string | undefined;
}
