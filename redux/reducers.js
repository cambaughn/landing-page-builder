import { combineReducers } from 'redux';

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

const sections = (state = [], action) => {
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
