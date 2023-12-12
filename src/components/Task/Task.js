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
import CheckBox from 'shared/CheckBox/CheckBox';

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
        <CheckBox
          checked={task.done}
          onChange={() => handleToggle(!task.done)}
        />

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
