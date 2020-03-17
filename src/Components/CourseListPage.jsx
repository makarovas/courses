import React, { useState } from "react";
import { connect } from "react-redux";
import { addCourse } from "../actions";

function CourseListPage({ courses, dispatch }) {
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

  return courses.length === 0 ? (
    <div>
      <p className="h2">Create new course</p>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <label htmlFor="firstName">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id="firstName"
                name="firstName"
                value={courseName}
                onChange={e => setValue(e.target.value)}
                // required
              />
            </label>
          </div>
          <div className="col">
            <label htmlFor="lastName">
              <input
                required
                type="text"
                className="form-control"
                placeholder="Last name"
                id="lastName"
                name="lastName"
                onChange={e => setValue(e.target.value)}
                value={courseName}
              />
            </label>
          </div>
        </div>
        <button>Create course</button>
      </form>
    </div>
  ) : (
    <div>
      <ul className="list-group">
        {courses.map((course, i) => {
          debugger;

          return (
            <li key={i} className="list-group-item list-group-item-action">
              {course.course.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

CourseListPage.defaultProps = {
  courses: []
};

const mapStateToProps = state => ({
  courses: state.courses
});
export default connect(mapStateToProps)(CourseListPage);
