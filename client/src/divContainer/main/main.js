import React, { useState, useEffect } from 'react';
import './main.css';

function Main(props) {
if(props.pageVars){
        return (
        <div className="main">
            <div className="mainContent">
                <div>
                <h2>{props.pageVars.main.title}</h2>
                <h3>{props.pageVars.main.subtitle}</h3>
                </div>
            </div>
            <a href={require('./dummy.pdf')} download className="download">download resume</a>
        </div>
    )
}else{
    return(
        <div>
            loading
        </div>
    )
}

}
export default Main