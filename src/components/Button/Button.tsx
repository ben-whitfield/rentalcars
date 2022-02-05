import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    /** Which type of button */
    type: 'submit'|'button'|'reset'
    /** The text of the button */
    text: string
}

const Button = ({ type, text }: ButtonProps) => {
    return <button className={styles.button} type={type}>{text}</button>;
};

export default Button;
