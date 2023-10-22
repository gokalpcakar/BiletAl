import React, { useState } from 'react';
import { useField } from 'formik';
import Styles from "./Styles.module.css";

const TextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <div className={Styles.container}>
            <label htmlFor={props.id || props.name}>
                {label}
            </label>
            <input {...field} {...props}/>
            

            {meta.touched && meta.error ? (
                <div className={Styles.error}>{meta.error}</div>) : null
            }
        </div>
    );
};

export default TextInput;