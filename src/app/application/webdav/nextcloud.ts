import {readFileSync} from "fs";
import {Buffer} from "buffer";
import {Injectable} from "@nestjs/common";
import {NextCloudImpl} from "@app/application/webdav/nextcloud.impl";
import {createClient, WebDAVClient} from "webdav";

@Injectable()
export class NextCloud implements NextCloudImpl {

    private readonly nextCloudConfig: WebDAVClient

    constructor() {
        this.nextCloudConfig = createClient(process.env.URL_NEXTCLOUD, {
            username: process.env.USER_NEXTCLOUD,
            password: process.env.PASSWORD_NEXTCLOUD
        })
    }

    public createFolder(name: string) {
        return this.nextCloudConfig.createDirectory(name)
    }

    public createFile(folderId: string, file) {
        return this.nextCloudConfig.putFileContents(`/${folderId}/${file.originalname}`, Buffer.from(readFileSync(file.destination + '/' + file.originalname)), {
            contentLength: file.size,
        })
    }
}