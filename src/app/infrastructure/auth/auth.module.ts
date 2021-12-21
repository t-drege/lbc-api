import {Module} from '@nestjs/common';
import {AuthService} from '@app/infrastructure/auth/auth.service';
import {UsersModule} from '@app/infrastructure/auth/passport/user/user.module';
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "@app/infrastructure/auth/passport/strategy/local.strategy";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "@app/infrastructure/auth/auth.constants";
import {JwtStrategy} from "@app/infrastructure/auth/jwt/jwt.strategy";

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
