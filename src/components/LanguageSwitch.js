import React, { useState } from 'react';
import '../styles/LanguageSwitch.css';

const LanguageSwitch = ({ onToggleLanguage }) => {
  const [isFrench, setIsFrench] = useState(true);

  const handleToggle = () => {
    setIsFrench(!isFrench);
    onToggleLanguage(isFrench ? 'en' : 'fr');
  };

  return (
    <div
      className={`language-switch ${isFrench ? 'french' : 'english'} text-color`}
      onClick={handleToggle}
    >
      <div className={`switch-thumb ${isFrench ? 'english' : 'french'}`}>
        {isFrench ? 'EN' : 'FR'}
      </div>
    </div>
  );
};

export default LanguageSwitch;
