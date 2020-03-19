import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import NewCourse from "./NewCourse";
import { openNewCourseModal, closeNewCourseModal } from "../actions";

function CourseListPage({
  coursesLoading,
  coursesError,
  courses,
  isModalOpen,
  openNewCourseModal,
  closeNewCourseModal
}) {
  const [isSubmitting] = useState(false);
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
        <button onClick={openNewCourseModal}>New course</button>
        {courses.map((course, i) => {
          return (
            <li key={i} className="list-group-item list-group-item-action">
              {course.name}
            </li>
          );
        })}
      </ul>
      <Modal isOpen={isModalOpen} onRequestClose={closeNewCourseModal}>
        <NewCourse />
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  courses: state.courses,
  coursesLoading: state.coursesLoading,
  coursesError: state.coursesError,
  isModalOpen: state.newCourseModalOpen
});
const mapDispatchToProps = {
  openNewCourseModal,
  closeNewCourseModal
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseListPage);
