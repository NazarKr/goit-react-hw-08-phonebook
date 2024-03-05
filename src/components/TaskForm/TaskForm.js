import { useDispatch, useSelector } from "react-redux";
import { Button } from 'shared/Buttons/Buttons';
// import css from "./TaskForm.module.css";
import { addTask } from 'redux/tasks/operations';
import { toast } from 'react-toastify';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  PhonebookForm as Form,
  Input,
  Label,
  Error,
  InputText,
} from '../ContactForm/ContactForm.styled';

const ValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  text: Yup.string().min(2, 'Too Short!').max(200, 'Too Long!'),
});

const TaskForm = () => {
  const dispatch = useDispatch();
  const task = useSelector(store => store.contacts.items);

  const handleAddTask = data => {
    const title = data.title;
    if (task.find(task => task.title === title)) {
      toast.warning(`${title} is already in contacts`);
      return;
    }

    const text = data.text;
    const action = addTask({ title, text });

    dispatch(action);
  };

  return (
    <Formik
      initialValues={{
        title: '',
        text: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={({ title, text }, { resetForm }) => {
        const task = {
          title: title,
          text: text,
        };

        handleAddTask(task);
        toast.info(`Task was add ${task.title}`);
        resetForm();
      }}
    >
      <Form>
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" placeholder="Title" />
        <ErrorMessage name="title" component={Error} />

        <Label htmlFor="text">Text</Label>
        <InputText id="text" name="text" placeholder="Text" />
        <ErrorMessage name="text" component={Error} />

        <Button type="submit" disabled={false} children="Add tack"></Button>
      </Form>
    </Formik>
  );
};

export default TaskForm;