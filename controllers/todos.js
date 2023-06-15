const pool = require('../db');

const TodosController = {
  get: async(req, res) => {
    try {
      const todos = await pool.query('SELECT * FROM Todos');
      console.log(todos.rows)
  
      res.json(todos.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    }
  },
  post: async(req, res) => {
    try {
      console.log(req.body)
      const {description} = req.body;  
      const todo = await pool.query('INSERT INTO Todos (description) VALUES ($1) RETURNING *', [description]);
      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    }
  },
};
  
module.exports = TodosController;