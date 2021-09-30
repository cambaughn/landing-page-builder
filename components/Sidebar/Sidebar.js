import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import { arrayMove } from 'react-sortable-hoc';
import SortableSectionList from '../SortableSectionList/SortableSectionList';
import { useSelector } from 'react-redux';
import SectionEditor from '../SectionEditor/SectionEditor';

export default function Sidebar({ sections, updateSections }) {
  const editingSection = useSelector(state => state.editingSection);
  const course = useSelector(state => state.course);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let updatedSections = arrayMove(sections, oldIndex, newIndex);
    updateSections(updatedSections);
  }

  return (
    <div className={styles.container}>
      { !editingSection &&
        <div className={styles.sectionList}>
          <h2>Sections</h2>
          <SortableSectionList sections={sections} onSortEnd={onSortEnd} useDragHandle={true} />
        </div>
      }

      { !!editingSection &&
        <SectionEditor />
      }
    </div>
  )
}
