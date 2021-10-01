

import React from 'react';
import styles from './CourseItem.module.scss';
import classNames from 'classnames';
import { SortableElement } from 'react-sortable-hoc';
import { useDispatch } from 'react-redux';
import { setEditingSection } from '../../redux/actionCreators';
import DragHandle from '../DragHandle/DragHandle';

const CourseItem = SortableElement(({ item, number, selectItem, selected }) => {
  const dispatch = useDispatch();

  const editSection = () => {
    dispatch(setEditingSection(section.id));
  }

  return (
    <div className={classNames(styles.container, { [styles.selected]: selected })} onClick={selectItem}>
      <div className={styles.leftSide}>
        <DragHandle />
        <div className={styles.textWrapper}>
          <h3 className={styles.itemNumber}>Item {number}</h3>
        </div>
      </div>
    </div>
  )
})

export default CourseItem;