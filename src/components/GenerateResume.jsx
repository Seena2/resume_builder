const GenerateResume = ({ resume, setResume }) => {
  //render the entire resume when the generate resume button is clicked
  return (
    <div className="generate">
      <div className="generated-resume">
        <div className="top-center">
          <h1>{resume.fullName.toUpperCase()}</h1>
          <p>{resume.profession}</p>
        </div>
        <div className="section-display">
          <h4>Profile</h4>
          <div className="section-content">
            <div>
              {resume.dob && (
                <p>
                  <span>Dob:</span> <i>{resume.dob}</i>
                </p>
              )}
            </div>
            <div>
              {resume.gender && (
                <p>
                  <span>Gender:</span> <i>{resume.gender}</i>
                </p>
              )}
            </div>
            <div>
              {resume.email && (
                <p>
                  <span>Email:</span> <i>{resume.email}</i>
                </p>
              )}
            </div>
            <div>
              {resume.phone && (
                <p>
                  <span>Phone:</span> <i>{resume.phone}</i>
                </p>
              )}
            </div>
            <div>
              {resume.city && (
                <p>
                  <span>City:</span> <i>{resume.city}</i>
                </p>
              )}
            </div>
            <div>
              {resume.country && (
                <p>
                  <span>Country:</span> <i>{resume.country}</i>
                </p>
              )}
            </div>
          </div>
        </div>

        <hr />
        <div className="section-display">
          <h4>Education</h4>
          <div className="section-content">
            <ul>
              {resume.education.map((edu) => (
                <div key={edu.id}>
                  <p>
                    <span>Studied:</span>
                    {edu.study}
                  </p>
                  <p>
                    <span>School:</span>
                    {edu.schoolName}
                  </p>
                  <span>From:</span>
                  <i>
                    {edu.startDate} - {edu.endDate}
                  </i>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <div className="section-display">
          <h4>Experiance</h4>
          <div className="section-content">
            {resume.experience.map((expr) => (
              <div key={expr.id}>
                <p>
                  <span>Organization:</span> {expr.companyName}
                </p>
                <p>
                  <span>Position:</span>
                  {expr.position}
                </p>
                <p>
                  <span>Period:</span>
                  {expr.from} - {expr.until}
                </p>
                <div>
                  <p>
                    <span>Responsibilities:</span>
                  </p>
                  <ul className="preview-ul">
                    {expr.responsibilities.map((item) => (
                      <li key={item.id}>
                        <i className="preview-data"> {item.task}</i>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateResume;
