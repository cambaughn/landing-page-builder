import React, { useState } from 'react';
import styles from './SectionItems.module.scss';
import CourseItemList from '../CourseItemList/CourseItemList';

export default function SectionItems({ items = [] }) {
  const [selectedItem, setSelectedItem] = useState(0);

  const addNewItem = () => {

  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>

        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Section Items</h2>
          <div className={styles.addNewButton} onClick={addNewItem}>
            <span>+ Add New</span>
          </div>
        </div>


        <CourseItemList items={items} />
      </div>
    </div>
  )
}
