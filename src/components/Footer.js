import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="icons">
                <ul className="social">
                    <li>
                    <a href="https://www.facebook.com/EwaldHertel" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/in/ewald-hertel" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    </li>
                    <li>
                    <a href="https://www.xing.com/profile/Ewald_Hertel/cv" target="_blank" rel="noreferrer">
                        <i className="fab fa-xing fa-2x"></i>
                    </a>
                    </li>
                </ul>
            </div>
            <div className="copy">
                <p>Copyright &copy; by Kage Development 2020/2021</p>
            </div>
            <div className="menu">
                <a href="/impress">Impressum</a>
                <a href="/privacy">Datenschutz</a>
            </div>
        </footer>
    )
}

export default Footer
