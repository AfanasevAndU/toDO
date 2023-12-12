import "./Form.css";
import { useState } from "react";

import React from "react";

const Form = (propse) => {
    const [value, setValue] = useState("");

    return(
        <form onSubmit={e => {
            e.preventDefault();
            propse.putTodo(value);
            setValue("");
        }}>
            <input align="center" type="text" placeholder="Цель" className="input" value={value} onChange={e => setValue(e.target.value)} />
        </form>
    );
}

export default Form;