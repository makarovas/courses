import React, { useState } from "react";
import { connect } from "react-redux";
import { addCourse } from "../actions";
import Modal from "react-modal";

function CourseListPage({
  saveError,
  coursesLoading,
  coursesError,
  courses,
  dispatch,
  saveInProgress
}) {
  const [courseName, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCourse(courseName));
  };
  const [isSubmitting] = useState(false);
  // const handleInputChange = e => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setValue({ [name]: value });
  // };
  if (coursesLoading) {
    return <div>Loading...</div>;
  }
  if (coursesError) {
    return <div>{coursesError.message}</div>;
  }
  return courses.length === 0 ? (
    <>
      <div>
        <p className="h2">Create a new course</p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <label htmlFor="curse_name">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Course name"
                  id="curse_name"
                  name="curse_name"
                  value={courseName}
                  disabled={saveInProgress}
                  onChange={e => setValue(e.target.value)}
                  // required
                />
                {saveError && <div>Error{saveError.message}</div>}
              </label>
            </div>
          </div>
          <button>Create course</button>
        </form>
      </div>
    </>
  ) : (
    <div>
      <ul className="list-group">
        <p className="h2">Your courses list</p>
        <button>New course</button>
        {courses.map((course, i) => {
          return (
            <li key={i} className="list-group-item list-group-item-action">
              {course.name}
            </li>
          );
        })}
      </ul>
      <Modal isOpen={true}>HI</Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  courses: state.courses,
  saveInProgress: state.saveInProgress,
  saveError: state.saveError,
  coursesLoading: state.coursesLoading,
  coursesError: state.coursesError
});
export default connect(mapStateToProps)(CourseListPage);
