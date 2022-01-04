import {ReadAllProductGateway} from "@app/domain/backoffice/gateway/product/read.all.product.gateway";
import {Inject, Injectable} from "@nestjs/common";
import {ReadAllProductRequest} from "@app/domain/backoffice/request/product/read.all.product.request";
import {ReadAllProductResponse} from "@app/domain/backoffice/response/product/read.all.product.response";
import {pagination, pagingData} from "@app/application/utils/pagination";

@Injectable()
export class ReadAllProduct {
    private readonly gateway: ReadAllProductGateway

    constructor(@Inject('ReadAllProductGateway') gateway: ReadAllProductGateway) {
        this.gateway = gateway
    }

    public async execute(request: ReadAllProductRequest) {
        const {limit, offset} = pagination(request.page, request.limit)
        const newspapers = await this.gateway.findAllProduct(offset, limit)
        const rows = pagingData(newspapers, request.page, limit)
        return new ReadAllProductResponse(rows)
    }

}