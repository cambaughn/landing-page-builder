import React, { useState } from 'react';
import styles from './SectionItems.module.scss';
import CourseItemList from '../CourseItemList/CourseItemList';
import { arrayMove } from 'react-sortable-hoc';
import TextInputBlock from '../TextInputBlock/TextInputBlock';

export default function SectionItems({ items = [], updateItems }) {
  const [selectedItem, setSelectedItem] = useState(0);

  const addNewItem = () => {

  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let updatedItems = arrayMove(items, oldIndex, newIndex);
    updateItems(updatedItems);
  }

  const handleChange = (key, value) => {
    let updatedItems = [ ...items ];
    updatedItems[selectedItem][key] = value;
    updateItems(updatedItems);
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>

        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Section Items</h2>
          {/* <div className={styles.addNewButton} onClick={addNewItem}>
            <span>+ Add New</span>
          </div> */}
        </div>


        <CourseItemList items={items} selectItem={(index) => setSelectedItem(index)} selectedItem={selectedItem} onSortEnd={onSortEnd} useDragHandle={true} />

        <div className={styles.textInputWrapper}>
          <TextInputBlock label={'Item Title'} value={items[selectedItem]?.title} handleChange={(value) => handleChange('title', value)} />
        </div>
        <TextInputBlock label={'Item Description'} value={items[selectedItem]?.description} handleChange={(value) => handleChange('description', value)} />
      </div>
    </div>
  )
}
