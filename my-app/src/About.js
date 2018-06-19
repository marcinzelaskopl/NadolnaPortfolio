import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png'


class SectionAbout extends React.Component {
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-6 info-section'}>
                        <img src={logo}/>
                        <p>
                            For last couple of years I have been trying to develop my skills in two areas.
                            First of all, I studied English Philology and second of all, any time left I spent on creating and improving my drawing skill.
                            I studied at the university simultaneously with taking a course of Graphic Design.
                            At the course I learned all the essentials so I could use them in a creative process.
                            For that couple of years I experienced what hard work is and taught myself self-discipline.</p>
                        <p>You can find me on some social medias</p>
                    </div>
                    <div className={'col-6 youtube-section'}>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionAbout