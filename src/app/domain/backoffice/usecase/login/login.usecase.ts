import {Inject, Injectable, UseGuards} from "@nestjs/common";
import {AuthGateway} from "@app/domain/backoffice/gateway/login/auth.gateway";
import {LoginRequest} from "@app/domain/backoffice/request/login/login.request";
import {LoginResponse} from "@app/domain/backoffice/response/login/login.response";
import {AuthService} from "@config/auth/auth.service";
import {LocalAuthGuard} from "@config/auth/auth.guard";

@Injectable()
export class LoginUseCase {

    private readonly gateway: AuthGateway
    private readonly authService: AuthService

    constructor(@Inject('AuthGateway') gateway: AuthGateway, authService: AuthService) {
        this.gateway = gateway
        this.authService = authService
    }

    public async execute(request: LoginRequest) : Promise<LoginResponse> {
        const tokens = await this.authService.login(request.user)
        return new LoginResponse(tokens)
    }

}