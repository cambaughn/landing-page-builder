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
    dispatch(setSections(sectionsForUser));
  }

  useEffect(getSections, []);

  return (
    <div className={styles.container}>
      <Sidebar sections={sections} />
      <Sections sections={sections} />
    </div>
  )
}
