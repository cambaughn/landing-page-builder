import db from '../firebase/firebaseInit';
import { doc, getDoc, updateDoc, getDocs, collection } from 'firebase/firestore/lite';
import { convertDoc, convertSnapshot } from './helpers';

const getSections = async (sectionIds = []) => {
  const sectionRefs = sectionIds.map(id => doc(db, `sections/${id}`));
  const sectionSnapshots = await Promise.all(sectionRefs.map(ref => getDoc(ref)));
  const sections = sectionSnapshots.map(snapshot => convertDoc(snapshot));
  return Promise.resolve(sections);
}

const updateSection = (id, updates) => {
  const sectionRef = doc(db, `sections/${id}`);
  return updateDoc(sectionRef, updates)
}


const initSections = async () => {
  const sectionsCol = collection(db, "sections");
  const allSections = await getDocs(sectionsCol);
  const sections = convertSnapshot(allSections);

  sections.forEach(section => {
    let items = [
      { title: 'Item name', description: 'this is an item description' },
      { title: 'Item name', description: 'this is an item description' },
      { title: 'Item name', description: 'this is an item description' }
    ]
    updateSection(section.id, { items });
  })
}



export { getSections, updateSection }