import React, { Component } from 'react';
import './App.scss';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    withRouter,
    Redirect,
} from 'react-router-dom'
import video from './videos/omg.mp4'
import About from './About.js'
import Projects from "./Projects";
import Contact from "./Contact";

class Nav extends React.Component {
    render(){
        return (
            <div>
                <ul className={'nav'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        )
    }
}

class ContinueButton extends React.Component{


    render(){
        return(
            <Link className='button' to='/about'>CONTINUE</Link>
        )
    }
}


class Main extends React.Component {
    render(){
        return(
            <div className={'grid-container front'}>
                <div className={'row'}>
                    <div className="col-12 background-holder">
                        <video className={'video-background'} autoPlay muted playsInline>
                            <source src={video} type={'video/mp4'}/>
                        </video>
                        <h1 className={'slide-left'}>Asia Nadolna</h1>
                        <h2>Artist / <span className={'slash-style'}>Graphic</span> / Designer</h2>
                        <ContinueButton/>
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
                <Route path='/projects' component={Projects}/>
                <Route path={'/contact'} component={Contact}/>
                <Route component={NotFound}/>
            </Switch>
            </div>
        </HashRouter>;
    }
}

export default App;
