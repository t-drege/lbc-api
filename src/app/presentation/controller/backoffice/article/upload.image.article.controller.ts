import {Controller, Post, Req, Res, UploadedFile, UseInterceptors} from "@nestjs/common";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";

@Controller('/articles/upload/image')
export class UploadImageArticleController {

    @Post()
    @UseInterceptors(FileInterceptor('upload', {
        storage: diskStorage({
            destination: './public/upload/image',
            filename: (req, file, cb) => {
                const name = file.originalname.split('.')[0];
                const fileExtName = file.originalname.split('.')[1];
                const randomName = Array(30)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                cb(null, `${randomName}.${fileExtName}`)
            }
        })
    }))
    uploadImageArticleAction(@Req() req, @Res() res, @UploadedFile() file: Express.Multer.File) {
        res.send({url: `${req.protocol}://${req.get('host')}/images/${file.filename}`})
    }
}