import { Module } from '@nestjs/common';
import { UsersService } from '@app/infrastructure/auth/passport/user/user.service';

@Module({
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}