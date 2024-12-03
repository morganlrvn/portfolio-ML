import React, { useState } from 'react';
import HelicopterButton from './HelicopterButton';
import MemzButton from './MemzButton';
import '../styles/Projects.css';
import troll from '../assets/troll.png';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const [trollVisible, setTrollVisible] = useState(false);
  const [trollLoaded, setTrollLoaded] = useState(false);

  const handleClickMemz = () => {
    // Retirer immédiatement la classe "helicopter-button" du bouton
    const button = document.getElementById('memz-button');
    if (button) {
      button.classList.remove('helicopter-button'); // Retirer la classe immédiatement
    }

    // Ensuite, déclencher l'affichage du troll
    setTrollVisible(true);  // Montre immédiatement le troll
    setTrollLoaded(false);  // Définir comme non chargé par défaut

    // Simule un délai pour "charger" le troll
    setTimeout(() => {
      setTrollLoaded(true); // Après 1.5s, le troll est chargé
    }, 1500);
  };
  const { t } = useTranslation();
  const projects = [
    {

      title: t('projects.price_calculator.title'),
      description: t('projects.price_calculator.description'),
      technologies: ["PHP", "Vue.js", "Vuetify"],
      link: "https://github.com/morganlrvn/bid-calculation-tool",
      skills: t('projects.price_calculator.skills')
    },
    {
      title: t('projects.drone_portfolio.title'),
      description: t('projects.drone_portfolio.description'),
      technologies: ["React", "Strapi"],
      link: "#",
      status: t('projects.drone_portfolio.status'),
      skills: t('projects.drone_portfolio.skills')
    },
    {
      title: t('projects.memz.title'),
      description: t('projects.memz.description'),
      technologies: ["Vue.js", "Pinia", "Node.js", "MySQL", "JWT", "API REST"],
      link: "#",
      status: t('projects.memz.status')
    }
  ];

  return (
    <div id="projects" className="section projects-section">
      <h3>{t('title-projects')}</h3>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul className="techno-list">
                {project.technologies.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
              {project.status && <p className="project-status">{project.status}</p>}
            </div>
            <div className="project-buttons">
              {project.title === t('projects.memz.title') && <MemzButton />}
              {project.title === t('projects.drone_portfolio.title') && (
                <HelicopterButton projectTitle={t('projects.drone_portfolio.title')} />

              )}
              {project.title !== "Memz" && project.title !== t('projects.drone_portfolio.title') && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="helicopter-button">
                  {t('projects.price_calculator.button')}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
