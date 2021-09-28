import React from 'react';
import styles from './SortableSectionList.module.scss';
import SortableListItem from '../SortableListItem/SortableListItem';
import { SortableContainer } from 'react-sortable-hoc';

const SortableSectionList = SortableContainer(({ sections }) => {
  return (
    <div className={styles.container}>
      { sections.map((section, index) => {
        return (
          <SortableListItem section={section} key={index} />
        )
      })}
    </div>
  )
})

export default SortableSectionList;
