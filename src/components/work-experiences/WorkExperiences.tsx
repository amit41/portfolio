import "./work-experiences.css";
const WorkExperiences = () => {
  return (
    <div className="work-experience-wrapper">
      <h2>Work Experiences</h2>
      <div className="work-experience">
        <div className="work-experience-duration">05/2018 - Now</div>
        <div className="work-experience-title">Lead Frontend Developer</div>
        <div className="work-experience-company">Hays AG, Mannheim</div>
      </div>
      {/* <div className="work-responsibility">
        <h3>Responsibilities</h3>
        <ul className="work-responsibility-list">
          <li>
            Lead a team of frontend developers who responsible for creating,
            maintaining, and modifying frontend code
          </li>
          <li>
            Collaborate with backend developers to integrate UI components with
            APIs and databases
          </li>
          <li>
            Ensure proper content and UI features are developed, tested and
            validated against business expectations before they are productive
            system.
          </li>
          <li>Assist offshore colleagues to understand business requirement</li>
          <li>Create scripts for load testing and test automation</li>
          <li>
            Create coding/design guidelines for internal projects, keep web
            application up to date and bring best practices to the projects
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default WorkExperiences;
