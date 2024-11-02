import { addFeed, aparecerFeed, apareceIndividual } from "../repository/feedBacksRepository.js";
import {Router} from 'express';

const endpoint = Router();

endpoint.post('/addFeed/:id/:comentario', async (req, resp) => {
    let {id, comentario} = req.params;
    let registro = await addFeed(id, comentario);
    resp.send({ 
        novoId:registro
    });
});

endpoint.get('/aparecerFeed', async (req, resp) => { 
    let registro= await aparecerFeed();
    resp.send(registro);
});


endpoint.get('/aparecer/individual/:id', async (req, resp) =>{
    let id = req.params.id;
    let registro = await apareceIndividual(id);
    resp.send(registro)
});

export default endpoint;