import {ReadAllSubscriptionGateway} from "@app/domain/backoffice/gateway/subscription/read.all.subscription.gateway";
import {Injectable} from "@nestjs/common";
import Subscription from "@app/infrastructure/model/subscription";
import Proposal from "@app/infrastructure/model/proposal";
import ProposalStatus from "@app/infrastructure/model/proposal.status";
import User from "@app/infrastructure/model/user";
import Category from "@app/infrastructure/model/category";

@Injectable()
export class ReadAllSubscriptionRepository implements ReadAllSubscriptionGateway {
    findAllSubscriptions(offset: number, limit: number): Promise<any> {
        return Subscription.findAndCountAll({
            limit: limit,
            offset: offset,
            order: [
                ['createdAt', 'DESC'],
            ]
        })
    }

}