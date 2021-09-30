import { combineReducers } from 'redux';

const mockSections = [
  { heading: 'Building for the Creator Economy', id: 1 },
  { heading: 'A 3-week-long intimate workshop-style course with the person who coined the term “Passion Economy”', id: 2 },
  { heading: 'Who this course is for', id: 3 },
  { heading: 'Topics Li will cover', id: 4 },
  { heading: 'Meet your instructor', id: 5 }
]

const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    default:
      return state;
  }
}

const course = (state = {}, action) => {
  switch (action.type) {
    case 'SET_COURSE':
      return action.course;
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

const editingSection = (state = null, action) => {
  switch (action.type) {
    case 'SET_EDITING_SECTION':
      return action.editingSection;
    default:
      return state;
  }
}


const pageBuilderApp = combineReducers({
  user,
  course,
  sections,
  editingSection
});

export { pageBuilderApp };
