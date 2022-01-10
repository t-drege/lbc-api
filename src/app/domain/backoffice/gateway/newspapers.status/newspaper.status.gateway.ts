import NewspaperStatus from "@app/infrastructure/model/newspaper.status";

export interface NewspaperStatusGateway {
    findAllNewspaperStatus(): Promise<Array<NewspaperStatus>>
}