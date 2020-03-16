import ADD_COURSE from "../consts/consts";

export const addCourse = name => ({
  type: ADD_COURSE,
  payload: {
    name,
    id: Math.floor(Math.random() * 100)
  }
});
