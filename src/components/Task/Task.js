import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import {
  deleteTask,
  fetchTasks,
  toggleCompleted,
} from 'redux/tasks/operations';
<<<<<<< Updated upstream
import { TackText } from 'components/TaskList/TaskList.styled';
=======
import ButtonIcon from 'shared/Buttons/ButtonIcon';
import { AiOutlineDelete } from 'react-icons/ai';
import { TaskWrapper, TackText, TackTitle } from './Task.styled';
import css from './checkbox.module.css'
>>>>>>> Stashed changes

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task._id));

  const handleToggle = () => {
    dispatch(toggleCompleted(task));
    dispatch(fetchTasks());
  };

  return (
<<<<<<< Updated upstream
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.done}
        onChange={() => handleToggle(!task.done)}
      />
=======
    <>
      <TaskWrapper>
        <label className={css.checkboxContainer}>
          <input
            className={css.customCheckbox}
            checked={task.done}
            onChange={() => handleToggle(!task.done)}
            type="checkbox"
          />
          <span className={css.checkmark}></span>
        </label>

        <div>
          <TackTitle>{task.title}</TackTitle>
          <TackText>{task.text}</TackText>
        </div>
      </TaskWrapper>
>>>>>>> Stashed changes

      <TackText>{task.title}</TackText>
      <TackText>{task.text}</TackText>

      <button className={css.btn} onClick={() => handleDelete()}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;
