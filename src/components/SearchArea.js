import React, { Component } from 'react';
import rightDivImage from '../static/logo1.png';
// import leftDivImage from '../static/rsz_muhammad.png';
import { QuranStorageService } from '../services/quranStorageEthService';
import {withRouter } from 'react-router-dom';
import {NotificationManager} from 'react-notifications';

class SearchArea extends Component {
    state = {
        surahName: '',
        para: '',
        ayatNumber: ''
    }

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.request = this.request.bind(this);
    }

    async request(type) {
        let contractDetails = sessionStorage.getItem('contractDetails');
        let ayatData;
        if (contractDetails) {
            let cd = JSON.parse(contractDetails);
            let qss = new QuranStorageService(cd);
            switch(type) {
                case 'surah':
                    ayatData = await qss.getBySurah(this.state.surahName, this.state.ayatNumber);
                    break;
                case 'para':
                    ayatData = await qss.getByPara(this.state.para, this.state.ayatNumber);
                    break;
            }
            
            return ayatData
        }
        else {
            alert("Contract Details not Found. Please Reload.");
            return null;
        }
    }

    onChange(e) {
        if (e.target.name === 'surahOrPara') {

            let v = parseInt(e.target.value);
            if (isNaN(v))
                this.setState({ surahName: e.target.value });
            else
                this.setState({ para: e.target.value });

        }
        else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    async onSearch(e) {
        try {
            if (this.state.surahName !== "") {
                //request for getBySurah
                let ayatData = await this.request('surah');
                console.log(ayatData);
                this.props.history.push('/search', {ayat: ayatData});
    
            }
            else if (this.state.para !== "") {
                // request for getByPara
                let ayatData = await this.request('para');
                console.log(ayatData);
                this.props.history.push('/search', {ayat: ayatData});
            }
        }
        catch(ex) {
            console.error(ex);
            //alert("Please check your inputs");
            NotificationManager.error('Please check your inputs', 'Warning', 5000);
            
        }
        

    }



    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                <div className="col-sm-8 mt-4" style={{display: "flex", justifyContent: "center" }}>
                    <img src={rightDivImage} alt="left image" style={{ width: "150px", height: "150px" }}></img>
                </div>
                <div className=" col-sm-8 mt-4">
                <div className="card shadow" style={{border:"none"}}>
                    <div className="card-hedaer">

                    </div>
                    <div className="card-body">
                    <form>
                        <p className=""> <i class="fas fa-search"></i> &nbsp;Search any ayat here...</p>
                        <div className="form-row" >
                            <div className="col-7">
                                <input type="text" className="form-control" placeholder="Surah Name / Chapter" name="surahOrPara" onChange={this.onChange} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Verse Number" name="ayatNumber" onChange={this.onChange} />
                            </div>
                            <div className="col">
                                <input type="button" className="btn btn-outline-success"  value="Search" onClick={this.onSearch} />
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
                    
                </div>
                
            </div>
            </div>
            
        )
    }
}

export default withRouter(SearchArea);