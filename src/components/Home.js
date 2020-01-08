import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import SearchArea from './SearchArea';
import ContentArea from './ContentArea';

export default class Home extends Component {
    render() {

        return (
            <div>
                <Navbar />
                <SearchArea />
                <br />
                <ContentArea />
            </div >
        )
    }
}