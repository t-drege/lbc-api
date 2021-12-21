import Newspaper from "@app/infrastructure/model/newspaper";

export interface UpdateNewspaperGateway
{
    update(id: number, number: number, principalTheme: string, newspaperStatusId: number, publishedAt: Date, mediaId: number): Promise<[number, Newspaper[]]>
    findNewspaperById(id: number): Promise<Newspaper>
}