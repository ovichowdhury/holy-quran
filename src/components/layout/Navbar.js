import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {

    linkStyle = {
        padding: '10px',
        color: 'white' 
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-custom navbar-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        {/* <a className="navbar-brand" href="#">Holy Quran</a> */}
                        <h3 style={{color: 'white'}}>Holy Quran</h3>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
                            <li className="nav-item active">
                                <Link to='/' style={this.linkStyle}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' style={this.linkStyle}>About</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }


}

