const Contact = ({
  profile,
  handleEmailChange,
  handlePhoneChange,
  handleCityChange,
  handleCountryChange,
  title,
  isActive,
  onShow,
  onPrev,
  onNext,
}) => {
  return (
    <div className="contact">
      <div className="infoPara">
        <h4>Section 2</h4>
        <p>This section is used to add your contact address</p>
        <hr />
      </div>
      {isActive ? (
        <section>
          <fieldset>
            <legend>
              <h3>Contact Address</h3>
            </legend>

            <div className="sectionContent">
              <div className="formElements">
                <label htmlFor="">
                  Email
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="exampe@email.com"
                    value={profile.email}
                    onChange={handleEmailChange}
                    required
                  />
                </label>
                <label htmlFor="">
                  Phone No:
                  <input
                    type="tel"
                    id="phone"
                    name="phoneNumber"
                    value={profile.phone}
                    onChange={handlePhoneChange}
                    required
                  />
                </label>
                <div className="smallInputs">
                  <label htmlFor="">
                    City:
                    <input
                      type="text"
                      value={profile.city}
                      onChange={handleCityChange}
                      required
                    />
                  </label>
                  <label htmlFor="">
                    Country:
                    <input
                      type="text"
                      value={profile.country}
                      onChange={handleCountryChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="preview">
                <div className="preview-display">
                  <h4>Your Contact Address</h4>
                  <p>
                    {profile.email && (
                      <span>
                        Email: <i className="preview-data"> {profile.email}</i>
                      </span>
                    )}
                  </p>
                  <p>
                    {profile.phone && (
                      <span>
                        Phone: <i className="preview-data"> {profile.phone}</i>
                      </span>
                    )}
                  </p>
                  <p>
                    {profile.city && (
                      <span>
                        City: <i className="preview-data"> {profile.city}</i>
                      </span>
                    )}{" "}
                  </p>
                  <p>
                    {profile.country && (
                      <span>
                        Country:{" "}
                        <i className="preview-data"> {profile.country}</i>
                      </span>
                    )}
                  </p>
                </div>

                <button className="edit-btn">Edit Contact</button>
              </div>
            </div>
          </fieldset>
          <div className="buttons">
            <button onClick={onPrev} className="btn-prev">
              Previous Section
            </button>
            <p>Section 2 of 4</p>
            <button onClick={onNext} className="btn-next">
              Next
            </button>
          </div>
        </section>
      ) : (
        <button onClick={onShow}>Add Contact</button>
      )}
    </div>
  );
};

export default Contact;
