import React, {Component} from 'react';
import './App.css';
import logo from './images/logo.png'
import behance from './icons/beh.png'
import linkedin from './icons/link.png'
import instagram from './icons/instagram.png'

class Contact extends React.Component {
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handleTextChange = (event) => {
        this.setState({
            textarea: event.target.value
        })
    }

    handleClick = (event) => {
    }



    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            textarea: '',
        }
    }

    render() {
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-6 contact-form'}>
                        <form action={"https://mailthis.to/marcinzelaskov@gmail.com"} method={'POST'} encType={'multipart/form-data'}>
                            <label className={'form-title'}>Send me a message!</label>
                            <label>Name </label>
                            <input onChange={this.handleNameChange} type={'text'} name={'name'} placeholder={'Your' +
                            ' name here'}
                                   value={this.state.name}/>
                            <label>Email</label>
                            <input onChange={this.handleEmailChange} type={'email'} name={'_replyto'} placeholder={'Your email here'} value={this.state.email}/>
                            <label>Your message</label>
                            <textarea onChange={this.handleTextChange} placeholder={'Enter your message here'} name={'message'}></textarea>
                            <input className={'submit'} onClick={this.handleClick} type={'submit'} value={'Send'}/>
                        </form>
                    </div>
                    <div className={'col-6 direct-info'}>
                        <img className={'logo'} src={logo} alt={'logo'}/>
                        <a className={'first-link'} target={'_blank'} href={'https://www.behance.net/asianadolna'}><img src={behance}/></a><p className={'first-text'}> Catch me on Behance!</p>
                        <a className={'second-link'} target={'_blank'} href={'https://www.linkedin.com/in/joanna-nadolna-b79952142/'}><img src={linkedin}/></a> <p className={'second-text'}>...or Linkedin!</p>
                        <a className={'third-link'} target={'_blank'} href={'https://www.instagram.com/sobiewymysl/'}><img src={instagram}/></a><p className={'third-text'}>...or you just can check out my Instagram!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact