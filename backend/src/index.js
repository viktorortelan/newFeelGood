import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import './repository/conn.js';
import endpoint from './controller/endpoints.js';
import clienteController from './controller/clienteController.js';
import admController from './controller/admController.js';
import gestaImoveisController from './controller/gestaImoveisController.js';
import corretorController from './controller/corretorController.js';
import feedBacksController from './controller/feedBacksController.js';

const api = express();
api.use(cors());
api.use(express.json());
api.use(clienteController);
api.use(endpoint);
api.use(admController);
api.use(gestaImoveisController);
api.use(corretorController);
api.use(feedBacksController);


api.listen(process.env.PORT, () => console.log('API!'));

