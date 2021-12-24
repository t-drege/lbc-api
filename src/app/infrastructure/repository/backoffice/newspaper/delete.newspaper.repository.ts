import {DeleteNewspaperGateway} from "@app/domain/backoffice/gateway/newspaper/delete.newspaper.gateway";
import Newspaper from "@app/infrastructure/model/newspaper";
import {Injectable} from "@nestjs/common";

@Injectable()
export class DeleteNewspaperRepository implements DeleteNewspaperGateway {
    deleteNewspaper(newspaperId: number): Promise<number> {
        return Newspaper.destroy({
            where: {
                id: newspaperId
            }
        })
    }

}