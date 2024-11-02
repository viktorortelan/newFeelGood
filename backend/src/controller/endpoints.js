import { Router } from "express";
import multer from "multer";

import storage from "../repository/multer.js";

import addImoveis from "../repository/addImoveisRepository.js";
import viewImoveis from "../repository/viewImoveisRepository.js";
import addClient from "../repository/addClientRepository.js";
import viewClient from "../repository/viewClientRepository.js";
import verifyId from '../repository/verifyIdRepository.js'
import selectCount from "../repository/selectCountRepository.js";
import { readToken } from "../utils/jwt.js";
import addPictureCliente from "../repository/addPictureClienteRepository.js";
import addPictureCorretor from "../repository/addPictureCorretorRepository.js";
import find from "../repository/findNameImgRepository.js";
import findImgCliente from "../repository/findNameImgClienteRepository.js";


const endpoint = Router();
const m = multer({ storage });

export default endpoint;

endpoint.post('/addImoveis/:nm_imagem/:nm_galeria/:nm_apartamento/:st_status/:rg_regiao/:lc_localizacao/:st_suites/:com_tamanho/:vg_vagas/:tt_titulo/:sb_sobre/:corretor_responsavel/:vendido', async (req, resp) => {

  const { nm_imagem, nm_galeria, nm_apartamento, st_status, rg_regiao, lc_localizacao, st_suites, com_tamanho, vg_vagas, tt_titulo, sb_sobre, corretor_responsavel, vendido } = req.params;

  const x = await addImoveis(nm_imagem, nm_galeria, nm_apartamento, st_status, rg_regiao, lc_localizacao, st_suites, com_tamanho, vg_vagas, tt_titulo, sb_sobre, corretor_responsavel, vendido);

  resp.send({ x });

});

endpoint.get('/viewImoveis', async (req, resp) => {

  const x = await viewImoveis();

  resp.send(x);

});

endpoint.put('/addClient/:data/:email', async (req, resp) => {

  const { data, email } = req.params;
  await addClient(data, email);
  resp.send();
});

endpoint.get('/viewClient', async (req, resp) => {

  const x = await viewClient();

  resp.send(x);

})

endpoint.post('/multer', m.single('img'), (req, resp) => {

  const { filename, originalname, destination, mimetype } = req.file;

  const obj = {
    fl: filename,
    og: originalname,
    dt: destination,
    mt: mimetype
  }

  resp.send(obj);

});

endpoint.get('/verifyId/:id', async (req, resp) => {
  const { id } = req.params;
  const x = await verifyId(id);
  resp.send(x);

});

endpoint.get('/selectCount', async (req, resp) => {
  const x = await selectCount();
  const value = x.length;
  const obj = {
    rows: value
  }
  resp.send(obj);
});

endpoint.get('/readToken/:token', (req, resp) => {
  const { token } = req.params;
  const x = readToken(token);
  resp.send(x);
});

endpoint.put('/addPictureCorretor/:value/:reference', async (req, resp) => {

  const { value, reference } = req.params;
  const x = await addPictureCorretor(value, reference);
  resp.send(x);

});

endpoint.put('/addPictureCliente/:value/:reference', async (req, resp) => {

  const { value, reference } = req.params;
  const x = await addPictureCliente(value, reference);
  resp.send(x);

});

endpoint.get('/find/:id', async (req, resp) => {

  const { id } = req.params;
  const x = await find(id);
  resp.send(x);
  
});

endpoint.get('/findImgCliente/:id', async (req, resp) => {

  const { id } = req.params;
  const x = await findImgCliente(id);
  resp.send(x);
  
});

// testando acesso de imagens dentro da API

endpoint.get('/img/:name', (req, resp) => {
  const { name } = req.params;
  resp.send({ url: `http://localhost:8080/imgs/${name}` });
});


