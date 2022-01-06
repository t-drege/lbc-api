export interface DeleteUserGateway {
    deleteUser(userId:number): Promise<number>
}