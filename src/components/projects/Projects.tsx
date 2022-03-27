import budgetApp from '../../images/budget.png';
import countryInfo from '../../images/CountryInfo.png';
import d3js from '../../images/d3js.png';
import hrv from '../../images/hrv_logo.png';
import onlineShop from '../../images/online-shop.png';
import webService from '../../images/soa.png';
import ProjectCard from './project-card/ProjectCard';
import { Project } from './types/Project.types';

const projectList: Project[] = [
  {
    name: 'Online Shop',
    shortDescrption:
      'This is a online platform where people can choose thier training nutrients recommended by professional health consultant to achieve thier health goals. The goal is to help the busy people to shopping problem, so that they can concentrate on what they want to achieve.',
    imageUrl: onlineShop,
    projectLink: 'http://projects.kumal.de'
  },
  {
    name: 'Country Info - Vuejs',
    shortDescrption:
      'This is a small Vuejs App which gives the informations like name, capital, currency, language etc of the country. The informations are retrieve from the Rest Countries, which is an open source REST API.',
    imageUrl: countryInfo,
    projectLink: 'https://amit41.github.io/countryinfo-vuejs/'
  },
  {
    name: 'Heart rate variability',
    shortDescrption:
      'Heart rate variabilty is an android App. It measures heart rates and evaluates them to inform us whether our autonomic nervous system (ANS) is balanced or not. This information helps us to take required precaution to improve our healthy life.',
    imageUrl: hrv
  },
  {
    name: 'Household Book App',
    shortDescrption:
      'This is an android app which helps to trace expenses and income of our daily life. It has feautures like generating pie chart, simple calculator, creating category and subcategory, converting the entries in json file format to transfer the data etc.',
    imageUrl: budgetApp,
    projectLink: ''
  },
  {
    name: 'Webservice for Evaluation of Brute-force Data',
    shortDescrption:
      'This is a REST API which collects the data like ip address, username, password, time and number of attempts of the attacker, who is trying to login in the server of others. The idea is to collect such informations and analyse them to improve the security of the server.',
    imageUrl: webService
  },
  {
    name: 'Datavisualization with D3.js',
    shortDescrption:
      'This is web application based on D3.js javascript library. It takes the numerical data and shows them in diagram as shown in picture above. In picture the number of Students are shown, who are admitted in Computer Science(Bachelor) first year winter semester in 2015.',
    imageUrl: d3js
  }
];

const Projects = () => {
  return (
    <div className='projects-wrapper container mx-auto p-16'>
      <h2 className='text-3xl font-medium'>Projects</h2>
      <div className='projects mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projectList.map((project, index) => (
          <div className='project-card' key={index}>
            <ProjectCard
              name={project.name}
              shortDescrption={project.shortDescrption}
              imageUrl={project.imageUrl}
              projectLink={project.projectLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
