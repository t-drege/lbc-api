export interface ReadAllProductGateway {
    findAllProduct(offset: number, limit: number): Promise<any>
}