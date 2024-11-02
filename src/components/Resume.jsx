import { useState } from "react";
import FormSection from "./FormSection";
import Profile from "./Profile";
import Contact from "./Contact";
import Education from "./Education";
import Experiance from "./Experiance";
import GenerateResume from "./GenerateResume";

const profileData = {
  fullName: " ",
  profession: "",
  gender: "",
  dob: "",
  email: "",
  phone: "",
  city: "",
  country: "",
};
const educationData = {
  id: "",
  study: "", //field of study
  schoolName: "",
  startDate: "",
  endDate: "",
};

const experienceData = {
  id: "",
  companyName: "",
  position: "",
  responsibilities: [],
  from: "",
  until: "",
};
const resumeData = { ...profileData, education: [], experience: [] };
const Resume = () => {
  //state variables
  const [resume, setResume] = useState(resumeData); //store the entire resume data
  const [profile, setProfile] = useState(profileData); //store the Profile section
  //Store each set of education
  const [educationItem, setEducationItem] = useState(educationData);
  //store the all the educations
  const [allEducation, setAllEducation] = useState([]);
  //store each experiance
  const [experienceItem, setExperianceItem] = useState(experienceData);
  //store each task/duty of the employe for particular position
  const [duty, setDuty] = useState({ id: "", task: "" });
  //store the all work experiance
  const [allExperiance, setAllExperiance] = useState([]);
  //state variable to display one section at a time
  const [activeIndex, setActiveIndex] = useState(0);
  //
  const [isSubmited, setIsSubmited] = useState(false);

  //handler functions
  const handleFullNameChange = (e) => {
    //you can list all fields as profile.email:profile.resume.email, etc, but we used spread syntax
    setProfile({ ...profile, fullName: e.target.value });
  };
  //Generic handler
  // handleProfileChange = (e) => {
  //note each input should have to have same value for its name attribute as the profile object key
  //   setProfile({...profile,[e.target.name]: e.target.value,});
  // };

  // //Nested object values,
  // // const handleSchoolNameChange = (e) => {
  // //   setResume({
  // //     ...resume,
  // //     education: {
  // //       ...resume.education,
  // //       schoolName: e.target.value,
  // //     },
  // //   });
  // // };

  // //Experiance
  // const handleCompanyNameChange = (e) => {
  //   setResume({
  //     ...resume,
  //     experiance: [
  //       {
  //         ...resume.experiance,
  //         company: e.target.value,
  //       },
  //     ],
  //   });
  // };

  const handleProfessionChange = (e) => {
    setProfile({ ...profile, profession: e.target.value });
  };
  const handleGenderChange = (e) => {
    setProfile({ ...profile, gender: e.target.value });
  };
  const handleDoBChange = (e) => {
    setProfile({ ...profile, dob: e.target.value });
  };
  //Address
  const handleEmailChange = (e) => {
    setProfile({ ...profile, email: e.target.value });
  };
  const handlePhoneChange = (e) => {
    setProfile({ ...profile, phone: e.target.value });
  };
  const handleCityChange = (e) => {
    setProfile({ ...profile, city: e.target.value });
  };
  const handleCountryChange = (e) => {
    setProfile({ ...profile, country: e.target.value });
  };
  //Education
  const handleStudyChange = (e) => {
    const nextId = allEducation.length + 1;
    setEducationItem({ ...educationItem, id: nextId, study: e.target.value });
  };
  const handleSchoolChange = (e) => {
    setEducationItem({ ...educationItem, schoolName: e.target.value });
  };
  const handleStartChange = (e) => {
    setEducationItem({ ...educationItem, startDate: e.target.value });
  };
  const handleEndChange = (e) => {
    setEducationItem({ ...educationItem, endDate: e.target.value });
  };
  //Experiance
  const handleCompanyNameChange = (e) => {
    const expId = allExperiance.length + 1;
    setExperianceItem({
      ...experienceItem,
      id: expId,
      companyName: e.target.value,
    });
  };
  const handlePositionChange = (e) => {
    setExperianceItem({ ...experienceItem, position: e.target.value });
  };
  const handleTaskChange = (e) => {
    const nextId = experienceItem.responsibilities.length + 1;
    setDuty({ id: nextId, task: e.target.value });
  };
  //Adding each task to the responsibilities
  const handleAddTask = (e) => {
    e.preventDefault();
    if (duty.task !== "") {
      setExperianceItem({
        ...experienceItem,
        responsibilities: [...experienceItem.responsibilities, duty],
      });
    }
    //clear the field after
    setDuty({ ...duty, task: "" });
  };

  const handleDateFromChange = (e) => {
    setExperianceItem({ ...experienceItem, from: e.target.value });
  };
  const handleDateUntilChange = (e) => {
    setExperianceItem({ ...experienceItem, until: e.target.value });
  };

  //Add Additional data
  const handleAddEducation = (e) => {
    e.preventDefault();
    setAllEducation([...allEducation, educationItem]);
    setEducationItem(educationData);
  };
  const handleAddExperiance = (e) => {
    e.preventDefault();
    setAllExperiance([...allExperiance, experienceItem]);
    setExperianceItem(experienceData);
  };

  //Generate resume
  //Add All resume information to the resume state, so we can able to render the entire data from single source
  const handleFinishResume = (e) => {
    e.preventDefault();
    setResume({
      ...profile,
      education: allEducation,
      experience: allExperiance,
    });
  };
  //Submit form

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
    <div className="resume">
      <form>
        <h1 className="form-title">Resume Builder</h1>

        <div className="instructions">
          <h4>Instructions</h4>
          <ul>
            <li>
              The resume builder is prepared in four(4) sections, and click each
              sections <b>"Add"</b> button to fill the sections form.
            </li>
            <li>
              If you want to make modifications to your data press{" "}
              <b>"Edit" </b>button
            </li>
          </ul>
        </div>
        {/* <FormSection
          title="Profile"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          <p>blala </p>
        </FormSection>
        <FormSection
          title="Contact address"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          <input type="text" placeholder="demo" />
        </FormSection>
        <FormSection
          title="Education"
          isActive={activeIndex === 2}
          onShow={() => setActiveIndex(2)}
        >
          <button>Car</button>
        </FormSection>
        <FormSection
          title="Experiance"
          isActive={activeIndex === 3}
          onShow={() => setActiveIndex(3)}
        >
          <div>card</div>
        </FormSection> */}
        <Profile
          profile={profile}
          handleFullNameChange={handleFullNameChange}
          handleProfessionChange={handleProfessionChange}
          handleDoBChange={handleDoBChange}
          handleGenderChange={handleGenderChange}
          title="Profile"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
          onNext={() => setActiveIndex(1)}
        />
        <Contact
          profile={profile}
          handleEmailChange={handleEmailChange}
          handlePhoneChange={handlePhoneChange}
          handleCityChange={handleCityChange}
          handleCountryChange={handleCountryChange}
          title="Contact address"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
          onPrev={() => setActiveIndex(0)}
          onNext={() => setActiveIndex(2)}
        />
        <Education
          educationItem={educationItem}
          allEducation={allEducation}
          handleStudyChange={handleStudyChange}
          handleSchoolChange={handleSchoolChange}
          handleStartChange={handleStartChange}
          handleEndChange={handleEndChange}
          title="Education"
          handleAddEducation={handleAddEducation}
          isActive={activeIndex === 2}
          onShow={() => setActiveIndex(2)}
          onPrev={() => setActiveIndex(1)}
          onNext={() => setActiveIndex(3)}
        />
        <Experiance
          experienceItem={experienceItem}
          allExperiance={allExperiance}
          resume={resume}
          handleCompanyNameChange={handleCompanyNameChange}
          handlePositionChange={handlePositionChange}
          duty={duty}
          handleTaskChange={handleTaskChange}
          handleAddTask={handleAddTask}
          handleDateFromChange={handleDateFromChange}
          handleDateUntilChange={handleDateUntilChange}
          handleAddExperiance={handleAddExperiance}
          handleFinishResume={handleFinishResume}
          isActive={activeIndex === 3}
          onShow={() => setActiveIndex(3)}
          onPrev={() => setActiveIndex(2)}
        />
        <div className="additional-data">
          {console.log(resume)}

          <button className="centerbtn">Generate Resume</button>
        </div>
      </form>
      <GenerateResume resume={resume} setResume={setResume} />
    </div>
  );
};

export default Resume;
