import Newspaper from "@app/infrastructure/model/newspaper";

export interface ListNewspapersGateway {
    findAll(offset: number, limit: number): Promise<any>
}