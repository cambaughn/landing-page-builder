import db from '../firebase/firebaseInit';
import { doc, getDoc, setDoc } from 'firebase/firestore/lite';
import { convertDoc } from './helpers';

const getSections = async (sectionIds = []) => {
  const sectionRefs = sectionIds.map(id => doc(db, `sections/${id}`));
  const sectionSnapshots = await Promise.all(sectionRefs.map(ref => getDoc(ref)));
  const sections = sectionSnapshots.map(snapshot => convertDoc(snapshot));
  return Promise.resolve(sections);
}


export { getSections }