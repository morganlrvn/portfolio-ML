import React, { useState } from 'react';
import '../styles/HelicopterButton.css';
import { useTranslation } from 'react-i18next';

const HelicopterButton = ({ projectTitle }) => {
    const [moveHelicopter, setMoveHelicopter] = useState(false);
    const [moveButton, setMoveButton] = useState(false);
    const [isLoading, setItLoading] = useState(false);
    const { t } = useTranslation();

    const handleButtonClick = () => {
        if (projectTitle === t('projects.drone_portfolio.title')) {
            setMoveHelicopter(true);
            setTimeout(() => {
                setMoveButton(true);
            }, 1500);
            setItLoading(true);
        }
    };

    return (

        <div className={`helicopter-container ${isLoading ? '' : 'bouton-saute'}`}>
            <button
                className={`helicopter-button ${moveButton ? 'move-button' : ''}  `}
                onClick={handleButtonClick}
            >
                {t('projects.drone_portfolio.button')}
            </button>
            <div className={`helicopter-emoji ${moveHelicopter ? 'move-helicopter' : ''}`}>
                🚁
            </div>
            {moveButton && (
                <p className={`loading-text ${isLoading ? 'visible' : ''}`}>
                    {isLoading ? t('projects.drone_portfolio.afterclick') : ""}
                </p>
            )}
        </div>
    );
};

export default HelicopterButton;