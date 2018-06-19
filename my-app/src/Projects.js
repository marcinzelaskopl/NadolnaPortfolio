import React, { Component } from 'react';
import './App.css';

let imgs = [
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400/231af658709499.5a060bc540a31.jpg'
]

let imgStyle = {
    backgroundImage:    imgs[0],
}

class Gallery extends React.Component {
    render(){
        return(
                <div style={imgStyle} className={'col-4'}>
                </div>
        )
    }
}

class Projects extends React.Component {
    render() {
        return(
            <div className={'grid-container'}>
                <div className={'row projects-holder'}>
                    <Gallery/>
                </div>
            </div>
        )
    }
}




export default Projects