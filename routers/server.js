const { Router } = require('express');
const TodosController = require('../controllers/todos.js');

const serverRouter = Router();

serverRouter.get('/todos', TodosController.get);

serverRouter.post('/todos', TodosController.post);

module.exports = {serverRouter};