// import StatusFilter from "components/StatusFilter/StatusFilter";
import TaskCounter from "components/TaskCounter/TaskCounter";
import TaskForm from "components/TaskForm/TaskForm";
import TaskList from "components/TaskList/TaskList";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "redux/tasks/operations";
import { selectError, selectIsLoading } from "redux/tasks/selectors";
import { TaskSection, TaskWrapper } from "./TaskPage.styled";


const TaskPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
      <TaskWrapper>
        <TaskSection>
          {/* <h2>Filter by status</h2>
                <StatusFilter /> */}
          <TaskForm />
          {isLoading && !error && <b>Request in progress...</b>}
        </TaskSection>

        <TaskSection>
          <TaskCounter />
          <TaskList />
        </TaskSection>
      </TaskWrapper>
    );
};

export default TaskPage;