import React from 'react';
import styles from './DragHandle.module.scss';
import { SortableHandle } from 'react-sortable-hoc';
import { MoreVertical } from 'react-feather';


const DragHandle = SortableHandle(() => (
  <div className={styles.dragHandle}>
    <MoreVertical className={styles.moreIcon} />
    <MoreVertical className={styles.moreIcon} />
  </div>
));

export default DragHandle;