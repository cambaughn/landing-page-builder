import React from 'react';
import styles from './CourseItemList.module.scss';
import CourseItem from '../CourseItem/CourseItem';
import { SortableContainer } from 'react-sortable-hoc';

const CourseItemList = SortableContainer(({ items }) => {
  return (
    <div className={styles.container}>
      { items.map((item, index) => {
        return (
          <CourseItem item={item} number={index + 1} index={index} key={index} />
        )
      })}
    </div>
  )
})

export default CourseItemList;
