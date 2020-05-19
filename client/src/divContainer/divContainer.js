import React, { useState, useEffect } from 'react';
import './divContainer.css';
import Main from './main/main';
import AboutMe from './aboutMe/aboutMe';
import Projects from './projects/projects';
import Skills from './skills/skills';
import History from './history/history';
import Contact from './contact/contact';
import Blog from './blog/blog';

function DivContainer(props) {
    switch (props.catagory) {
        case 'Main':
            return <Main status={props.status} pageVars={props.pageVars} />
        case 'AboutMe':
            return <AboutMe status={props.status} pageVars={props.pageVars} />
        case 'Projects':
            return <Projects status={props.status} pageVars={props.pageVars} />
        default:
            return <div>not quite there yet</div>

    }
    /*   case 'Projects':
          return <Projects status={props.status} pageVars={props.pageVars} />
      case 'Skills':
          return <Skills status={props.status} pageVars={props.pageVars} />
      case 'History':
          return <History status={props.status} pageVars={props.pageVars} />
      case 'Contact':
          return <Contact status={props.status} pageVars={props.pageVars} />
      case 'Blog':
          return <Blog status={props.status} pageVars={props.pageVars} />

  } */
}
export default DivContainer