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
                        <a id="projectsA" className="linkAnchor"></a>
                        <h3>Projects</h3>
                        <div className="thriftr">
                            <h4>Thriftr</h4>
                            <p>{props.pageVars.projects.thriftr.discription1}</p>
                            <a onClick={link} href="https://thrift-r.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img src={require('./thriftr_iphone8silver_portrait.png')} className="thriftrImg notSelected" />
                            </a>
                        </div>
                        <div className="austinmoorman">
                            <h4>austinmoorman.com</h4>
                            <p>{props.pageVars.projects.austinmoorman.discription1}</p>
                        </div>
                        <h4>Much more to come!</h4>
                    </div>
                )
            case "clicked":
            case "unclicked":
                return (
                    <div className="projects projectsSelected" id="projects">
                        <a id="projectsA" className="linkAnchor"></a>
                        <h3>Projects</h3>
                        <div className="thriftr">
                            <div>
                                <h4>Thriftr</h4>
                                <p>{props.pageVars.projects.thriftr.discription1}</p>

                                <p>{props.pageVars.projects.thriftr.discription2}</p>
                                <h5>What's next?</h5>
                                <p>{props.pageVars.projects.thriftr.whatsNext}</p>

                                <a onClick={link} href="https://github.com/AustinMoorman/thriftr-public" target="_blank" rel="noopener noreferrer"><Github className="githubLogo" /> </a>
                            </div>

                            <a onClick={link} href="https://thrift-r.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img src={require('./thriftr_iphone8silver_portrait.png')} className="thriftrImg" />
                            </a>
                        </div>
                        <div className="austinmoorman">
                            <h4>austinmoorman.com</h4>
                            <p>{props.pageVars.projects.austinmoorman.discription1}</p>
                            <h5>What's next?</h5>
                            <p>{props.pageVars.projects.austinmoorman.whatsNext}</p>
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