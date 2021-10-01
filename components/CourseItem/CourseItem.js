

import React, { useState, useEffect } from 'react';
import styles from './SortableListItem.module.scss';
import { SortableElement } from 'react-sortable-hoc';
import { useDispatch } from 'react-redux';
import { setEditingSection } from '../../redux/actionCreators';
import { shortenString } from '../../util/string';
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
          <h3 className={styles.sectionNumber}>Section {number}</h3>
          { section.heading.length > 0 &&
            <span className={styles.sectionHeading}>{shortenString(section.heading, 40)}</span>
          }
        </div>
      </div>

      <img src='/chevron-right.png' className={styles.chevron} />
    </div>
  )
})

export default CourseItem;