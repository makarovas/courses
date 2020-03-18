import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import NewCourse from "./NewCourse";

function CourseListPage({
  saveError,
  coursesLoading,
  coursesError,
  courses,
  dispatch,
  saveInProgress
}) {
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
  return courses.length === 0 ? null : (
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
      <Modal isOpen={true}>
        <NewCourse />
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  courses: state.courses,
  coursesLoading: state.coursesLoading,
  coursesError: state.coursesError
});
export default connect(mapStateToProps)(CourseListPage);
