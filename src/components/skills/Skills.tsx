import SkillBar from "./skill-bar/SkillBar";

interface Skill {
  name: string;
  percent: number;
  color?: string;
}

let skills: Skill[] = [
  { name: "Angular", percent: 90, color: "primary" },
  { name: "React", percent: 70, color: "secondary" },
  { name: "Typescript", percent: 85, color: "primary" },
  { name: "HTML", percent: 95, color: "secondary" },
  { name: "CSS", percent: 90, color: "primary" },
  { name: "C#/.Net 6", percent: 75, color: "secondary" },
  { name: "locust", percent: 70, color: "primary" },
  { name: "MS SQL Server", percent: 75, color: "secondary" },
  { name: "Selenium", percent: 70, color: "primary" },
  { name: "Docker", percent: 50, color: "secondary" },
];

const Skills = () => {
  const evenIndexSkills: Skill[] = [],
    oddIndexSkills: Skill[] = [];

  skills.forEach((skill, i) => {
    if (i % 2 === 0) {
      evenIndexSkills.push(skill);
    } else {
      oddIndexSkills.push(skill);
    }
  });

  return (
    <div className="skills-wrapper container mx-auto px-6 py-14">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-2">
          Skills & Expertise
        </h2>
        <p className="text-[#4a4a4a] max-w-2xl mx-auto">
          After many years in web development, I'm comfortable with the following
          technologies and frameworks:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="space-y-4">
          {evenIndexSkills.map((skill, index) => (
            <SkillBar 
              key={index} 
              name={skill.name} 
              percent={skill.percent} 
              color={skill.color}
            />
          ))}
        </div>
        <div className="space-y-4">
          {oddIndexSkills.map((skill, index) => (
            <SkillBar 
              key={index} 
              name={skill.name} 
              percent={skill.percent} 
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
