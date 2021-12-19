import User from "@app/infrastructure/model/user";

export default interface CreateGateway {
    findAll(): Promise<User[]>
}