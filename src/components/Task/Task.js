import { useDispatch } from 'react-redux';
import {
  deleteTask,
  fetchTasks,
  toggleCompleted,
} from 'redux/tasks/operations';
import { TackText } from 'components/TaskList/TaskList.styled';
import ButtonIcon from 'shared/Buttons/ButtonIcon';
import { AiOutlineDelete } from 'react-icons/ai';
import { TaskWrapper } from './Task.styled';

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
        <input
          type="checkbox"
          // className={css.checkbox}
          checked={task.done}
          onChange={() => handleToggle(!task.done)}
        />
        <div>
          <TackText>{task.title}</TackText>
          <TackText>{task.text}</TackText>
        </div>
      </TaskWrapper>

      <ButtonIcon
        icon={AiOutlineDelete}
        iconSize={20}
        onClick={() => handleDelete()}
      ></ButtonIcon>
    </>
  );
};

export default Task;
