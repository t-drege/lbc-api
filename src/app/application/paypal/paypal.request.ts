import {Injectable} from "@nestjs/common";
import {Paypal} from "@app/application/paypal/paypal.provider";
import {PaypalRequestImpl} from "@app/application/paypal/paypal.request.impl";
import {curly} from "node-libcurl";

@Injectable()
export class PaypalRequest implements PaypalRequestImpl {

    private readonly paypal: Paypal

    constructor(paypal: Paypal) {
        this.paypal = paypal
    }

    async delete(url: string) {
        return await curly.delete(this.paypal.baseUrl + url, {
            httpHeader: this.paypal.headers,
        }).then(function (result) {
            if (result.statusCode > 0 && result.statusCode < 300) {
                return result.data
            } else {
                return Error
            }
        })
    }

    async post(url: string, body: object) {
        return await curly.post(this.paypal.baseUrl + url, {
            postFields: JSON.stringify(body),
            httpHeader: this.paypal.headers,
        }).then(function (result) {
            if (result.statusCode > 0 && result.statusCode < 300) {
                return result.data
            } else {
                return Error
            }
        })
    }

    async put(url: string, body: object) {
        return await curly.put(this.paypal.baseUrl + url, {
            postFields: JSON.stringify(body),
            httpHeader: this.paypal.headers,
        }).then(function (result) {
            if (result.statusCode > 0 && result.statusCode < 300) {
                return result.data
            } else {
                return Error
            }
        })
    }

    async read(url: string) {
        return await curly.get(this.paypal.baseUrl + url, {
            httpHeader: this.paypal.headers,
        }).then(function (result) {
            if (result.statusCode > 0 && result.statusCode < 300) {
                return result.data
            } else {
                return Error
            }
        })
    }

}