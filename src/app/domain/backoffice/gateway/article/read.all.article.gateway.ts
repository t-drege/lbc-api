export interface ReadAllArticleGateway {
    findAllArticle(offset: number, limit: number, filters: object): Promise<any>
}
