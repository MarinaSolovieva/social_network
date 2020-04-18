import React from "react";
import s from "./FormsControls.module.css"
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + ( hasError ? s.error : " ") }>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {  hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + ( hasError ? s.error : " ") }>
            <div>
                <input {...input} {...props}/>
            </div>
            {  hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const createField = (placeholder,component, name, validators, props = {}, text = "") => {
   return (
       <div>
        <Field placeholder={placeholder} component={component}
               name={name}
               validate={validators}
               {...props}
        /> {text}
    </div>
   )
}