import {ReadAllProductGateway} from "@app/domain/backoffice/gateway/product/read.all.product.gateway";
import {Inject, Injectable} from "@nestjs/common";
import {ReadAllProductRequest} from "@app/domain/backoffice/request/product/read.all.product.request";
import {ReadAllProductResponse} from "@app/domain/backoffice/response/product/read.all.product.response";
import {pagination, pagingData} from "@app/application/utils/pagination";
import {isString} from "@nestjs/common/utils/shared.utils";
import {Op} from "sequelize";

@Injectable()
export class ReadAllProduct {
    private readonly gateway: ReadAllProductGateway

    constructor(@Inject('ReadAllProductGateway') gateway: ReadAllProductGateway) {
        this.gateway = gateway
    }

    public async execute(request: ReadAllProductRequest) {
        this.whereBuilder(request)
        const {limit, offset} = pagination(request.page, request.limit)
        const newspapers = await this.gateway.findAllProduct(offset, limit, request.activated, request.description)
        const rows = pagingData(newspapers, request.page, limit)
        return new ReadAllProductResponse(rows)
    }

    private whereBuilder(request: ReadAllProductRequest) {
        const where = {}
        if(request.description != '') {
            where[Op.and] = {
                activated: {
                    [Op.eq]: request.activated,
                },
            }
        }
        if(request.description)
        console.log(where)
    }

}