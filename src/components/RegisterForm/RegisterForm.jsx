import useForm from "shared/hooks/useForm";
import initialState from "./initialState";
import TextField from "shared/TextFild/TextFild";
import fields from "./fields";
import ButtonTxt from "shared/Buttons/ButtonText";

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    const { name, email, password } = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={name} handleChange={handleChange} {...fields.name} />
            <TextField value={email} handleChange={handleChange} {...fields.email} />
            <TextField value={password} handleChange={handleChange} {...fields.password} />
            <ButtonTxt text="Submit" />
        </form>
    )
}

export default RegisterForm;