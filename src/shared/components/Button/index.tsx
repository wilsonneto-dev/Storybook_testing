import React from 'react';

import styles from './styles.module.css';

export interface ButtonProps {
  label: string;
  featured?: boolean;
} 

const Button: React.FC<ButtonProps> = ({ label, featured }) => {
  return <button className={featured ? styles.featured : styles.default}>{ label }</button>;
}

export default Button;