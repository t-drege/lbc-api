import Newspaper from "@app/infrastructure/model/newspaper";

export interface CreateNewspaperGateway {
    create(newspaper: Newspaper): Promise<Newspaper>
}