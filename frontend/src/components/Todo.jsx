import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

const Todo = ({ title, updateTodo, deleteTodo }) => {
  return (
    <div className="todo">
      {title}
      <div className="icons">
        <AiFillEdit className="icon" onClick={updateTodo} />
        <RxCross1 className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default Todo;
