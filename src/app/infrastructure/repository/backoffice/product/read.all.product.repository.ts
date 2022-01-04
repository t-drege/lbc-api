import {ReadAllProductGateway} from "@app/domain/backoffice/gateway/product/read.all.product.gateway";
import {Injectable} from "@nestjs/common";
import Product from "@app/infrastructure/model/product";
import {Op, where} from "sequelize";

@Injectable()
export class ReadAllProductRepository implements ReadAllProductGateway {
    findAllProduct(offset: number, limit: number, filters: object): Promise<any> {
        console.log(where)
        return Product.findAndCountAll({
            where: filters,
            limit: limit,
            offset: offset,
            order: [
                ['createdAt', 'DESC'],
            ]
        })
    }

}