import db from '../firebase/firebaseInit';
import { doc, getDoc } from 'firebase/firestore/lite';
import { convertDoc } from './helpers';

const getCourse = async (id) => {
  const courseRef = doc(db, `courses/${id}`);
  const courseSnapshot = await getDoc(courseRef);
  const course = convertDoc(courseSnapshot);
  return Promise.resolve(course);
}

export { getCourse }