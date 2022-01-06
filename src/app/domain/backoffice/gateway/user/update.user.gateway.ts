import User from "@app/infrastructure/model/user";

export interface UpdateUserGateway {
    updateUser(userId: number, firstname: string, lastname: string, username: string, email: string, password: string, phone: string, adress: string, postalCode: number, roleId: number)

    findUserById(userId:number):Promise<User>
}