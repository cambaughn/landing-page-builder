/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/


function setUser(user) {
  return {
    type: 'SET_USER',
    user
  }
}

function setCourse(course) {
  return {
    type: 'SET_COURSE',
    course
  }
}

function setSections(sections) {
  return {
    type: 'SET_SECTIONS',
    sections
  }
}

function setEditingSection(editingSection) {
  return {
    type: 'SET_EDITING_SECTION',
    editingSection
  }
}



export {
  setUser,
  setCourse,
  setSections,
  setEditingSection
};
