import db from '../firebase/firebaseInit';
import { doc, getDoc } from 'firebase/firestore/lite';
import { convertDoc } from './helpers';

const getUser = async (id) => {
  const userRef = doc(db, `users/${id}`);
  const userSnapshot = await getDoc(userRef);
  const user = convertDoc(userSnapshot);
  return Promise.resolve(user);
}

export { getUser }