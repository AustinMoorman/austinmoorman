import React, { useState, useEffect } from 'react';
import './aboutMe.css';

function AboutMe(props) {
    if (props.pageVars) {
        switch (props.status) {
            case "notSelected":
                return (
                    <div className="aboutMe notselected" id="aboutMe">
                        <a id="aboutMeA" className="linkAnchor"></a>
                        <h3>About me</h3>
                        <img src={require('./headshot.jpg')} className="headshot" />
                        <div className="aboutMeSum">
                            <h4>Name</h4>
                            <p>{props.pageVars.aboutMe.name}</p>
                            <h4>Location</h4>
                            <p>{props.pageVars.aboutMe.location}</p>
                        </div>

                    </div>
                )
            case "clicked":
            case "unclicked":
                return (
                    <div className="aboutMe aboutMeSelected selected" id="aboutMe">
                        <a id="aboutMeA" className="linkAnchor"></a>
                        <h3>About me</h3>
                        <img src={require('./headshot.jpg')} className="headshot" />
                        <div className="aboutMeSum">
                            <h4>Name</h4>
                            <p>{props.pageVars.aboutMe.name}</p>
                            <h4>Location</h4>
                            <p>{props.pageVars.aboutMe.location}</p>
                            <h4>Personal Interests</h4>
                            <p>{props.pageVars.aboutMe.personalInterest}</p>
                        </div>
                        <div className="bio">
                            <h4>Bio</h4>
                            <p>{props.pageVars.aboutMe.bio}</p>
                            <h4>History</h4>
                            <p>{props.pageVars.aboutMe.history}</p>
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
export default AboutMe;