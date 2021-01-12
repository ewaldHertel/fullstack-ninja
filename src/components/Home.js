import React from 'react'

function Home() {
    return (
        <main className="home">
            <div className="overlay"></div>
            <div id="app" className="scroll-container">
                <section className='hide'>
                    <div className="text">
                        <h2><span>E</span>wald <span>H</span>ertel</h2>
                        <hr/>
                        <p>The Fullstack-Ninja</p>
                        <p>Ich tättowiere für dich das Internet</p>
                    </div>
                </section>
                <section className='hide'>
                    <div className="text">
                        <h2><span>S</span>ervice</h2>
                        <hr/>
                        <p>Das kann ich dir bieten</p>
                        <a href="/service" className="view-details">
                            <i class="fas fa-arrow-right"></i>
                            <span>more details</span>
                        </a>
                    </div>
                </section>
                <section className='hide'>
                    <div className="text">
                        <h2><span>W</span>ork</h2>
                        <hr/>
                        <p>Eine Auswahl meiner Arbeiten.</p>
                        <a href="/work" className="view-details">
                            <i className="fas fa-arrow-right"></i>
                            <span>more details</span>
                        </a>
                    </div>
                </section>
                <section className='hide'>
                    <div className="text">
                        <h2><span>A</span>bout <span>M</span>e</h2>
                        <hr/>
                        <p>Wer hinter Kage Dev steckt.</p>
                        <a href="/aboutme" className="view-details">
                            <i className="fas fa-arrow-right"></i>
                            <span>more details</span>
                        </a>
                    </div>
                </section>
                <section className='hide'>
                    <div className="text">
                        <h2><span>C</span>ontact</h2>
                        <hr/>
                        <p>Du hast eine Idee? Dann schreib mir.</p>
                        <a href="/contact" className="view-details">
                            <i className="fas fa-arrow-right"></i>
                            <span>more details</span>
                        </a>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Home
