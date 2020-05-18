import React, { useState, useEffect } from 'react';
import './divContainer.css';

function DivContainer() {
    switch (this.props.catagory) {
        case 'Main':
            return <Main status={this.props.status} />
        case 'AboutMe':
            return <AboutMe status={this.props.status} />
        case 'Projects':
            return <Projects status={this.props.status} />
        case 'Skills':
            return <Skills status={this.props.status} />
        case 'History':
            return <History status={this.props.status} />
        case 'Contact':
            return <Contact status={this.props.status} />
        case 'Blog':
            return <Blog status={this.props.status} />

    }
}
export default DivContainer