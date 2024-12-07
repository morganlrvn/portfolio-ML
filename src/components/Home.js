import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Home.css';
import morganImage from '../assets/morgan.png';
import { Link, Events } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Home = () => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = React.useState('home');
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    Events.scrollEvent.register('begin', function () { });
    Events.scrollEvent.register('end', function () { });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  // Simuler le temps de chargement
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2 secondes
    return () => clearTimeout(timer);
  }, []);

  // Animation de chargement
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="loading-screen"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: 'var(--primary-bg)',
        }}
      >
        <h1 style={{ color: 'var(--secondary-bg)', fontSize: '5rem', textAlign: 'center' }}>
          ML
        </h1>
      </motion.div>
    );
  }

  return (
    <div id="home" className="section home-section">
      <div className="content-container">
        <div className="intro">
          {/* Animation sur le titre */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }} // Délais légers pour les éléments
          >
            {t('hello')}
          </motion.h1>

          {/* Animation sur le paragraphe */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {t('introduction')}
          </motion.p>

          <div className="contact-buttons">
            <motion.a
              href="mailto:morgan.larivain@yahoo.fr"
              className="contact-icon"
              aria-label="Email"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mlarivain/"
              className="contact-icon"
              aria-label="LinkedIn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/morganlrvn"
              className="contact-icon"
              aria-label="GitHub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <FaGithub />
            </motion.a>
          </div>

          {/* Animation sur le bouton "En savoir plus" */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}  // Départ en bas
            animate={{ opacity: 1, y: 0 }}    // Devient visible et remonte
            transition={{ duration: 1, delay: 1.2 }} // Délais un peu plus longs pour synchronisation
            className="about-more-button"
          >
            <Link
              to="projects"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={500}
              className={activeLink === 'projects' ? 'active-link' : ''}
              onSetActive={() => setActiveLink('projects')}
            >
              {t('learn_more')}&emsp;&darr;
            </Link>
          </motion.div>
        </div>

        {/* Animation sur l'image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}  // Départ avec petite taille
          animate={{ opacity: 1, scale: 1 }}    // Devient normal et visible
          transition={{ duration: 1, delay: 0.5 }} // Délai léger avant de commencer l'animation
          className="image-container"
        >
          <img
            src={morganImage}
            alt="MorganL"
            className="home-image"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
