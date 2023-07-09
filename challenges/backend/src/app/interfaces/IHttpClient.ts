/**
 * Interface for HttpClient, which is used to make HTTP requests
 */
export interface IHttpClient {
    get(url: string, headerOptions?: any): Promise<any>;

    put(url: string, data: any): Promise<any>;
}
