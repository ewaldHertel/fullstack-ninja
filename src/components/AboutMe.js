import React from 'react'
import profile from '../assets/img/profile.png';

function AboutMe() {
    return (
        <div className="aboutme">
            <div className="overlay"></div>
            <section className=''>
                <div className="text">
                    <h2><span>A</span>bout <span>M</span>e</h2>
                    <hr/>
                    <section className="container">
                        <div className="profile">
                            <img src={profile} alt="Profil Bild" />
                        </div>
                        
                        <div className="description">
                            <p className="partial">
                            Ich bin ein 41 Jähriger Software- Webentwickler aus dem schönen
                            Siegen.
                            </p>
                            <p className="partial">
                            Ich beschäftige mich schon seit ich denken kann mit Computern und
                            allem was dazu gehört. Ich bin im Grunde ein Autodidakt, fast alle
                            Fähigkeiten die ich mitbringe habe ich mir selber beigebracht und
                            werde hoffentlich nie aufhören zu Lernen.
                            </p>
                            <p className="partial">
                            In meiner Freizeit beschäftige ich mich mit Fotografie und den
                            Möglichkeiten der Bildbearbeitung.
                            </p>
                            <p className="partial">
                            Beruflich habe ich in unterschiedlichen Branchen gearbeitet, bin
                            dennoch nie ganz von der IT weggekommen. 2017 habe ich meinen
                            IHK-Abschluss zum Fachinformatiker erfolgreich abgeschlossen und
                            im Anschluss eine Zeit lang bei einer kleinen Softwareschmiede
                            gearbeitet.
                            </p>
                            <p className="partial">
                            Nun habe ich mir endlich den Traum vom eigenen Business erfüllt.
                            </p>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default AboutMe
