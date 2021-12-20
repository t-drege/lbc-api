import {Inject, Injectable} from "@nestjs/common";
import {AuthGateway} from "@app/domain/backoffice/gateway/login/auth.gateway";
import {LoginRequest} from "@app/domain/backoffice/request/login/login.request";
import {JwtService} from "@nestjs/jwt";
import User from "@app/infrastructure/model/user";
import * as bcrypt from 'bcrypt'
import {LoginResponse} from "@app/domain/backoffice/response/login/login.response";

//export const privateKEY = fs.readFileSync('./src/config/aut/jwt/key/lbc-private.pem', 'utf8');
//export const publicKEY = fs.readFileSync('./src/config/auth/jwt/key/lbc-public.pem', 'utf8');

@Injectable()
export class LoginUsecase {

    private readonly _gateway: AuthGateway
    private readonly _jwtService: JwtService

    constructor(@Inject('AuthGateway') gateway: AuthGateway, jwtService: JwtService) {
        this._gateway = gateway
        this._jwtService = jwtService
    }

    public async execute(request: LoginRequest) {
        const user = await this.getUser(request)
        if (user instanceof User) {
            const isMismatch = await this.passwordMismatch(user, request)
            if (isMismatch === true) {
                const tokens = await this.generateToken(user)
                if (tokens !== null) {
                    new LoginResponse(tokens.token, tokens.refreshToken, user.roleId)
                }
            } else {
                return new LoginResponse()
            }
        } else {
            return new LoginResponse()
        }
    }

    private async getUser(request: LoginRequest) {
        return await this._gateway.getUser(request.email).then(function (user) {
            return user
        })
    }

    private async passwordMismatch(user: User, request: LoginRequest) {

        return await bcrypt.compare(request.password, user.password).then(function (mismatch) {
            return mismatch
        })
    }

    private async generateToken(user: User) {

        const payload = {
            'id': user.id,
            'firstname': user.firstname,
            'lastname': user.lastname,
            'username': user.lastname,
            'email': user.email,
            'roleId': user.roleId
        }

        const token = this._jwtService.sign(payload)

        const refreshToken = this._jwtService.sign(payload)

        return {token: token, refreshToken: refreshToken}

    }

}