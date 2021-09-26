import React, { useState } from 'react';
import styles from './Sidebar.module.scss';


export default function Sidebar({}) {
  const [sections, setSections] = useState([]);

  return (
    <div className={styles.container}>
      <h2>Sections</h2>
      
    </div>
  )
}
