import React from 'react';
import styles from './TextInputBlock.module.scss';


export default function TextInputBlock({ label, value, handleChange }) {

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <input type='text' className={styles.textInput} value={value} onChange={event => handleChange(event.target.value)} />
    </div>
  )
}
