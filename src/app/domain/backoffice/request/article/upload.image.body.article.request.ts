export class UploadImageBodyArticleRequest {
    private readonly _protocol: string
    private readonly _host: string
    private readonly _port: string
    private readonly _file: Express.Multer.File

    constructor(protocol: string, host: string, port: string, file: Express.Multer.File) {
        this._protocol = protocol
        this._host = host
        this._port = port
        this._file = file
    }

    get protocol(): string {
        return this._protocol;
    }

    get host(): string {
        return this._host;
    }

    get port(): string {
        return this._port;
    }

    get file(): Express.Multer.File {
        return this._file;
    }

}