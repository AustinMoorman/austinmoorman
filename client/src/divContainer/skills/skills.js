import React, { useState, useEffect } from 'react';
import './skills.css';

function Skills(props) {
    if (props.pageVars) {
        switch (props.status) {
            case "notSelected":
                return (
                    <div className="aboutMe notselected" id="aboutMe">
                        notSelected
                    </div>
                )
            case "clicked":
            case "unclicked":
                return (
                    <div className="aboutMe aboutMeSelected selected" id="aboutMe">
                        clicked
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