import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './PageBuilder.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import Sections from '../Sections/Sections';
import { setSections } from '../../redux/actionCreators';

export default function PageBuilder({}) {
  const sections = useSelector(state => state.sections);
  const dispatch = useDispatch();

  const getSections = async () => {
    let sectionsForUser = [];
    updateSections(sectionsForUser);
  }

  const updateSections = (updatedSections) => {
    dispatch(setSections(updatedSections));
  }

  // useEffect(getSections, []);

  return (
    <div className={styles.container}>
      <Sidebar sections={sections} updateSections={updateSections} />
      <Sections sections={sections} />
    </div>
  )
}
