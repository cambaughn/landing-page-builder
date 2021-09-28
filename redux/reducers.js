import { combineReducers } from 'redux';


const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
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


const pageBuilderApp = combineReducers({
  user,
  sections
});

export { pageBuilderApp };
