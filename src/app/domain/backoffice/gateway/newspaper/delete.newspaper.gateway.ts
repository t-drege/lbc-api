export interface DeleteNewspaperGateway {
    deleteNewspaper(newspaperId: number) : Promise<number>
}