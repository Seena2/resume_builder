const Experiance = ({
  experienceItem,
  allExperiance,
  resume,
  handleCompanyNameChange,
  handlePositionChange,
  duty,
  handleTaskChange,
  handleAddTask,
  handleDateFromChange,
  handleDateUntilChange,
  handleAddExperiance,
  handleFinishResume,
  isActive,
  onShow,
  onPrev,
}) => {
  return (
    <div className="experiance">
      <div className="infoPara">
        <h4>Section 4</h4>
        <p>
          This section is used to add your work experiance background, you can
          add more than one experiance.
        </p>
        <hr />
      </div>
      {isActive ? (
        <section>
          <fieldset>
            <legend>
              <h3>Experience</h3>
            </legend>
            <div className="sectionContent">
              <div className="formElements">
                <label htmlFor="">
                  company name
                  <input
                    type="text"
                    value={experienceItem.companyName}
                    onChange={handleCompanyNameChange}
                    required
                  />
                </label>
                <label htmlFor="">
                  position title
                  <input
                    type="text"
                    value={experienceItem.position}
                    onChange={handlePositionChange}
                    required
                  />
                </label>
                <div className="smallInputs">
                  <label htmlFor="">
                    From :
                    <input
                      type="date"
                      value={experienceItem.from}
                      onChange={handleDateFromChange}
                      required
                    />
                  </label>
                  <label htmlFor="">
                    Until:
                    <input
                      type="date"
                      value={experienceItem.until}
                      onChange={handleDateUntilChange}
                      required
                    />
                  </label>
                </div>
                <label htmlFor="">
                  Main responsibilities
                  <textarea value={duty.task} onChange={handleTaskChange} />
                </label>
                <div className="additional-data">
                  <button className="btn-task" onClick={handleAddTask}>
                    Add responsibilities
                  </button>
                </div>
                <p className="infoPara">
                  Do you have more experiance to submit? then press the
                  following <b>"Add"</b> button
                </p>
                <div className="additional-data">
                  <button className="add" onClick={handleAddExperiance}>
                    Add more experiance
                  </button>
                </div>
              </div>
              <div className="preview">
                <div className="preview-current">
                  <h4>Experiance</h4>
                  <p>
                    {experienceItem.companyName && (
                      <span>
                        Company:{" "}
                        <i className="preview-data">
                          {" "}
                          {experienceItem.companyName}
                        </i>
                      </span>
                    )}
                  </p>
                  <p>
                    {experienceItem.position && (
                      <span>
                        Position:{" "}
                        <i className="preview-data">
                          {" "}
                          {experienceItem.position}
                        </i>
                      </span>
                    )}
                  </p>
                  <p>
                    {experienceItem.from && (
                      <span>
                        From:{" "}
                        <i className="preview-data"> {experienceItem.from} </i>
                      </span>
                    )}
                  </p>
                  <p>
                    {experienceItem.until && (
                      <span>
                        To:{" "}
                        <i className="preview-data"> {experienceItem.until}</i>
                      </span>
                    )}
                  </p>
                  <div>
                    {experienceItem.responsibilities && (
                      <span>
                        Responsibilities:{" "}
                        <ul className="preview-ul">
                          {experienceItem.responsibilities.map((item) => (
                            <li key={item.id}>
                              <i className="preview-data"> {item.task}</i>
                            </li>
                          ))}
                        </ul>
                      </span>
                    )}
                  </div>
                </div>
                <div className="previewDetails">
                  <ul>
                    {allExperiance.length > 0 &&
                      allExperiance.map((exp) => (
                        <div key={exp.id}>
                          <hr />
                          <div className="preview2Cols">
                            <div>
                              <p>{exp.companyName}</p>
                              <p>{exp.position}</p>
                              <p>{exp.from}</p>
                              <p>{exp.until}</p>

                              <div>
                                Responsibilities:{" "}
                                <ul className="preview-ul">
                                  {exp.responsibilities.map((item) => (
                                    <li key={item.id}>
                                      <i className="preview-data">
                                        {" "}
                                        {item.task}
                                      </i>
                                    </li>
                                  ))}
                                </ul>
                              </div>
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
          </fieldset>
          <div className="buttons">
            <button onClick={onPrev} className="btn-prev">
              Previous Section
            </button>
            <p>Section 4 of 4</p>
            <button onClick={handleFinishResume}>Finish </button>
          </div>
        </section>
      ) : (
        <button onClick={onShow}> Add Experiance </button>
      )}
    </div>
  );
};

export default Experiance;
