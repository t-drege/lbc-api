export interface ReadAllProductGateway {
    findAllProduct(offset: number, limit: number, activated: Array<number>, description: string): Promise<any>
}