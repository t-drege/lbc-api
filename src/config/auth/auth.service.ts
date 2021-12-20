import {Injectable} from '@nestjs/common';
import {UsersService} from '@config/auth/passport/user/user.service';
import {JwtService} from "@nestjs/jwt";

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
        if (user && user.password === pass) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = {email: user.email};
        return {
            token: this.jwtService.sign(payload, {expiresIn: '60s'}),
        };
    }
}