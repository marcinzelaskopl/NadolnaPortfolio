import React, { Component } from 'react';
import './App.scss';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom'
import video from './videos/omg.mp4'
import About from './About.js'

class Nav extends React.Component {
    render(){
        return (
            <div>
                <ul className={'nav'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><a>Projects</a></li>
                    <li><Link to='/contact'>Contact</Link></li>
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
                        <h2>Artist / <span className={'slash-style'}>Graphic</span> / Designer</h2>
                        <button>CONTINUE</button>
                    </div>
                </div>
                </div>
        )
    }
}

class Front extends React.Component {
    render(){
        return (
            <div>
                <Main/>
            </div>
        )
    }
}

class NotFound extends React.Component {
    render(){
        return (
            <h1>404, Nothing is here</h1>
        )
    }
}




class App extends React.Component {
    render() {
        return <HashRouter>
            <div>
                <Nav/>
            <Switch>
                <Route exact path='/' component={Front} />
                <Route path='/about' component={About}/>
                <Route component={NotFound}/>
            </Switch>
            </div>
        </HashRouter>;
    }
}

export default App;
