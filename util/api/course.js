import db from '../firebase/firebaseInit';
import { doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import { convertDoc } from './helpers';

const getCourse = async (id) => {
  const courseRef = doc(db, `courses/${id}`);
  const courseSnapshot = await getDoc(courseRef);
  const course = convertDoc(courseSnapshot);
  return Promise.resolve(course);
}

const updateCourse = (id, updates) => {
  const courseRef = doc(db, `courses/${id}`);
  return updateDoc(courseRef, updates);
}

export { getCourse, updateCourse }