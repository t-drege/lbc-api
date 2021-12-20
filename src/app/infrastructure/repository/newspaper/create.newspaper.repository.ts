import {CreateNewspaperGateway} from "@app/domain/backoffice/gateway/newspaper/create.newspaper.gateway";
import Newspaper from "@app/infrastructure/model/newspaper";
import {Injectable} from "@nestjs/common";

@Injectable()
export class CreateNewspaperRepository implements CreateNewspaperGateway {
    create(newspaper: Newspaper): Promise<Newspaper> {
        return Newspaper.create(newspaper.toJSON(), {
            returning: true,
            raw: true
        })
    }
}