import React from 'react'
import mysql from '../assets/img/mysql.png';
import mariadb from '../assets/img/mariadb.png';
import sqlServer from '../assets/img/sql-server.png';

function Service() {
    return (
        <main className="service">
            <div className="overlay"></div>
            <div id="app" className="scroll-container">
                <section className='hide'>
                    <div className="text">
                        <h2><span>F</span>rontend-<span>D</span>evelopment</h2>
                        <hr/>
                        <div className="icons">
                            <div>
                                <i className="fab fa-react"></i>
                                <span>React</span>
                            </div>
                            <div>
                                <i className="fab fa-js-square"></i>
                                <span>JavaScript</span>
                            </div>
                            <div>
                                <i className="fab fa-html5"></i>
                                <span>HTML</span>
                            </div>
                            <div>
                                <i className="fab fa-css3"></i>
                                <span>CSS / SASS</span>
                            </div>
                        </div>
                        <hr/>
                        <p>Mit Hilfe von aktuellen Technologien (z.B React, Redux, ….) und einem großen Hang zur Perfektion entwickle ich deine Designs.<br/> 
                            Von einem Smartphone bis hin zu einem 4K Monitor, deine Webseite/Applikation wird perfekt passen. <br/> 
                            Ich bin zwar kein Designer, doch ich kann bestehende Designs 1 zu 1 umsetzen.<br/>
                            Wenn du kein Design hast dann finden wir eine passende Lösung.</p>
                    </div>
                </section>
                <section className='hide'>
                    <div className="text">
                        <h2><span>B</span>ackend-<span>D</span>evelopment</h2>
                        <hr/>
                        <div className="icons">
                            <div>
                                <i className="fab fa-node"></i>
                                <span>Node.js / Express</span>
                            </div>
                            <div>
                                <i className="fab fa-php"></i>
                                <span>PHP / Laravel</span>
                            </div>
                        </div>
                        <hr/>
                        <p>Coming Soon</p>
                    </div>
                </section>
                <section className='hide'>
                    <div className="text">
                        <h2><span>A</span>pp-<span>D</span>evelopment</h2>
                        <hr/>
                        <div className="icons">
                            <div>
                                <i className="fab fa-react"></i>
                                <span>React-Native</span>
                            </div>
                        </div>
                        <hr/>
                        <p>Coming Soon</p>
                    </div>
                </section>
                <section className='hide'>
                    <div className="text">
                        <h2><span>D</span>atabase-<span>D</span>evelopment</h2>
                        <hr/>
                        <div className="icons">
                            <img src={mysql} alt="mysql-logo" />
                            <img src={mariadb} alt="mariadb-logo" />
                            <img src={sqlServer} alt="sqlServer-logo" />
                        </div>
                        <hr/>
                        <p>Coming Soon</p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Service
