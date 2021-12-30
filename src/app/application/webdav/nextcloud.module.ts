import {Global, Module} from "@nestjs/common";
import {NextCloud} from "@app/application/webdav/nextcloud";

@Global()
@Module({
    providers: [
        {
            provide: 'NextCloudImpl',
            useClass: NextCloud
        },
    ],
    exports: [{
        provide: 'NextCloudImpl',
        useClass: NextCloud
    }]
})
export class NextCloudModule {
}