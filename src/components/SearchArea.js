import React, { Component } from 'react';
import rightDivImage from '../static/kaba.png';
// import leftDivImage from '../static/rsz_muhammad.png';

export default class SearchArea extends Component {
    state = {
        surahName: '',
        para: 0,
        ayatNumber: 0
    }

    onChange(e) {
        console.log(e.target.name);
    }

    render() {
        return (
            <div className="row" style={{ height: '250px' }}>
                <div className="col-sm-2" >
                    {/* <img src={leftDivImage} alt="left image" style={{ maxWidth: '100%', height: 'auto' }}></img> */}
                </div>
                <div className="col-sm-7">
                    <form style={{ marginTop: '20%' }}>
                        <p>Search any ayat here...</p>
                        <div className="form-row" >
                            <div className="col-7">
                                <input type="text" className="form-control" placeholder="Surah Name / Para" name = "surahOrPara" onChange={this.onChange}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Ayat Number" name = "ayatNumber" onChange={this.onChange}/>
                            </div>
                            <div className="col">
                                <input type="button" className="btn btn-outline-success" value="Search" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-3" style={{ padding: '15px' }}>
                    <img src={rightDivImage} alt="left image" style={{ maxWidth: '100%', height: 'auto' }}></img>
                </div>
            </div>
        )
    }
}
