import React, { useState } from "react";
import { addCourse } from "../actions";
import { connect } from "react-redux";

function NewCourse({ saveInProgress, saveError, dispatch }) {
  const [courseName, setValue] = useState("");
  const [coursePrice, setPrice] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCourse(courseName));
  };
  return (
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
              <input
                type="text"
                className="form-control"
                placeholder="Course price"
                id="curse_price"
                name="curse_price"
                value={coursePrice}
                disabled={saveInProgress}
                onChange={e => setPrice(e.target.value)}
                // required
              />
              {saveError && <div>Error{saveError.message}</div>}
            </label>
          </div>
        </div>
        <button>Create course</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  saveInProgress: state.saveInProgress,
  saveError: state.saveError
});

export default connect(mapStateToProps)(NewCourse);
