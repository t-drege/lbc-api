import {Injectable} from "@nestjs/common";
import {Buffer} from "buffer";

@Injectable()
export class Paypal {

    private readonly _baseUrl: string
    private readonly _headers: string[]

    constructor() {
        this._headers = [
            `Authorization: BASIC ${new Buffer(process.env.CLIENT_ID + ":" + process.env.PASSWORD).toString('base64')}`,
            'Content-Type: application/json',
            'Accept: application/json'
        ]
        this._baseUrl = process.env.PAYPAL_BASE_URL
    }

    get baseUrl(): string {
        return this._baseUrl;
    }

    get headers(): string[] {
        return this._headers;
    }

}