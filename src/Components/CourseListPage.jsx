import React, { useState } from "react";
import { connect } from "react-redux";
function CourseListPage({ courses }) {
  const [value, setValue] = useState("");
  setValue = e => {
    return {
      [e.target.name]: e.target.value
    };
  };
  return courses.length === 0 ? (
    <div>
      <p className="h2">Create new course</p>
      <form>
        <div className="row">
          <div className="col">
            <label htmlFor="firstName">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id="firstName"
                name="firstName"
              />
            </label>
          </div>
          <div className="col">
            <label htmlFor="lastName">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                id="lastName"
                name="lastName"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <ul>
      {courses.map((course, i) => {
        return <li key={i}>{course.name}</li>;
      })}
    </ul>
  );
}

CourseListPage.defaultProps = {
  courses: []
};

const mapStateToProps = state => ({
  courses: state.courses
});
export default connect(mapStateToProps)(CourseListPage);
