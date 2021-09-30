import React, { useEffect, useState } from 'react';
import styles from './SectionEditor.module.scss';
import { useSelector } from 'react-redux';
import { ArrowLeft } from 'react-feather';

export default function SectionEditor({}) {
  const editingSection = useSelector(state => state.editingSection);
  const sections = useSelector(state => state.sections);
  const [currentSection, setCurrentSection] = useState({});
  const [sectionNumber, setSectionNumber] = useState(null);

  const getCurrentSection = () => {
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].id === editingSection) {
        setSectionNumber(i + 1);
        setCurrentSection(sections[i]);
        break;
      }
    }
  }
  
  useEffect(getCurrentSection, []);

  return (
    <div className={styles.container}>
      <div className={styles.sectionOptions}>
        <ArrowLeft className={styles.backArrow} size={20} />
        <h1 className={styles.sectionNumber}>Section {sectionNumber}</h1>
        <div className={styles.hideSectionButton}>
          <span>{currentSection.hidden ? 'Show Section' : 'Hide Section'}</span>
        </div>
      </div>
    </div>
  )
}
