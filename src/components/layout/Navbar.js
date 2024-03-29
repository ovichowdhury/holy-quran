import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { NotificationManager } from "react-notifications";


class Navbar extends Component {

    linkStyle = {
        padding: '10px',
        color: 'white'

    }

    state = {
        searchText: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let val = parseInt(this.state.searchText);
        if (isNaN(val)) {
            NotificationManager.error("Please enter number between 1 to 6236", "Warning", 5000);
        }
        else {
            console.log("from nav: ", this.props.history.location);
            if (this.props.history.location.pathname !== '/search') {

                this.props.history.replace('/search', { index: val })
            }
            else {
                //this.setState({ searchText: "" });
                console.log("i am in proxy redirect");
                this.props.history.replace('/proxyredirect', { to: '/search', index: val });
            }
        }
        this.setState({ searchText: "" });
    }

    render() {
        return (
            <div className="" style={{width:"100%", position:"fixed", top:0, zIndex:100 }}>
                <nav className="navbar navbar-expand-lg navbar-custom navbar-dark" style={{ backgroundColor: "#000c24"}}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo01">

                        <h3 style={{ color: 'white', marginRight: "5rem", fontFamily: "'Julius Sans One', sans-serif" }}> &nbsp;Holy<span className="" style={{ color: "#ff7f00", fontSize: "45px" }}>Q</span>uran</h3>


                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 " style={{ fontFamily: "'Julius Sans One', sans-serif" }} >
                            <li className="nav-item active hvr-forward">
                                <Link to='/' style={this.linkStyle}>Home</Link>
                            </li>
                            <li className="nav-item hvr-forward">
                                <Link to='/about' style={this.linkStyle}>About</Link>
                            </li>
                        </ul>

                        {/* <a className="navbar-brand" href="#">Holy Quran</a> */}


                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Ayat index" onChange={this.onChange} name="searchText" style={{ borderRadius: "30px" }} autoComplete="off" value={this.state.searchText} />
                            <button className="btn btn-outline-light my-2 my-sm-0" onClick={this.onSubmit}> <i className="fas fa-search"> </i></button>
                        </form>


                    </div>
                </nav>
            </div>
        )
    }


}

export default withRouter(Navbar);

