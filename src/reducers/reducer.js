import produce from "immer";
import { ADD_COURSE } from "../consts";

const initialState = { courses: [] };

const reducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_COURSE:
      debugger;
      draft.courses.push(action.payload);
      return;
    default:
      return;
  }
}, initialState);

export default reducer;
