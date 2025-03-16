import React from 'react';
import styles from './ErrorMessage.module.css';


interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className={styles.errorMessage}>{message}</p>;
};

export default ErrorMessage;
