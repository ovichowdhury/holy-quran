import React, { Component } from 'react';
import SearchArea from './SearchArea';
import ContentArea from './ContentArea';


export default class Home extends Component {
    render() {

        return (
            <div>
                
                <SearchArea />
                <br />
                <ContentArea />
                
            </div >
        )
    }
}