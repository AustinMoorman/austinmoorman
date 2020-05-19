import React, { useState, useEffect } from 'react';
import './projects.css';
import { ReactComponent as Github } from '../../icons/github.svg'

function Projects(props) {
    const link = event => {
        event.stopPropagation();
    }

    if (props.pageVars) {
        switch (props.status) {
            case "notSelected":
                return (
                    <div className="projects notselected" id="projects">
                        <h3>Projects</h3>
                        <div className="thriftr">
                            <h4>thriftr</h4>
                            <p>A fun and easy to use web app to help people find their next bar, the perfect restaurant, or some fun weekend entertainment.</p>
                            <a onClick={link} href="https://thrift-r.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img src={require('./thriftr_iphone8silver_portrait.png')} className="thriftrImg notSelected" />
                            </a>
                        </div>
                        <div className="austinmoorman">
                            <h4>austinmoorman.com</h4>
                            <p>The website that you are on now! Not only is this a great portfolio but also great use of technologies such as React, Express, MongoDB and Firebase.</p>
                        </div>
                        <h4>Much more to come!</h4>
                    </div>
                )
            case "clicked":
            case "unclicked":
                return (
                    <div className="projects projectsSelected" id="projects">
                        <h3>Projects</h3>
                        <div className="thriftr">
                            <div>
                                <h4>thriftr</h4>
                                <p>A fun and easy to use web app to help people find their next bar, the perfect restaurant, or some fun weekend entertainment.</p>

                                <p>Thriftr was the very first web app I create and it is built with React, Express, MongoDB and hosted on Heroku. Although I am </p>
                                <h5>What's next?</h5>
                                <p>I think thriftr has a cool and unique concept however it does need some refining before a production release. My plans are to add email verification, improved styling, page transitions, and merchant analytics along with some backend improvements.</p>

                                <a onClick={link} href="https://github.com/AustinMoorman/thriftr-public" target="_blank" rel="noopener noreferrer"><Github className="githubLogo" /> </a>
                            </div>

                            <a onClick={link} href="https://thrift-r.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img src={require('./thriftr_iphone8silver_portrait.png')} className="thriftrImg" />
                            </a>
                        </div>
                        <div className="austinmoorman">
                            <h4>austinmoorman.com</h4>
                            <p>The website that you are on now! Not only is this a great portfolio but also great use of technologies such as React, Express, MongoDB and Firebase.</p>
                            <h5>What's next?</h5>
                            <p>My website will always be an ongoing project! The plan is to improve the transitions and animation and as always update content. Hopefully I’ll soon get to add more projects! </p>
                            <a onClick={link} href="https://github.com/AustinMoorman/austinmoorman" target="_blank" rel="noopener noreferrer"><Github className="githubLogo" /> </a>
                        </div>

                    </div>
                )
            default:
                return (
                    <div>
                        error
                    </div>
                )
        }
    } else {
        return (
            <div>
                loading
            </div>
        )
    }

}
export default Projects