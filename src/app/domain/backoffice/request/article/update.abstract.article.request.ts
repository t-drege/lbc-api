export class UpdateAbstractArticleRequest {
    private readonly _articleId:number
    private readonly _title: string
    private readonly _subTitle: string
    private readonly _slug: string
    private readonly _hotNews: boolean
    private readonly _fileCoverArticle: Express.Multer.File
    private readonly _userId: number
    private readonly _categoryId: number

    constructor(articleId:number,title: string, subTitle: string, slug: string, hotNews: boolean, fileCoverArticle: Express.Multer.File, userId: number, categoryId: number) {
        this._articleId = articleId
        this._title = title
        this._subTitle = subTitle
        this._slug = slug
        this._hotNews = hotNews
        this._fileCoverArticle = fileCoverArticle
        this._userId = userId
        this._categoryId = categoryId
    }

    get articleId(): number {
        return this._articleId;
    }

    get title(): string {
        return this._title;
    }

    get subTitle(): string {
        return this._subTitle;
    }

    get slug(): string {
        return this._slug;
    }

    get hotNews(): boolean {
        return this._hotNews;
    }

    get fileCoverArticle(): Express.Multer.File {
        return this._fileCoverArticle;
    }

    get userId(): number {
        return this._userId;
    }

    get categoryId(): number {
        return this._categoryId;
    }
}