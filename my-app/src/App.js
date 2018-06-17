import React, { Component } from 'react';
import './App.css';


class Nav extends React.Component {
    render(){
        return(
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <ul className={'nav'}>
                            <li>Home</li>
                            <li>About me</li>
                            <li>My work</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

class Main extends React.Component {
    render(){
        return(
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div class="col-12 background-holder">
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
            <Nav/>,
            <Main/>
        </div>
    );
  }
}

export default App;
