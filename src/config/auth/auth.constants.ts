import * as fs from "fs";

export const jwtConstants = {
    privateKey: fs.readFileSync('./src/config/auth/jwt/key/lbc-private.pem', 'utf8'),
    publicKey: fs.readFileSync('./src/config/auth/jwt/key/lbc-public.pem', 'utf8')
};