import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './PagePreview.module.scss';
import SectionPreview from '../SectionPreview/SectionPreview';


export default function PagePreview({}) {
  const sections = useSelector(state => state.sections);
  const editingSection = useSelector(state => state.editingSection);

  return (
    <div className={styles.container}>
      { sections.filter(section => !section.hidden).map((section, index) => {
        return (
          <SectionPreview section={section} selected={editingSection === section.id} firstSection={index === 0} key={section.id} />
        )
      })}
    </div>
  )
}
