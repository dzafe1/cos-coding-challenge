import {Authentication} from "../types/Authentication";

/**
 * This service describes an interface to authenticate with the CarOnSale API.
 */
export interface IAuth {
    login(): Promise<Authentication>
}
