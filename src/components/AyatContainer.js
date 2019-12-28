import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import AyatView from './AyatView';
import { withRouter } from 'react-router-dom';

class AyatContainer extends Component {

    state = {
        ayats: []
    }

    componentDidMount() {
        if (this.props.location.state) {
            if (this.props.location.state.ayat) {
                this.setState({ ayats: [this.props.location.state.ayat, ...this.state.ayats] });
            }
        }
        else {
            console.error("Payload not set properly");
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div style={{padding: "25px"}}>
                    {this.state.ayats.map((a) => <AyatView key={Math.random().toString()} ayat={a} />)}
                </div>

            </div>
        )
    }

}

export default withRouter(AyatContainer);
