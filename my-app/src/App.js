import React, { Component } from 'react';
import './App.css';
import video from './videos/omg.mp4'

class Nav extends React.Component {
    render(){
        return (
            <div>
                <ul className={'nav'}>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        )
    }
}

class Main extends React.Component {
    render(){
        return(
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className="col-12 background-holder">
                        <video className={'video-background'} autoPlay muted loop playsInline>
                            <source src={video} type={'video/mp4'}/>
                        </video>
                        <h1>Asia Nadolna</h1>
                        <h2>Artist/Graphic/Designer</h2>
                        <span className={'arrow'}></span>
                    </div>
                </div>
                </div>
        )
    }
}


class About extends React.Component {
    render() {
        return (
            <div className={'grid-container about'}>
                <div className={'row'}>
                    <div className={'col-6 photo-section'}>
                    </div>
                    <div className={'col-6 info-section'}>
                    </div>
                </div>
            </div>
        )
    }
}




class App extends Component {
  render() {
    return (
        <div>
            <Nav/>
            <Main/>
            <About/>
        </div>
    );
  }
}

export default App;
