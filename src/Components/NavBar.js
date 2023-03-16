import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// rce --> react class based component
// export class NavBar extends Component {                //for class
    const NavBar=()=>{                              //for function based
    // render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><h3>News<span style={{color:"red",}}>Mania</span></h3></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </div>
        )
    // }
}

export default NavBar