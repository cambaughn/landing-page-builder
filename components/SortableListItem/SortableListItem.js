import React, { useState, useEffect } from 'react';
import styles from './SortableListItem.module.scss';
import { SortableElement } from 'react-sortable-hoc';

const SortableListItem = SortableElement(({ section }) => {
  return (
    <div className={styles.container}>
      <span>{section.title}</span>
    </div>
  )
})

export default SortableListItem;