const {Router} = require('express');
const routes = Router();
const DevController = require('./Controllers/DevController')
const DevSearch = require('./Controllers/SearchController')

routes.post('/devs', DevController.store)
routes.get('/devs', DevController.index)




module.exports = routes;
