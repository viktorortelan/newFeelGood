import { loginADM } from "../repository/admRepository.js";
import { Router } from 'express';
import { createToken } from "../utils/jwt.js";
const endpoint = Router();


endpoint.post('/loginADM', async (req, resp) => {
    try {
        
        let { email, senha } = req.body;

        let x = await loginADM(email, senha);

        if (x === undefined) {
            resp.send({ token: 'undefined' });
        } else {
            const z = createToken(x);
            resp.send({ token: z });
        }

    } catch (err) {
        
        resp.status(404).send({
            err: err.message
        })

    }
});


export default endpoint;