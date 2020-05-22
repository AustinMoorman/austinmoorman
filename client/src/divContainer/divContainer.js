import React, { useState, useEffect } from 'react';
import './divContainer.css';
import Main from './main/main';
import AboutMe from './aboutMe/aboutMe';
import Projects from './projects/projects';
import Skills from './skills/skills';
import Maps from './map/map';
import Contact from './contact/contact';

function DivContainer(props) {
    switch (props.catagory) {
        case 'main':
            return <Main status={props.status} pageVars={props.pageVars} />
        case 'aboutMe':
            return <AboutMe status={props.status} pageVars={props.pageVars} />
        case 'projects':
            return <Projects status={props.status} pageVars={props.pageVars} />
        case 'skills':
            return <Skills status={props.status} pageVars={props.pageVars} />
        case 'maps':
            return <Maps status={props.status} pageVars={props.pageVars} />
        case 'contact':
            return <Contact status={props.status} pageVars={props.pageVars} />
        default:
            return <div></div>


    }
}
export default DivContainer