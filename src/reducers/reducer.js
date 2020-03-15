import produce from "immer";
import { ADD_COURSE } from "../consts";

const initialState = [{ courses: [] }];

const reducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_COURSE:
      draft.courses.push(action.payload);
  }
}, initialState);

export default reducer;
