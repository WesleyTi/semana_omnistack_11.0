const express = require('express');
const OngController = require('./controllers/ongController');
const IncidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.post('/sessions', sessionController.create);
routes.get('/profile', profileController.index);
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes; /**Modo de exportar alguma variável de dentro de um arquivo */