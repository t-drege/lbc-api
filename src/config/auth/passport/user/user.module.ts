import { Module } from '@nestjs/common';
import { UsersService } from '@config/auth/passport/user/user.service';

@Module({
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}