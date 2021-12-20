import {Injectable} from '@nestjs/common';
import {UsersService} from '@config/auth/passport/user/user.service';
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

    private usersService: UsersService;
    private jwtService: JwtService

    constructor(usersService: UsersService, jwtService: JwtService) {
        this.usersService = usersService
        this.jwtService = jwtService
    }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (user) {
            const isMatched = await bcrypt.compare(pass, user.password)
            if (isMatched === true) {
                const {password, ...result} = user.toJSON();
                return result;
            }
        } else {
            return null
        }
    }

    async login(user: any): Promise<any> {
        const payload = {'id': user.id, 'email': user.email, 'role': user.roleId};
        return {
            token: await this.jwtService.sign(payload, {expiresIn: '7d', algorithm: 'RS256'}),
            refresh_token: await this.jwtService.sign(payload, {expiresIn: '14d', algorithm: 'RS256'})
        };
    }
}