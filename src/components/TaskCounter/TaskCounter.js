import { useSelector } from "react-redux";
import { selectTaskCount } from 'redux/tasks/selectors';
import { TaskCounterText, TaskCounterWrapper } from "./TaskCounter.styled";

const TaskCounter = () => {
  const { active, completed } = useSelector(selectTaskCount);

  return (
    <TaskCounterWrapper>
      <TaskCounterText>Active: {active}</TaskCounterText>
      <TaskCounterText>Completed: {completed}</TaskCounterText>
    </TaskCounterWrapper>
  );
};

export default TaskCounter;
