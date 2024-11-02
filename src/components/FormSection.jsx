const FormSection = ({ title, isActive, children, onShow }) => {
  return (
    <div className="form-section">
      <h3>{title}</h3>
      {isActive ? (
        <div className="sectionContent">
          <div className="formElements">{children}</div>
        </div>
      ) : (
        <button onClick={onShow}>{`Add ${title}`}</button>
      )}

      {/* <div className="sectionContent">
        <div className="formElements"></div>
        <div className="preview"></div>
      </div>
      <div className="buttons">
        <div></div>
        <p>page 1 of 4</p>
        <button>Next</button>
      </div> */}
    </div>
  );
};

export default FormSection;
