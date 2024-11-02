import React, { useState } from "react";

const resumeData = {
  firstName: " ",
  middleName: " ",
  lastName: " ",
  email: "",
  phoneNumber: "",
  education: {
    educationId: "",
    schoolName: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
  },
  experiance: [
    {
      experianceId: "",
      company: "",
      positionTitle: "",
      role: "",
      startDate: "",
      endDate: "",
    },
  ],
};

const Resume = () => {
  //Form hook from istalled #import { useForm } from "react-hook-form";
  //const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const [resume, setResume] = useState(resumeData);

  //handler functions
  /*
    const handleFirstNameChange = (e) => {
        setResume({
            ...resume, //you can list all fields as middleName:resume.middleName, email:resume.email, etc
            firstName: e.target.value,
        });
    }
    const handleMiddleNameChange = (e) => {
        setResume({
            ...resume,
            middleName: e.target.value,
        });
    }
    const handleLastNameChange = (e) => {
        setResume({
            ...resume,
            lastName: e.target.value,
        });
    }
    const handleEmailChange=(e)=>{
        setResume({
            ...resume,
            email:e.target.value,
        })
    }
    const handlePhoneNumberChange=(e)=>{
        setResume({
            ...resume,
            phoneNumber:e.target.value,
        })
    }
*/
  //Or Generic handle function
  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };
  //Nested object values
  const handleSchoolNameChange = (e) => {
    setResume({
      ...resume,
      education: {
        ...resume.education,
        schoolName: e.target.value,
      },
    });
  };
  const handleFieldOfStudyChange = (e) => {
    setResume({
      ...resume,
      education: {
        ...resume.education,
        fieldOfStudy: e.target.value,
      },
    });
  };
  const handleStartDateChange = (e) => {
    setResume({
      ...resume,
      education: {
        ...resume.education,
        startDate: e.target.value,
      },
    });
  };
  const handleEndDateChange = (e) => {
    setResume({
      ...resume,
      education: {
        ...resume.education,
        endDate: e.target.value,
      },
    });
  };

  //Experiance
  const handleCompanyNameChange = (e) => {
    setResume({
      ...resume,
      experiance: [
        {
          ...resume.experiance,
          company: e.target.value,
        },
      ],
    });
  };
  const handlePositionChange = (e) => {
    setResume({
      ...resume,
      experiance: [
        {
          ...resume.experiance,
          positionTitle: e.target.value,
        },
      ],
    });
  };
  const handleExperianceStartDate = (e) => {
    setResume({
      ...resume,
      experiance: [
        {
          ...resume.experiance,
          startDate: e.target.value,
        },
      ],
    });
  };
  const handleExperianceEndDate = (e) => {
    setResume({
      ...resume,
      experiance: [
        {
          ...resume.experiance,
          endDate: e.target.value,
        },
      ],
    });
  };
  const handleRoleChange = (e) => {
    setResume({
      ...resume,
      experiance: [
        {
          ...resume.experiance,
          role: e.target.value,
        },
      ],
    });
  };

  const onSubmit = (data) => {
    setData(data);
  };
  const handleSubmit = () => {
    if (isSubmited) {
      return (
        <div>
          <h1>
            Resume for {resumeData.firstName} {resumeData.lastName}
          </h1>
        </div>
      );
      setIsSubmited(true);
      setResume(resume);
    }
  };

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
