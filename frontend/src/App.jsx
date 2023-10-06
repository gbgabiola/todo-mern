import axios from 'axios';
import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import { BASE_URL } from './utils/constant';

const App = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then(res => setTodos(res.data))
      .catch(err => console.log(err));
  });

  const createUpdateTodo = () => {
    if (isUpdating === false) {
      axios
        .post(BASE_URL, { title })
        .then(res => {
          console.log(res.data);
          setTitle('');
        })
        .catch(err => console.log(err));
    } else {
      axios
        .put(`${BASE_URL}/${isUpdating}`, { title })
        .then(res => {
          console.log(res.data);
          setTitle('');
          setIsUpdating(false);
        })
        .catch(err => console.log(err));
    }
  };

  const updateTodo = (id, title) => {
    setIsUpdating(id);
    setTitle(title);
  };

  const deleteTodo = id => {
    axios
      .delete(`${BASE_URL}/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
    <main className="container">
      <h1 className="title">TODOs</h1>

      <section className="top">
        <input
          type="text"
          value={title}
          placeholder="Add a Todo..."
          onChange={e => setTitle(e.target.value)}
        />
        <button className="btn" onClick={createUpdateTodo}>
          {isUpdating ? 'Update' : 'Add'}
        </button>
      </section>

      <section className="todos">
        {todos.map(todo => (
          <Todo
            key={todo._id}
            title={todo.title}
            updateTodo={() => updateTodo(todo._id, todo.title)}
            deleteTodo={() => deleteTodo(todo._id)}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
