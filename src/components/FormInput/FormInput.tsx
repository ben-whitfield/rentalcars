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
      <div className={styles['search-input-wrapper']}>
        <label className={styles['search-label']} htmlFor={id}>{text}</label>
        <span className={styles['search-icon']}></span>
        <input className={styles['search-input']} id={id} name='searchTerm' value={value} type={type} onChange={inputChange}/>
      </div>
    )
};

export default FormInput;