export interface ReadAllProductGateway {
    findAllProduct(offset: number, limit: number, filters: object): Promise<any>
}