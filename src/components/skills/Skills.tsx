import Grid from "@mui/material/Grid";
import SkillBar from "./skill-bar/SkillBar";
import "./skills.css";

interface Skill {
  name: string;
  percent: number;
}

let skills: Skill[] = [
  { name: "Angular", percent: 90 },
  { name: "React", percent: 70 },
  { name: "Typescript", percent: 85 },
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 90 },
  { name: "C#/.Net 6", percent: 75 },
  { name: "locust", percent: 70 },
  { name: "MS SQL Server", percent: 75 },
  { name: "Selenium", percent: 70 },
  { name: "Docker", percent: 50 }
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
    <div className="skills-wrapper">
      <h2>Skills</h2>
      <p>
        After working of many years in web development area, I acquire following
        skills:
      </p>
      <Grid container spacing={{ xs: 0, sm: 6 }} className="skills">
        <Grid item xs={12} sm={6} className="skills-with-even-index">
          {evenIndexSkills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} percent={skill.percent} />
          ))}
        </Grid>
        <Grid item xs={12} sm={6} className="skills-with-odd-index">
          {oddIndexSkills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} percent={skill.percent} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
