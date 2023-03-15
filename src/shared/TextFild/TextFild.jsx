import { useMemo } from "react";
import { nanoid } from "nanoid";

import { Field, Wraper } from "./TextFild.styled";

const TextField = ({ label, handleChange, ...props }) => {
    const id = useMemo(() => nanoid(), []);

    return (
        <Wraper>
            <label htmlFor={id}>{label}</label>
            <Field id={id} onChange={handleChange} {...props} />
        </Wraper>
    )
}

export default TextField;