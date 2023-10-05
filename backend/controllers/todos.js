const Todo = require('../models/todo');

exports.todos = (req, res) => {
  Todo.find()
    .then(todo => res.json(todo))
    .catch(err =>
      res
        .status(404)
        .json({ message: 'Failed to display todos', error: err.message })
    );
};

exports.createTodo = (req, res) => {
  Todo.create(req.body)
    .then(data => res.json({ message: 'Successfully created a todo', data }))
    .catch(err =>
      res
        .status(400)
        .json({ message: 'Failed to create a todo', error: err.message })
    );
};

exports.updateTodo = (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body)
    .then(todo => res.json({ message: 'Successfully updated todo', todo }))
    .catch(err =>
      res
        .status(400)
        .json({ message: 'Failed to update todo', error: err.message })
    );
};

exports.deleteTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.id, req.body)
    .then(data => res.json({ message: 'Successfully deleted todo', data }))
    .catch(err =>
      res
        .status(404)
        .json({ message: 'Failed to delete todo', error: err.message })
    );
};
