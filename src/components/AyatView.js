import React, { Component } from 'react';


export default class AyatView extends Component {

    

    render() {
        let items = [];
        for(let i = 1; i<this.props.ayat.length; i++) {
            console.log(this.props.ayat[i]);
            items.push(<div> {this.props.ayat[i].ayat} </div>);
        }
        console.log(items);
        // console.log(this.props.ayat);
        return (
            <div className="row" style={{ padding: "10px" }}>

                <div className="col-sm-2"></div>
                <div className="col-sm-8" style={{ borderBottom: "2px dashed #c3c9c5" }}>
                    <div>

                        <p dir="rtl" style={{ textAlign: "right", color: "black" }}>
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