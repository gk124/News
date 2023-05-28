import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// rce --> react class based component
// export class NavBar extends Component {                //for class
const NavBar = (props) => {                              //for function based
    // render() {

    const Logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
    }

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><h3>News<span style={{ color: "red", }}>Mania</span></h3></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {
                            props.user ?

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sport">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science" >Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>

                        </ul>
                            :
                            <></>
                        }


                            {
                                props.user ?

                                    <div className="navbar-text">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item px-3">
                                                <img src={props.user.photos[0].value} alt="img" className="avatar" />
                                            </li>
                                            <li className="nav-item px-3">
                                                {props.user.displayName}
                                            </li>
                                            <li className="nav-item px-3 logout" onClick={Logout}>
                                                Logout
                                            </li>
                                        </ul>
                                    </div>
                                    :
                                    <></>
                            }

                    </div>
                </div>
            </nav>

        </div>
    )
    // }
}

export default NavBar