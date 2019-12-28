import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import SearchArea from './SearchArea';

export default class Home extends Component {
    render() {
        
        return (
            <div>
                <Navbar />
                <SearchArea />
                
            </div>
        )
    }
}