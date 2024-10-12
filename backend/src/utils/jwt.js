import jwt from 'jsonwebtoken';
const KEY = "$--FEELGOOD--$"

export function createToken(token) {
    return jwt.sign(token, KEY);
}

export function useAutentify(req, resp, next) {
    return autentify(req, resp, next);
}

export function autentify(req, resp, next) {
    try {
        let token = req.headers['KEY'];

        if (token == undefined) {
            token = req.query['KEY'];
            let signd = jwt.verify(token, KEY);
            req.user = signd;
            next();
        }
    } catch (error) {
        resp.status(401).end();
    }    
}

