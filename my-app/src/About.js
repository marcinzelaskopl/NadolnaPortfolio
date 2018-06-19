import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png'
import behance from './icons/beh.png'
import linkedin from './icons/link.png'
import instagram from './icons/instagram.png'


class SectionAbout extends React.Component {
    render(){
        return (
            <div className={'grid-container about'}>
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
                        <div className={'icons'}>
                        <a target={'_blank'} href={'https://www.behance.net/asianadolna'}><img src={behance}/></a>
                        <a target={'_blank'} href={'https://www.linkedin.com/in/joanna-nadolna-b79952142/'}><img src={linkedin}/></a>
                        <a target={'_blank'} href={'https://www.instagram.com/sobiewymysl/'}><img src={instagram}/></a>
                        </div>
                    </div>
                    <div className={'col-6 youtube-section'}>
                        <p className={'youtube-header'}>Check out my Youtube channel!</p>
                        <iframe width={520} height={415} src={'https://www.youtube.com/embed/58qG-CuNPLw'}></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionAbout