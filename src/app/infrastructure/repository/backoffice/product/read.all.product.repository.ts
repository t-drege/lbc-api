import {ReadAllProductGateway} from "@app/domain/backoffice/gateway/product/read.all.product.gateway";
import {Injectable} from "@nestjs/common";
import Product from "@app/infrastructure/model/product";

@Injectable()
export class ReadAllProductRepository implements ReadAllProductGateway {
    findAllProduct(offset: number, limit: number): Promise<any> {
        return Product.findAndCountAll({
            limit: limit,
            offset: offset,
            order: [
                ['createdAt', 'DESC'],
            ]
        })
    }

}