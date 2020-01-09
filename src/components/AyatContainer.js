import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import AyatView from './AyatView';
import { withRouter } from 'react-router-dom';
import { QuranStorageService } from '../services/quranStorageEthService';
import Pagination from './Pagination';

class AyatContainer extends Component {

    state = {
        ayats: [],
        page: 1,
        disableIncrement: false,
        disableDecrement: true,
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
        if (this.props.location.state) {
            if (this.props.location.state.ayat) {
                this.setState({ ayats: [passedState.ayat], page: parseInt(passedState.ayat.index)});
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
                <div style={{ padding: "25px" }}>
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
