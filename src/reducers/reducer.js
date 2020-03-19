import produce from "immer";
import {
  ADD_COURSE,
  ADD_COURSE_BEGIN,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_ERROR,
  LOAD_COURSES_BEGIN,
  LOAD_COURSES_SUCCESS,
  LOAD_COURSES_ERROR,
  OPEN_NEW_COURSE_MODAL,
  CLOSE_NEW_COURSE_MODAL
} from "../consts";

const initialState = {
  coursesLoading: false,
  coursesError: null,
  saveInProgress: false,
  saveError: false,
  courses: [],
  newCourseModalOpen: false
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_COURSE_BEGIN:
      draft.saveInProgress = true;
      draft.saveError = null;
      return;
    case ADD_COURSE_SUCCESS:
      draft.courses.push(action.payload);
      draft.saveInProgress = null;
      return;
    case ADD_COURSE_ERROR:
      draft.saveInProgress = false;
      draft.saveError = action.error;
      return;
    case LOAD_COURSES_BEGIN:
      draft.coursesLoading = true;
      draft.saveError = action.error;
      return;
    case LOAD_COURSES_SUCCESS:
      draft.coursesLoading = false;
      draft.courses = action.payload;
      return;
    case LOAD_COURSES_ERROR:
      draft.coursesLoading = false;
      draft.saveError = action.error;
      return;

    case OPEN_NEW_COURSE_MODAL:
      draft.newCourseModalOpen = true;
      return;
    case CLOSE_NEW_COURSE_MODAL:
      draft.newCourseModalClose = false;
      return;
    default:
      return;
  }
}, initialState);

export default reducer;
