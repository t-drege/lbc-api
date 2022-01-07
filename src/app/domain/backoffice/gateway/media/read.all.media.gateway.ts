export interface ReadAllMediaGateway {
    findAllMedias(offset: number, limit: number): Promise<any>
}