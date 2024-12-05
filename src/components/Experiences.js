import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import '../styles/Experiences.css';
// Importer les logos
import SopraLogo from '../assets/logos/sopra-steria.png';
import NavalLogo from '../assets/logos/naval-group.png';
import DtuLogo from '../assets/logos/dtu.png';
import { useTranslation } from 'react-i18next';

const Experiences = () => {
  const { t } = useTranslation();
  const experiences = t('experiences', { returnObjects: true });
  const logos = {
    "Sopra Steria": SopraLogo,
    "Naval Group": NavalLogo,
    "Technical University of Denmark (DTU)": DtuLogo
  };

  return (
    <div id="experiences" className="section titre-section timeline-container">
      <h3>{t('title-experiences')}</h3>
      <VerticalTimeline>
        {experiences.map((experience, index) => {
          const logo = logos[experience.company];
          return (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              iconStyle={{ background: 'transparent', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              icon={
                <div className="company-logo-wrapper">
                  <img src={logo} alt={experience.company} className="company-logo" />
                </div>
              }
              dateClassName="custom-date"
            >
              <h3 className="vertical-timeline-element-title">{experience.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
              <h5 className="description-title">{experience.descriptionTitle}</h5>
              <ul className="description-list">
                {experience.descriptionPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <ul className="skills-list">
                {experience.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Experiences;
