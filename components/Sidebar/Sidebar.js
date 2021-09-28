import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import { arrayMove } from 'react-sortable-hoc';
import SortableSectionList from '../SortableSectionList/SortableSectionList';


export default function Sidebar({ sections, updateSections }) {

  const onSortEnd = ({oldIndex, newIndex}) => {
    updateSections(arrayMove(sections, oldIndex, newIndex));
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h2>Sections</h2>
        <SortableSectionList sections={sections} onSortEnd={onSortEnd} />
      </div>
    </div>
  )
}
