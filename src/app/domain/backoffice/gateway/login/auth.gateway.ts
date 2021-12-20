import User from "@app/infrastructure/model/user";

export interface AuthGateway {
    getUser(email: string): Promise<User>
}