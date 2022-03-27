import './App.css';
import {
  Education,
  Header,
  Projects,
  Skills,
  WorkExperiences
} from './components';

const App = () => {
  return (
    <>
      <section className='header-section'>
        <Header />
      </section>
      <section className='skills-section'>
        <Skills />
      </section>
      <section className='resume-section'>
        <div className='experience-education-ctn container mx-auto grid p-16 leading-8 xs:grid-cols-1 sm:grid-cols-2'>
          <div className='work-experiences'>
            <WorkExperiences />
          </div>
          <div className='educations xs:pt-8 sm:pt-0'>
            <Education />
          </div>
        </div>
      </section>
      <section className='projects-section'>
        <Projects />
      </section>
    </>
  );
};

export default App;
