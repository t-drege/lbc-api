import {ReadAllProductGateway} from "@app/domain/backoffice/gateway/product/read.all.product.gateway";
import {Injectable} from "@nestjs/common";
import Product from "@app/infrastructure/model/product";
import {Op, where} from "sequelize";

@Injectable()
export class ReadAllProductRepository implements ReadAllProductGateway {
    findAllProduct(offset: number, limit: number, activated: Array<number>, description: string): Promise<any> {
        console.log(activated)
        return Product.findAndCountAll({
            where: {
                [Op.and]: {
                    activated: {
                        [Op.and]: {
                            [Op.in]: activated,
                        }
                    },
                    description: {
                        [Op.like]: "%" + description + "%"
                    }
                }
            },
            limit: limit,
            offset: offset,
            order: [
                ['createdAt', 'DESC'],
            ]
        })
    }

}