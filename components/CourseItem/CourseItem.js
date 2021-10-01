

import React from 'react';
import styles from './CourseItem.module.scss';
import { SortableElement } from 'react-sortable-hoc';
import { useDispatch } from 'react-redux';
import { setEditingSection } from '../../redux/actionCreators';
import DragHandle from '../DragHandle/DragHandle';

const CourseItem = SortableElement(({ item, number }) => {
  const dispatch = useDispatch();

  const editSection = () => {
    dispatch(setEditingSection(section.id));
  }

  return (
    <div className={styles.container} onClick={editSection}>
      <div className={styles.leftSide}>
        <DragHandle />
        <div className={styles.textWrapper}>
          <h3 className={styles.sectionNumber}>Item {number}</h3>
        </div>
      </div>
    </div>
  )
})

export default CourseItem;