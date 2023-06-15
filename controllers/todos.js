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
      const {description} = req.body;  
      const todo = await pool.query('INSERT INTO Todos (description) VALUES ($1) RETURNING *', [description]);
      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    }
  },
  put: async(req, res) => {
    try {
      const {id} = req.params;
      const {description} = req.body;  
      const todo = await pool.query('UPDATE Todos SET description = $1 WHERE id = $2 RETURNING *', [description, id]);
      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    }
  },
  delete: async(req, res) => {  
    try {
      const {id} = req.params; 
      await pool.query('DELETE FROM Todos WHERE id = $1', [id]);
      res.json(`todo with id ${id} was deleted`);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    }
  }
};
  
module.exports = TodosController;