import React, { Component } from 'react';


export default class AyatView extends Component {



    render() {
        let items = [];
        for (let i = 1; i < this.props.ayat.length; i++) {
            console.log(this.props.ayat[i]);
            items.push(<div>
                <p>
                    <i className="fas fa-quran"></i> &nbsp;
                    {this.props.ayat[i].ayat}
                </p>

            </div>);
        }
        console.log(items);
        // console.log(this.props.ayat);
        return (
            <div className="row" style={{ padding: "10px" }}>

                <div className="col-sm-2"></div>
                <div className="col-sm-8" style={{ borderBottom: "2px dashed #c3c9c5" }}>
                    <div>
                        <p>
                            <i class="far fa-check-circle"></i> &nbsp;
                            <i>Index: </i> {this.props.ayat[0].index}, &nbsp;
                            <i>Surah: </i> <b>{this.props.ayat[0].surah} </b>, &nbsp;
                            <i>Verse Number: </i> {this.props.ayat[0].ayatNumber}, &nbsp;
                            <i>Chapter: </i> {this.props.ayat[0].para}
                        </p>
                    </div>
                    <div>

                        <p dir="rtl" style={{ textAlign: "right", color: "black", fontSize: "250%", fontFamily: "'Scheherazade', serif" }}>
                            <i className="fas fa-quran"></i> &nbsp;
                            {this.props.ayat[0].ayat}
                        </p>
                    </div>

                    {items}


                </div>
                <div className="col-sm-2"></div>

            </div>
        )
    }




}