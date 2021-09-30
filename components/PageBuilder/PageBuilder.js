import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './PageBuilder.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import Sections from '../Sections/Sections';
import { setSections, setUser, setCourse } from '../../redux/actionCreators';
import { getUser } from '../../util/api/user';
import { getCourse } from '../../util/api/course';
import { getSections } from '../../util/api/section';

// Base component for the entire page
// Handles data retrieval from the database for the user, course, and sections
export default function PageBuilder({}) {
  const user = useSelector(state => state.user);
  const course = useSelector(state => state.course);
  const sections = useSelector(state => state.sections);
  const dispatch = useDispatch();
  
  const getUserInfo = async () => {
    // Hard-coding test_user_1 for the prototype. Would enable login for individual users for production.
    let userFromDatabase = await getUser('test_user_1');
    dispatch(setUser(userFromDatabase));
  }  

  const getCourseInfo = async () => {
    // Only utilizing the first course that the user has. In future, could provide ability to switch between courses in the courses array.
    if (user.id && user.courses[0]) {
      let courseFromDatabase = await getCourse(user.courses[0]);
      dispatch(setCourse(courseFromDatabase));
    }
  }

  const getSectionsInfo = async () => {
    if (course.sections) {
      let sectionsFromDatabase = await getSections(course.sections);
      dispatch(setSections(sectionsFromDatabase));
    }
  }

  const updateSections = (updatedSections) => {
    dispatch(setSections(updatedSections));
  }

  useEffect(getUserInfo, []);
  useEffect(getCourseInfo, [user]);
  useEffect(getSectionsInfo, [course]);

  return (
    <div className={styles.container}>
      <Sidebar sections={sections} updateSections={updateSections} />
      <Sections sections={sections} />
    </div>
  )
}
