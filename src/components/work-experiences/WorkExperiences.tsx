const WorkExperiences = () => {
  return (
    <div className="work-experience-wrapper">
      <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
        Work Experience
      </h2>
      <div className="work-experience rounded-xl bg-surface ring-1 ring-black/5 p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-secondary opacity-5 rounded-full -translate-y-10 translate-x-10"></div>
        
        <div className="work-experience-duration text-xs uppercase tracking-wide text-secondary font-semibold mb-2">
          05/2018 - Present
        </div>
        <div className="work-experience-title text-xl font-semibold text-[#1a1a1a] mb-1">
          Lead Frontend Developer
        </div>
        <div className="work-experience-company text-[#4a4a4a] font-medium">
          Hays AG, Mannheim
        </div>
        
        {/* Experience indicator */}
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          <span className="text-xs text-[#4a4a4a]">Currently Active</span>
        </div>
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
