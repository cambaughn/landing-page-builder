import React from 'react';
import styles from './PageBuilder.module.scss';
import Sidebar from '../Sidebar/Sidebar';


export default function PageBuilder({}) {
  return (
    <div className={styles.container}>
        <Sidebar />
    </div>
  )
}
