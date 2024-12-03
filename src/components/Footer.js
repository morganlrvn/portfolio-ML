import React from 'react';
import '../styles/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>© {currentYear} Morgan - All Rights Reserved 😺</p>
        </footer>
    );
}

export default Footer;
