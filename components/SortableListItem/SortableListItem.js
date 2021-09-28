import React, { useState, useEffect } from 'react';
import styles from './SortableListItem.module.scss';
import { SortableElement } from 'react-sortable-hoc';

const SortableListItem = SortableElement(({ section, number }) => {
  return (
    <div className={styles.container}>
      <span>Section {number}</span>
      <span>{section.heading}</span>
    </div>
  )
})

export default SortableListItem;