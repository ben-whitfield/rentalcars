import React, { ChangeEventHandler } from 'react';
import styles from './FormInput.module.css';

interface FormInputProps {
    /** Id of the input */
    id: string
    /** Which type of button */
    type: string
    /** The text of the button */
    text: string
    inputChange: ChangeEventHandler
    value: string
}

const FormInput = ({ id, type, text, inputChange, value }: FormInputProps) => {
    return ( 
      <label htmlFor={id}>{text}
        <input id={id} name='searchTerm' value={value} className={styles.input} type={type} onChange={inputChange}/>
      </label>
    )
};

export default FormInput;