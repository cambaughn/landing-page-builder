import { combineReducers } from 'redux';

const mockSections = [
  { heading: 'Building for the Creator Economy' },
  { heading: 'A 3-week-long intimate workshop-style course with the person who coined the term “Passion Economy”' },
  { heading: 'Who this course is for' },
  { heading: 'Topics Li will cover' },
  { heading: 'Meet your instructor' }
]
const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    default:
      return state;
  }
}

const sections = (state = mockSections, action) => {
  switch (action.type) {
    case 'SET_SECTIONS':
      return action.sections;
    default:
      return state;
  }
}


const pageBuilderApp = combineReducers({
  user,
  sections
});

export { pageBuilderApp };
