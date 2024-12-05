import React, { useState } from 'react';
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';
import Home from './components/Home';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import LanguageSwitch from './components/LanguageSwitch'
import './i18n';
import { useTranslation } from 'react-i18next';
import './App.css';
import Logo from './assets/logo1-light.png';


function App() {
  const [activeLink, setActiveLink] = useState('home');
  const { i18n } = useTranslation();
  
  React.useEffect(() => {
    Events.scrollEvent.register('begin', function () { });
    Events.scrollEvent.register('end', function () { });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);


  const handleToggleLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { t } = useTranslation();

  return (
    <div>
      {/* Barre de navigation */}
      <nav>
        <img
          src={Logo}
          onClick={() => scroll.scrollToTop()}
          alt="logo"
          className="logo"
        />
        <div className="nav-container">
          <div className="nav-links">
            <Link to="home" spy={true} hashSpy={true} smooth={true} duration={500} className={activeLink === 'home' ? 'active-link' : ''} onSetActive={() => setActiveLink('home')}>{t('title-home')}</Link>
            <Link to="projects" spy={true} hashSpy={true} smooth={true} duration={500} className={activeLink === 'projects' ? 'active-link' : ''} onSetActive={() => setActiveLink('projects')}>{t('title-projects')}</Link>
            <Link to="experiences" spy={true} hashSpy={true} smooth={true} duration={500} className={activeLink === 'experiences' ? 'active-link' : ''} onSetActive={() => setActiveLink('experiences')}>{t('title-experiences')}</Link>
            <Link to="contact" spy={true} hashSpy={true} smooth={true} duration={500} className={activeLink === 'contact' ? 'active-link' : ''} onSetActive={() => setActiveLink('contact')}>{t('contact')}</Link>
          </div>
          <LanguageSwitch onToggleLanguage={handleToggleLanguage} />
        </div>
      </nav>
      {/* Sections */}
      <Element name="home" className="section"><Home /></Element>
      <Element name="projects" className="section"><Projects /></Element>
      <Element name="experiences" className="section"><Experiences /></Element>
      <Element name="contact" className="section"><ContactForm /></Element>
      <Element><Footer /></Element>
    </div>
  );
}

export default App;
