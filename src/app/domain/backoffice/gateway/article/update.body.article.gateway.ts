import Article from "@app/infrastructure/model/article";

export interface UpdateBodyArticleGateway {
    updateBody(articleId: number, bodyHtml: string)

    findBodyByArticleId(articleId: number):Promise<Article>
}