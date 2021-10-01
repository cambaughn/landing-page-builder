import React from 'react';
import styles from './ItemList.module.scss';
import CourseItem from '../CourseItem/CourseItem';
import { SortableContainer } from 'react-sortable-hoc';

const ItemList = SortableContainer(({ items }) => {
  return (
    <div className={styles.container}>
      { items.map((item, index) => {
        return (
          <CourseItem item={item} index={index} key={index} />
        )
      })}
    </div>
  )
})

export default ItemList;
