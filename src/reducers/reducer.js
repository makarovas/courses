import produce from "immer";
import {
  ADD_COURSE,
  ADD_COURSE_BEGIN,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_ERROR
} from "../consts";

const initialState = { courses: [], loading: false, error: null };

const reducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_COURSE_BEGIN:
      draft.loading = true;
      draft.error = null;
      return;

    case ADD_COURSE_SUCCESS:
      draft.courses.push(action.payload);
      draft.error = null;
      return;
    case ADD_COURSE_ERROR:
      draft.loading = false;
      draft.error = action.error;
      return;
    default:
      return;
  }
}, initialState);

export default reducer;
