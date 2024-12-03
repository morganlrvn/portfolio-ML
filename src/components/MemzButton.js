import React, { useState } from 'react';
import troll from '../assets/troll.png';
import { useTranslation } from 'react-i18next';


const MemzButton = () => {
    const [isVisible, setIsVisible] = useState(true); // Contrôle si le bouton est visible
    const [isTrolling, setIsTrolling] = useState(false); // Contrôle si le troll est affiché
    const [isLoaded, setIsLoaded] = useState(false); // Contrôle si le troll est chargé
    const { t } = useTranslation();

    const handleClick = () => {
        setIsVisible(false); // Cache le bouton immédiatement
        setIsTrolling(true);
        setIsLoaded(false);

        // Simule le chargement
        setTimeout(() => {
            setIsLoaded(true);
        }, 1500);
    };

    return (
        <div>
            {isVisible && (
                <button className="helicopter-button" onClick={handleClick}>
                    {t('projects.memz.button')}
                </button>
            )}
            {isTrolling && (
                <div className="chargement">
                    {isLoaded ? (
                        <div className="troll-container">
                            <p className="troll-text">{t('projects.memz.afterclick')}</p>
                            <img src={troll} alt="Troll" className="troll-image" />
                        </div>
                    ) : (
                        <div className="spinner"></div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MemzButton;
