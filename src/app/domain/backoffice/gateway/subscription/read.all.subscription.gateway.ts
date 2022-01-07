export interface ReadAllSubscriptionGateway {
    findAllSubscriptions(offset: number, limit: number): Promise<any>
}