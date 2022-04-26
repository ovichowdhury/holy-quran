import React, { Component } from 'react';
import SearchArea from './SearchArea';
import ContentArea from './ContentArea';

import rightDivImage from "../static/ayatPng.png";
export default class Home extends Component {
    render() {

        return (
            <div style={{
                background: `
                url(${rightDivImage}) center/cover fixed no-repeat`,
            }}>
                
                <SearchArea />
                <br />
                <ContentArea />
                
            </div >
        )
    }
}