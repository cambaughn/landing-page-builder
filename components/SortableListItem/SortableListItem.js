import React, { useState, useEffect } from 'react';
import styles from './SortableListItem.module.scss';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { MoreVertical } from 'react-feather';
import { useDispatch } from 'react-redux';
import { setEditingSection } from '../../redux/actionCreators';
import { shortenString } from '../../util/string';

const SortableListItem = SortableElement(({ section, number }) => {
  const dispatch = useDispatch();
  let DragHandle;
  DragHandle = SortableHandle(() => (
    <div className={styles.dragHandle}>
      <MoreVertical className={styles.moreIcon} />
      <MoreVertical className={styles.moreIcon} />
    </div>
  ));

  const editSection = () => {
    dispatch(setEditingSection(section.id));
  }

  return (
    <div className={styles.container} onClick={editSection}>
      <DragHandle />
      <div className={styles.textWrapper}>
        <h3 className={styles.sectionNumber}>Section {number}</h3>
        <span className={styles.sectionHeading}>{shortenString(section.heading, 40)}</span>
      </div>
    </div>
  )
})

export default SortableListItem;