import {Injectable} from "@nestjs/common";
import {NewspaperStatusGateway} from "@app/domain/backoffice/gateway/newspapers.status/newspaper.status.gateway";
import NewspaperStatus from "@app/infrastructure/model/newspaper.status";

@Injectable()
export class NewspaperStatusRepository implements NewspaperStatusGateway{
    findAllNewspaperStatus(): Promise<Array<NewspaperStatus>> {
        return NewspaperStatus.findAll();
    }
}