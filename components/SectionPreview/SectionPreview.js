import React, { useEffect } from 'react';
import styles from './SectionPreview.module.scss';
import classNames from 'classnames';

export default function SectionPreview({ section, selected, firstSection }) {

  return (
    <div className={classNames(styles.container, { [styles.firstSection]: firstSection, [styles.selected]: selected })}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>

      <div className={styles.itemCards}>
        { section.items.map((item, index) => {
          return (
            <div className={styles.itemCard} key={index}>
              <span className={styles.itemTitle}>{item.title}</span>
              <span className={styles.itemDescription}>{item.description}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
