import {Module} from '@nestjs/common';
import {AuthService} from '@config/auth/auth.service';
import {UsersModule} from '@config/auth/passport/user/user.module';
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "@config/auth/passport/strategy/local.strategy";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "@config/auth/auth.constants";
import {JwtStrategy} from "@config/auth/jwt/jwt.strategy";

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            publicKey: jwtConstants.publicKey,
            privateKey: jwtConstants.privateKey,
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {
}
