import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Home.css';
import morganImage from '../assets/morgan.png';
import { Link, Events } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = React.useState('home');

  React.useEffect(() => {
    Events.scrollEvent.register('begin', function () { });
    Events.scrollEvent.register('end', function () { });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div id="home" className="section home-section">
      <div className="content-container">
        <div className="intro">
          <h1>{t('hello')}</h1>
          <p>{t('introduction')}</p>
          <div className="contact-buttons">
            <a href="mailto:morgan.larivain@yahoo.fr" className="contact-icon" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/mlarivain/" className="contact-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/morganlrvn" className="contact-icon" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>

          <div className="about-more-button">
            <Link to="projects" spy={true} hashSpy={true} smooth={true} duration={500} className={activeLink === 'projects' ? 'active-link' : ''} onSetActive={() => setActiveLink('projects')}>
              {t('learn_more')}&emsp;⭣
            </Link>
          </div>
        </div>

        <div className="image-container">
          <img
            src={morganImage}
            alt="MorganL"
            className="home-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
