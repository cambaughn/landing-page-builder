import React, { useState } from 'react';
import styles from './SectionItems.module.scss';
import CourseItemList from '../CourseItemList/CourseItemList';
import { arrayMove } from 'react-sortable-hoc';

export default function SectionItems({ items = [], updateItems }) {
  const [selectedItem, setSelectedItem] = useState(0);

  const addNewItem = () => {

  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let updatedItems = arrayMove(items, oldIndex, newIndex);
    updateItems(updatedItems);
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


        <CourseItemList items={items} selectItem={(index) => setSelectedItem(index)} selectedItem={selectedItem} onSortEnd={onSortEnd} useDragHandle={true} />
      </div>
    </div>
  )
}
