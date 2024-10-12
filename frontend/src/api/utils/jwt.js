import jwt from 'jsonwebtoken';
const KEY = "$--FEELGOOD--$";

export function createToken(payload) {
    return jwt.sign(payload, KEY);
}

export function useAutentify(req, resp, next) {
    return autentify(req, resp, next);
}

export function autentify(req, resp, next) {
    try {
        let token = req.headers['authorization'];

        if (token && token.startsWith('Bearer ')) {
            token = token.slice(7); // Remove 'Bearer ' da string
        } else {
            token = req.query['KEY']; // Caso o token venha pela query string
        }

        if (!token) {
            return resp.status(401).json({ error: 'Token não fornecido' });
        }

        const decoded = jwt.verify(token, KEY); // Verifica o token
        req.user = decoded; // Anexa os dados do token ao request
        next(); // Passa para o próximo middleware

    } catch (error) {
        return resp.status(401).json({ error: 'Token inválido' });
    }
}
