import {JsonProperty, Serializable} from "typescript-json-serializer";
import {SetupFee} from "@app/infrastructure/model/paypal/setup.fee";

@Serializable()
export class PaymentPreferences {
    @JsonProperty('auto_bill_outstanding')
    autoBillOutstanding:boolean

    @JsonProperty('setup_fee_failure_action')
    setupFeeFailureAction:string

    @JsonProperty('payment_failure_threshold')
    paymentFailureThreshold:number

    @JsonProperty("setup_fee")
    setupFee: SetupFee
}