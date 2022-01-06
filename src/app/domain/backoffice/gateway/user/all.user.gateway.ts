export interface AllUserGateway {
    findAllUsers(offset: number, limit: number, filters: object): Promise<any>
}