import {ReadAllProductGateway} from "@app/domain/backoffice/gateway/product/read.all.product.gateway";
import {Inject, Injectable} from "@nestjs/common";
import {ReadAllProductRequest} from "@app/domain/backoffice/request/product/read.all.product.request";
import {ReadAllProductResponse} from "@app/domain/backoffice/response/product/read.all.product.response";
import {pagination, pagingData} from "@app/application/utils/pagination";
import {Op} from "sequelize";

@Injectable()
export class ReadAllProduct {
    private readonly gateway: ReadAllProductGateway

    constructor(@Inject('ReadAllProductGateway') gateway: ReadAllProductGateway) {
        this.gateway = gateway
    }

    public async execute(request: ReadAllProductRequest) {
        const {limit, offset} = pagination(request.page, request.limit)
        const newspapers = await this.gateway.findAllProduct(offset, limit, ReadAllProduct.filters(request))
        const rows = pagingData(newspapers, request.page, limit)
        return new ReadAllProductResponse(rows)
    }

    private static filters(request: ReadAllProductRequest): object {
        const object: object = {}
        if (request.activated != undefined) {
            object['activated'] =
                {
                    [Op.eq]: request.activated,
                }
        }

        if (request.newspaperId != undefined) {
            object['newspaperId'] =
                {
                    [Op.eq]: request.newspaperId,
                }
        }

        if (request.description != undefined) {
            object['description'] =
                {
                    [Op.like]: "%" + request.description + "%"
                }
        }

        return {[Op.and]: object};
    }

}