import React from 'react'

function Contact() {
    return (
        <div className="contact">
            <div className="overlay"></div>
            <section className=''>
                <div className="text">
                    <h2><span>C</span>ontact</h2>
                    <hr/>
                    <section className="container">
                        <div>
                            <i className="fa fa-envelope fa-3x"></i>
                            <a href="mailto: contact@fullstack-ninja.de">
                                contact@fullstack-ninja.de
                            </a>
                        </div>
                        <div>
                            <i className="fa fa-mobile fa-3x"></i>
                            <p className="phone">(+49) 0151/50514069</p>
                        </div>
                        <div>
                            <i class="fab fa-facebook-messenger fa-3x"></i>
                            <a href="https://fb.com/msg/EwaldHertel" target="_blank" rel="noreferrer">
                                Messenger Kage Dev
                            </a>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Contact
