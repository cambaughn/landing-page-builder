import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import SortableSectionList from '../SortableSectionList/SortableSectionList';


export default function Sidebar({ sections, updateSections }) {

  const onSortEnd = ({oldIndex, newIndex}) => {
    updateSections(arrayMove(sections, oldIndex, newIndex));
  }

  return (
    <div className={styles.container}>
      <h2>Sections</h2>
      <SortableSectionList sections={sections} />
    </div>
  )
}
