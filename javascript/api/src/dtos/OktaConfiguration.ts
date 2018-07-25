import { OktaIdp } from "./OktaIdp";

export interface OktaConfiguration {
    baseUrl: string;
    clientId: string;
    idps: OktaIdp[];
    issuer: string;
}
