const Education = ({
  educationItem,
  allEducation,
  handleStudyChange,
  handleSchoolChange,
  handleStartChange,
  handleEndChange,
  handleAddEducation,
  isActive,
  onShow,
  onPrev,
  onNext,
}) => {
  return (
    <div className="education">
      <div className="infoPara">
        <h4>Section 3</h4>
        <p>
          This section is used to add your educational background, you can add
          more than one education.
        </p>
        <hr />
      </div>
      {isActive ? (
        <section>
          <h3>Education</h3>
          <div className="sectionContent">
            <div className="formElements">
              {" "}
              <label htmlFor="">
                Title of Study
                <input
                  type="text"
                  value={educationItem.study}
                  onChange={handleStudyChange}
                  required
                />
              </label>
              <label htmlFor="">
                school name
                <input
                  type="text"
                  value={educationItem.schoolName}
                  onChange={handleSchoolChange}
                  required
                />
              </label>
              <div className="smallInputs">
                <label htmlFor="">
                  Start Date:
                  <input
                    type="date"
                    value={educationItem.startDate}
                    onChange={handleStartChange}
                    required
                  />
                </label>
                <label htmlFor="">
                  Finish Date:
                  <input
                    type="date"
                    value={educationItem.endDate}
                    onChange={handleEndChange}
                    required
                  />
                </label>
              </div>
              <p className="infoPara">
                Do you have more education to submit? then press the following{" "}
                <b>"Add"</b> button
              </p>
              <div className="additional-data">
                <button className="add" onClick={handleAddEducation}>
                  Add more education
                </button>
              </div>
            </div>
            <div className="preview">
              <div className="preview-current">
                <h4>Education</h4>
                <p>
                  {educationItem.study && (
                    <span>
                      Study:{" "}
                      <i className="preview-data"> {educationItem.study}</i>
                    </span>
                  )}
                </p>
                <p>
                  {educationItem.schoolName && (
                    <span>
                      School Name:{" "}
                      <i className="preview-data">{educationItem.schoolName}</i>
                    </span>
                  )}
                </p>
                <p>
                  {educationItem.startDate && (
                    <span>
                      From:
                      <i className="preview-data"> {educationItem.startDate}</i>
                    </span>
                  )}
                </p>
                <p>
                  {educationItem.endDate && (
                    <span>
                      To:
                      <i className="preview-data"> {educationItem.endDate}</i>
                    </span>
                  )}
                </p>
              </div>
              <div className="previewDetails">
                <ul>
                  {allEducation.length > 0 &&
                    allEducation.map((edu) => (
                      <div key={edu.id}>
                        <hr />
                        <div className="preview2Cols">
                          <div>
                            <p>{edu.study}</p>
                            <p>{edu.schoolName}</p>
                            <p>{edu.startDate}</p>
                            <p>{edu.endDate}</p>
                          </div>
                          <div>
                            <button className="edit-btn">Edit </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button onClick={onPrev} className="btn-prev">
              Previous Section
            </button>
            <p>Section 3 of 4</p>
            <button onClick={onNext} className="btn-next">
              Next
            </button>
          </div>
        </section>
      ) : (
        <button onClick={onShow}> Add Education </button>
      )}
    </div>
  );
};

export default Education;
