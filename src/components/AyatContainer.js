import React, { Component } from 'react';
import AyatView from './AyatView';
import { withRouter } from 'react-router-dom';
import { QuranStorageService } from '../services/quranStorageEthService';
import Pagination from './Pagination';
import rightDivImage from "../static/ayatPng.png";

class AyatContainer extends Component {

    state = {
        ayats: [],
        page: 1,
        disableIncrement: false,
        disableDecrement: false,
        maxPage: 6236
    }

    async request(index) {
        let contractDetails = sessionStorage.getItem('contractDetails');
        if (contractDetails) {
            let cd = JSON.parse(contractDetails);
            let qss = new QuranStorageService(cd);
            let ayatData = await qss.getByIndex(index);
            console.log("Index based: ", ayatData);
            this.setState({ ayats: [ayatData], page: parseInt(index) });
        }
    }

    handlePageIncrement = () => {
        if(this.state.page < this.state.maxPage) {
            this.setState({ page: this.state.page + 1, disableDecrement: false}, () => {
                this.request(this.state.page);
            })
        } 
        else
            this.setState({disableIncrement: true});
    }

    handlePageDecrement = () => {
        if(this.state.page <= 1)
            this.setState({disableDecrement: true});
        else {
            this.setState({ page: this.state.page - 1, disableIncrement: false }, () => {
                this.request(this.state.page);
            });
        }
            
    }

    componentDidMount() {
        this.index = this.props.location.state.index;
        const passedState = this.props.location.state;
        if (passedState) {
            if (passedState.ayat) {
                //console.log("this is ayat: ", this.props.location.state.ayat);
                this.setState({ ayats: [passedState.ayat], page: parseInt(passedState.ayat[0].index)});
            }
            else if (passedState.index) {
                this.request(passedState.index);
            }
            else {
                console.error("Payload not set properly");
            }
        }
    }

    render() {

        return (
            <div
            style={{
                background: `
                url(${rightDivImage}) center/cover fixed no-repeat`,
                height:"100vh"
                
            }}
            >
                <div>
                    {this.state.ayats.map((a) => <AyatView key={a.index} ayat={a} />)}
                </div>
                <div className="mt-5 text-center">
                    <p>{'Ayat Index: '+ this.state.page}</p>
                    <Pagination
                        increment={this.handlePageIncrement}
                        decrement={this.handlePageDecrement}
                        disableIncrement={this.state.disableIncrement}
                        disableDecrement={this.state.disableDecrement}
                    />
                </div>

            </div>
        )
    }

}

export default withRouter(AyatContainer);
