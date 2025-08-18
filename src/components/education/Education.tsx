const Education = () => {
  return (
    <div className="education-wrapper">
      <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
        Education
      </h2>
      <div className="education rounded-xl bg-surface ring-1 ring-black/5 p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-secondary opacity-5 rounded-full -translate-y-8 -translate-x-8"></div>
        
        <div className="education-duration text-xs uppercase tracking-wide text-secondary font-semibold mb-2">
          03/2014 - 11/2017
        </div>
        <div className="education-title text-xl font-semibold text-[#1a1a1a] mb-1">
          Applied Computer Science, B.Sc.
        </div>
        <div className="education-university text-[#4a4a4a] font-medium">
          Hochschule Worms, Germany
        </div>
        
        {/* Degree indicator */}
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-secondary rounded-full"></div>
          <span className="text-xs text-[#4a4a4a]">Bachelor's Degree</span>
        </div>
      </div>
      {/* <div className="education">
        <span className="education-duration">10/2009 – 02/2014</span>
        <span className="education-title">Computer Science, B.Sc.</span>
        <span className="education-university">
          Leibniz University, Hannover
        </span>
        <span className="education-changed">Transfer to Hochschule Worms</span>
      </div>
      <div className="education">
        <span className="education-duration">08/2008 – 02/2009</span>
        <span className="education-title">
          Assessment Test (Feststellungsprüfung)
        </span>
        <span className="education-university">Studienkolleg, Hannover</span>
      </div>
      <div className="education">
        <span className="education-duration">09/2003 – 10/2006</span>
        <span className="education-title">Computer Science, B.Sc.</span>
        <span className="education-university">Amrit Campus, Nepal</span>
      </div> */}
    </div>
  );
};

export default Education;
