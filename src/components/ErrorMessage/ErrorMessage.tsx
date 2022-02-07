import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage = (message: any) => {
    return <div className={styles['error-message']}>{message}</div>;
};

export default ErrorMessage;