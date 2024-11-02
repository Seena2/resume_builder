const Profile = ({
  profile,
  handleFullNameChange,
  handleProfessionChange,
  handleDoBChange,
  handleGenderChange,
  isActive,
  onShow,
  onNext,
}) => {
  return (
    <div className="profile">
      <div className="infoPara">
        <h4>Section 1</h4>
        <p>
          This section is used to add your profiles(Name, Gender, Birth date
          ...)
        </p>
        <hr />
      </div>

      {isActive ? (
        <section>
          <fieldset>
            <legend>
              <h3>Profile</h3>
            </legend>

            <div className="sectionContent">
              <div className="formElements">
                <label htmlFor="">
                  Full Name:
                  <input
                    type="text"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleFullNameChange}
                    required
                  />
                </label>
                <label htmlFor="">
                  Profession:
                  <input
                    type="text"
                    value={profile.profession}
                    onChange={handleProfessionChange}
                    required
                  />
                </label>
                <div className="smallInputs">
                  <label htmlFor="">
                    Date of Birth:
                    <input
                      type="date"
                      value={profile.dob}
                      onChange={handleDoBChange}
                      required
                    />
                  </label>
                  <label htmlFor="">
                    Gender:{" "}
                    <select
                      name=""
                      id=""
                      value={profile.gender}
                      onChange={handleGenderChange}
                      required
                    >
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="preview">
                <div className="preview-display">
                  <h4>Profile</h4>
                  <p>
                    {profile.fullName && (
                      <span>
                        Full Name:
                        <i className="preview-data"> {profile.fullName}</i>
                      </span>
                    )}
                  </p>
                  <p>
                    {profile.profession && (
                      <span>
                        Profession:{" "}
                        <i className="preview-data"> {profile.profession}</i>
                      </span>
                    )}
                  </p>
                  <p>
                    {profile.gender && (
                      <span>
                        Gender:
                        <i className="preview-data"> {profile.gender}</i>
                      </span>
                    )}
                  </p>
                  <p>
                    {profile.dob && (
                      <span>
                        Date of birth:{" "}
                        <i className="preview-data"> {profile.dob}</i>
                      </span>
                    )}
                  </p>
                </div>

                <button className="edit-btn">Edit Profile</button>
              </div>
            </div>
          </fieldset>
          <div className="buttons">
            <div></div>
            <p>Section 1 of 4</p>
            <button className="btn-next" onClick={onNext}>
              Next
            </button>
          </div>
        </section>
      ) : (
        <button onClick={onShow}>Add Profile</button>
      )}
    </div>
  );
};

export default Profile;
