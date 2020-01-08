import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import AyatView from './AyatView';
import { withRouter } from 'react-router-dom';
import { QuranStorageService } from '../services/quranStorageEthService';

class AyatContainer extends Component {

    state = {
        ayats: []
    }

    async request(index) {
        let contractDetails = sessionStorage.getItem('contractDetails');
        if (contractDetails) {
            let cd = JSON.parse(contractDetails);
            let qss = new QuranStorageService(cd);
            let ayatData = await qss.getByIndex(index);
            console.log("Index based: ", ayatData);
            this.setState({ ayats: [ayatData] });
        }
    }

    componentDidMount() {
        this.index = this.props.location.state.index;
        if (this.props.location.state) {
            if (this.props.location.state.ayat) {
                this.setState({ ayats: [this.props.location.state.ayat] });
            }
            else if (this.props.location.state.index) {
                this.request(this.props.location.state.index);
            }
            else {
                console.error("Payload not set properly");
            }
        }
    }

    render() {

        return (
            <div>
                <Navbar />
                <div style={{ padding: "25px" }}>
                    {this.state.ayats.map((a) => <AyatView key={a.index} ayat={a} />)}
                </div>

            </div>
        )
    }

}

export default withRouter(AyatContainer);
