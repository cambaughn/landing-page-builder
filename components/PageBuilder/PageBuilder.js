import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './PageBuilder.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import Sections from '../Sections/Sections';
import { setSections, setUser } from '../../redux/actionCreators';
import { getUser } from '../../util/api/user';

// Base component for the entire page
// Handles data retrieval from the database for the user, course, and sections
export default function PageBuilder({}) {
  const user = useSelector(state => state.user);
  const course = useSelector(state => state.course);
  const sections = useSelector(state => state.sections);
  const dispatch = useDispatch();
  
  const getUserInfo = async () => {
    let userFromDatabase = await getUser('test_user_1');
    console.log(userFromDatabase);
    dispatch(setUser(userFromDatabase));
  }

  const getSections = async () => {
    let sectionsForUser = [];
    updateSections(sectionsForUser);
  }

  const updateSections = (updatedSections) => {
    dispatch(setSections(updatedSections));
  }

  useEffect(getUserInfo, []);
  // useEffect(getSections, []);

  return (
    <div className={styles.container}>
      <Sidebar sections={sections} updateSections={updateSections} />
      <Sections sections={sections} />
    </div>
  )
}
