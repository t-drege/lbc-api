import User from "@app/infrastructure/model/user";

export default interface CreateGateway {
    create(user: User): Promise<User>
}