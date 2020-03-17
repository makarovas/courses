import {
  ADD_COURSE,
  ADD_COURSE_BEGIN,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_ERROR,
  LOAD_COURSES_SUCCESS,
  LOAD_COURSES_BEGIN,
  LOAD_COURSES_ERROR
} from "../consts";
import { createCourse, getCourses } from "../api";

// export const addCourse = name => ({
//   type: ADD_COURSE,
//   payload: {
//     name,
//     id: Math.floor(Math.random() * 100)
//   }
// });

export const addCourse = name => {
  return dispatch => {
    dispatch({ type: ADD_COURSE_BEGIN });
    createCourse(name)
      .then(course => {
        dispatch({
          type: ADD_COURSE_SUCCESS,
          payload: { course }
        });
      })
      .catch(error => {
        dispatch({ type: ADD_COURSE_ERROR, error });
      });
  };
};

export const loadCourses = () => {
  return dispatch => {
    dispatch({ type: LOAD_COURSES_BEGIN });
    getCourses()
      .then(courses => {
        dispatch({ type: LOAD_COURSES_SUCCESS, payload: courses });
      })
      .catch(err => {
        dispatch({ type: LOAD_COURSES_ERROR, payload: err });
      });
  };
};
