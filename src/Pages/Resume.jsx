import React, { useState } from "react";

const Resume = () => {
  //Form hook from istalled #import { useForm } from "react-hook-form";
  //const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const [resume, setResume] = useState(resumeData);

  //handler functions

  return (
    <div className="content ">
      <div className="text-center">
        <h1>Create Resume</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form form-large">
        <fieldset>
          <legend>Profile</legend>
          <label htmlFor="fName">
            First Name:
            <input
              id="fName"
              name="firstName"
              value={resume.firstName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="mName">
            Middle Name:
            <input
              id="mName"
              name="middleName"
              value={resume.middleName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="lName">
            Last Name:
            <input
              id="lName"
              name="lastName"
              value={resume.lastName}
              onChange={handleChange}
            />
          </label>
          <div>
            <h3>Profile</h3>
            <p>First Name: {resume.firstName}</p>
            <p>Middle Name: {resume.middleName}</p>
            <p>Last Name: {resume.lastName}</p>
          </div>
          <button>Edit</button> <button>Next</button>
        </fieldset>

        <fieldset>
          <legend>Contact Address</legend>
          <div className="filedSpacing">
            <label htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                value={resume.email}
                placeholder="exampe@email.com"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="filedSpacing">
            <label htmlFor="phone">
              Phone Number:
              <input
                type="tel"
                id="phone"
                name="phoneNumber"
                value={resume.phoneNumber}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <h3>Contact Address</h3>
            <p>Email: {resume.email}</p>
            <p>Phone Number: {resume.phoneNumber}</p>
          </div>
          <button>Edit</button> <button>Prev</button> <button>Next</button>
        </fieldset>

        <fieldset>
          <legend>Education</legend>
          <div className="label-input">
            <label htmlFor="schoolName">
              School Name:
              <input
                id="schoolName"
                value={resume.education.schoolName}
                onChange={handleSchoolNameChange}
              />
            </label>
          </div>
          <label htmlFor="fieldOfStudy">
            Field of Study:
            <input
              id="fieldOfStudy"
              value={resume.education.fieldOfStudy}
              onChange={handleFieldOfStudyChange}
            />
          </label>
          <label htmlFor="eduStartDate">
            Start Date:
            <input
              type="date"
              id="eduStartDate"
              value={resume.education.startDate}
              onChange={handleStartDateChange}
            />
          </label>
          <label htmlFor="eduEndDate">
            end Date:
            <input
              type="date"
              id="eduEndDate"
              value={resume.education.endDate}
              onChange={handleEndDateChange}
            />
          </label>
          <div>
            <h3>Education</h3>
            <h4></h4>
            <p>School: {resume.education.schoolName}</p>
            <p>Fiel of Study: {resume.education.fieldOfStudy}</p>
            <p>From:{resume.education.startDate}</p>
            <p>to:{resume.education.endDate}</p>
          </div>
          <button>Edit</button> <button>Prev</button> <button>Next</button>
        </fieldset>

        <fieldset>
          <legend>Experiance</legend>
          <div className="filedSpacing">
            <label htmlFor="positionTitle">
              Position Title:
              <input
                id="positionTitle"
                value={resume.experiance[0].positionTitle}
                onChange={handlePositionChange}
              />
            </label>
          </div>
          <div className="filedSpacing">
            <label htmlFor="companyName">
              Company Name:
              <input
                id="companyName"
                value={resume.experiance[0].company}
                onChange={handleCompanyNameChange}
              />
            </label>
          </div>
          <div className="filedSpacing">
            <label htmlFor="expStartDate">
              From:
              <input
                type="date"
                id="expStartDate"
                value={resume.experiance[0].startDate}
                onChange={handleExperianceStartDate}
              />
            </label>
            <label htmlFor="expendDate">
              To:
              <input
                type="date"
                id="expendDate"
                value={resume.experiance[0].endDate}
                onChange={handleExperianceEndDate}
              />
            </label>
            <div className="filedSpacing">
              <label htmlFor="role">
                Main Responsibility/Role:
                <textarea
                  id="role"
                  value={resume.experiance[0].role}
                  onChange={handleRoleChange}
                />
              </label>
            </div>
          </div>
          <div>
            <h3>Experiance</h3>
            <h4></h4>
            <p>Position Title: {resume.experiance[0].positionTitle}</p>
            <p>Company Name: {resume.experiance[0].company}</p>
            <p>From:{resume.experiance[0].startDate}</p>
            <p>to:{resume.experiance[0].endDate}</p>
            <p>Responsiblilites: {resume.experiance[0].role}</p>
          </div>
          <button>Edit</button> <button>Prev</button> <button>Finish</button>
        </fieldset>
      </form>
    </div>
  );
};
//exporting the default function
export default Resume;
