import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import {
  deleteTask,
  fetchTasks,
  toggleCompleted,
} from 'redux/tasks/operations';
import { TackText } from 'components/TaskList/TaskList.styled';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task._id));

  const handleToggle = () => {
    dispatch(toggleCompleted(task));
    dispatch(fetchTasks());
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.done}
        onChange={() => handleToggle(!task.done)}
      />

      <TackText>{task.title}</TackText>
      <TackText>{task.text}</TackText>

      <button className={css.btn} onClick={() => handleDelete()}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;
