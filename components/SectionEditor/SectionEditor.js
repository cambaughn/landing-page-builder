import React, { useEffect, useState } from 'react';
import styles from './SectionEditor.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowLeft } from 'react-feather';
import { getSections, updateSection } from '../../util/api/section';
import { setSections, setEditingSection } from '../../redux/actionCreators';
import TextInputBlock from '../TextInputBlock/TextInputBlock';
import SectionItems from '../SectionItems/SectionItems';


export default function SectionEditor({}) {
  const editingSection = useSelector(state => state.editingSection);
  const sections = useSelector(state => state.sections);
  const [currentSection, setCurrentSection] = useState({});
  const [sectionNumber, setSectionNumber] = useState(null);
  const dispatch = useDispatch();

  const goBack = () => {
    dispatch(setEditingSection(null));
  }

  const getCurrentSection = () => {
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].id === editingSection) {
        setSectionNumber(i + 1);
        setCurrentSection(sections[i]);

        console.log('current section ', sections[i]);
        break;
      }
    }
  }

  const toggleHideSection = () => {
    updateCurrentSection({ hidden: !currentSection.hidden });
  }

  const updateCurrentSection = (updates) => {
    setCurrentSection({ ...currentSection, ...updates });
    saveSectionChanges(updates);
  }


  const saveSectionChanges = async (updates) => {
    updateSection(currentSection.id, updates);
    let updatedSections = await getSections(sections.map(section => section.id));
    dispatch(setSections(updatedSections));
  }

  const updateItems = (updatedItems) => {
    console.log('updated items ', updatedItems);
    updateCurrentSection({ items: updatedItems });
  }
  
  useEffect(getCurrentSection, []);

  return (
    <div className={styles.container}>
      <div className={styles.sectionOptions}>
        <ArrowLeft className={styles.backArrow} size={20} onClick={goBack} />
        <h1 className={styles.sectionNumber}>Section {sectionNumber}</h1>
        <div className={styles.hideSectionButton} onClick={toggleHideSection}>
          <span>{currentSection.hidden ? 'Show Section' : 'Hide Section'}</span>
        </div>
      </div>

      <TextInputBlock label={'Section Heading'} value={currentSection.heading} handleChange={(text) => updateCurrentSection({ heading: text })} />

      <SectionItems items={currentSection.items} updateItems={updateItems} />
    </div>
  )
}
