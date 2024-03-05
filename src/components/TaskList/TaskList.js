import Task from "components/TaskList/Task/Task";
import { useSelector } from "react-redux";
import { selectVisibleTasks } from 'redux/tasks/selectors';
import { TackItemLi, TackListUl } from "./TaskList.styled";


const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);

  return (
    <TackListUl>
      {tasks.map(task => (
        <TackItemLi key={task.id}>
          <Task task={task} />
        </TackItemLi>
      ))}
    </TackListUl>
  );
};

export default TaskList;