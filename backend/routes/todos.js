const express = require('express');
const router = express.Router();

const {
  todos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todos');

router.get('/', todos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
