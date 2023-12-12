import { useDispatch } from 'react-redux';
import {
  deleteTask,
  fetchTasks,
  toggleCompleted,
} from 'redux/tasks/operations';
import ButtonIcon from 'shared/Buttons/ButtonIcon';
import { AiOutlineDelete } from 'react-icons/ai';
import { TaskWrapper, TackText, TackTitle } from './Task.styled';
import css from './checkbox.module.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task._id));

  const handleToggle = () => {
    dispatch(toggleCompleted(task));
    dispatch(fetchTasks());
  };

  return (
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

      <ButtonIcon className={css.btn} onClick={() => handleDelete()}>
        <AiOutlineDelete size={24} />
      </ButtonIcon>
    </>
  );
};

export default Task;
