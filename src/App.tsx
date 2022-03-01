import "./App.css";
import {
  Education,
  Header,
  Projects,
  Skills,
  WorkExperiences
} from "./components";

const App = () => {
  return (
    <>
      <section className="header-section">
        <Header />
      </section>
      <section className="skills-section">
        <Skills />
      </section>
      <section className="resume-section">
        <div className="resume-info">
          <div>
            <WorkExperiences />
          </div>
          <div>
            <Education />
          </div>
        </div>
      </section>
      <section className="projects-section">
        <Projects />
      </section>
    </>
  );
};

export default App;
