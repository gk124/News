import React from 'react'
import google from '../img/google.png'
import github from '../img/GitHub.png'


export default function Login() {

    const Google = () => {
        window.open('http://localhost:5000/auth/google', '_self');
    }
    const Github = () => {
        window.open('http://localhost:5000/auth/github', '_self');
    }

    return (
        <div className="container text-center login">
            <h2 className="loginTitle">Choose a Login Method</h2>
            <div className="wrapper">
                <div className="left ">
                    <div className="loginButton google" onClick={Google}>
                        <img src={google} alt="" className='icon' />
                        Google
                    </div>
                    <div className="loginButton github" onClick={Github}>
                        <img src={github} alt="" className='icon' />
                        GitHub
                    </div>
                </div>
                
            </div>
        </div>
    )
}
