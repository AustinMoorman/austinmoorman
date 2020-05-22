import React, { useState, useEffect } from 'react';
import './skills.css';

function Skills(props) {
    const skillsListBuilder = (catagory) => {
        return props.pageVars.skills[catagory].map(listItem => {
            return <li>{listItem}</li>
        })

    }

    if (props.pageVars) {

        switch (props.status) {
            case "notSelected":
                return (
                    <div className="skills notselected" id="skills">
                        <a id="skillsA" className="linkAnchor"></a>
                        <h3>Skills</h3>
                        <div className="skillsContainer">
                            <div>
                                <h4>Languages</h4>
                                <ul>
                                    {skillsListBuilder('languages')}
                                </ul>
                            </div>
                            <div>
                                <h4>Technologies</h4>
                                <ul>
                                    {skillsListBuilder('technologies')}
                                </ul>
                            </div>

                        </div>
                        <p>And Growing!</p>
                    </div>
                )
            case "clicked":
            case "unclicked":
                return (
                    <div className="skills skillsSelected" id="skills">
                        <a id="skillsA" className="linkAnchor"></a>
                        <h3>Skills</h3>
                        <div className="skillsContainer">
                            <div className="skillsList">
                                <h4>Languages</h4>
                                <ul>
                                    {skillsListBuilder('languages')}
                                </ul>
                                <h4>Technologies</h4>
                                <ul>
                                    {skillsListBuilder('technologies')}
                                </ul>
                            </div>
                            <div className="skillsContent">
                                <h4>Where did I learn what I learned?</h4>
                                <p>{props.pageVars.skills.learned}</p>
                                <h4>What's Next?</h4>
                                <p>{props.pageVars.skills.next}</p>
                            </div>
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
export default Skills;