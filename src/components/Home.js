import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import SearchArea from './SearchArea';
import AyatView from './AyatView';

export default class Home extends Component {
    render() {
        let data = [{ayat: "araskdfjskadfjksdngjk"}, {ayat: "sjdfjksadfjg"}];
        return (
            <div>
                <Navbar />
                <SearchArea />
                <AyatView ayat={data}/>
                <AyatView ayat={data}/>
            </div>
        )
    }
}