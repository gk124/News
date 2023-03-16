import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// export class Headlines extends Component {
    const Headlines=()=>{
    // render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" style={{marginTop:"65px"}}>
                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <div className="d-flex justify-content-around">
                                    <li className="nav-item p-3">
                                        <Link className="nav-link" aria-current="page" to="/business">Business</Link>
                                    </li>
                                    <li className="nav-item p-3">
                                        <Link className="nav-link" to="/sport">Sports</Link>
                                    </li>
                                    <li className="nav-item p-3">
                                        <Link className="nav-link" to="/general">General</Link>
                                    </li>
                                    <li className="nav-item p-3">
                                        <Link className="nav-link" to="/science" >Science</Link>
                                    </li>
                                    <li className="nav-item p-3">
                                        <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                    </li>
                                    <li className="nav-item p-3">
                                        <Link className="nav-link" to="/technology">Technology</Link>
                                    </li>
                                    <li className="nav-item p-3">
                                        <Link className="nav-link" to="/health">Health</Link>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    // }
}

export default Headlines