import React, { Component } from "react";
import rightDivImage from "../static/logo1.png";
// import leftDivImage from '../static/rsz_muhammad.png';
import { QuranStorageService } from "../services/quranStorageEthService";
import { withRouter } from "react-router-dom";
import { NotificationManager } from "react-notifications";

import { Surah } from "../static/SurahName";

class SearchArea extends Component {
    state = {
        surahName: "",
        para: "",
        ayatNumber: "",
        any: "",
        autoCompleteDom: ""
    };

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.request = this.request.bind(this);
        this.handleInput = this.request.bind(this);
    }

    async request(type) {
        let contractDetails = sessionStorage.getItem("contractDetails");
        let ayatData;
        if (contractDetails) {
            let cd = JSON.parse(contractDetails);
            let qss = new QuranStorageService(cd);
            switch (type) {
                case "surah":
                    ayatData = await qss.getBySurah(
                        this.state.surahName.toLowerCase(),
                        this.state.ayatNumber
                    );
                    break;
                case "para":
                    ayatData = await qss.getByPara(
                        this.state.para,
                        this.state.ayatNumber
                    );
                    break;
            }

            return ayatData;
        } else {
            alert("Contract Details not Found. Please Reload.");
            return null;
        }
    }

    onChange(e) {
        if (e.target.name === "surahOrPara") {
            let v = parseInt(e.target.value);
            console.log("text:", v);
            if (isNaN(v)) {
                this.setState({ surahName: e.target.value }, () => {
                    // console.log("my con:", this.state.surahName);
                    this.searchSurah(this.state.surahName);
                });
            }
            else this.setState({ para: e.target.value });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    searchSurah = searchText => {
        console.log(searchText);
        const match = document.getElementById("match-list");

        let matching = Surah.filter(matchData => {
            let stringId = matchData.id.toString();
            const regex = new RegExp(`${searchText}`, "gi");
            return matchData.surahNameEng.match(regex) || stringId.match(regex);
        });

        if (searchText.length === 0) {
            matching = [];
            console.log(matching);
            this.setState({
                autoCompleteDom: ""
            });
        }

        this.outPut(matching);
    };

    // Show Result in Html
    outPut = matchingData => {
        if (matchingData.length > 0) {
            //const match = document.getElementById("match-list");
            const html = matchingData.slice(0, 5).map(data => {
                return (
                    <div
                        className="card card-body mb-1 shadow animated pulse faster"
                        key={data.id}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            this.setState({
                                surahName: data.surahNameEng,
                                autoCompleteDom: ""
                            }, () => document.getElementById("search").value = this.state.surahName)

                        }
                        }
                    >
                        <p style={{ fontSize: "13px" }}>
                            {data.surahNameEng} <span style={{ fontFamily: "'Scheherazade', serif", fontWeight: "bold" }}>({data.surahNameArb})</span>{" "}
                            <span className="text-success">{data.englishTitle}</span>
                        </p>
                    </div>
                );
            });

            //console.log(html);

            this.setState({ autoCompleteDom: html });
        }
    };

    async onSearch(e) {
        try {
            if (this.state.surahName !== "") {
                //request for getBySurah
                let ayatData = await this.request("surah");
                console.log(ayatData);
                this.props.history.push("/search", { ayat: ayatData });
            } else if (this.state.para !== "") {
                // request for getByPara
                let ayatData = await this.request("para");
                console.log(ayatData);
                this.props.history.push("/search", { ayat: ayatData });
            }
        } catch (ex) {
            console.error(ex);
            //alert("Please check your inputs");
            NotificationManager.error("Please check your inputs", "Warning", 5000);
        }
    }

    render() {
        return (
            <div className="container " id="searchBack" >
                <div className="row d-flex justify-content-center ">
                    <div
                        className="col-sm-8 mt-4"
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <img
                            className="hvr-bob"
                            src={rightDivImage}
                            alt="left image"
                            width="150px"
                            height="150px"
                            style={{borderRadius:100}}
                        ></img>
                    </div>
                    <div className=" col-sm-8 mt-4" style={{zIndex:"1"}}>
                        <div
                            className="card"
                            style={{ boxShadow: "1px 0px 3px rgba(0, 0, 0, .1)" }}
                        >
                            <div className="card-body hvr-icon-grow-rotate">
                                <form>
                                    <p className="">
                                        {" "}
                                        <i className="fas fa-search hvr-icon text-success"></i> &nbsp;Search any ayat
                                        here...
                  </p>

                                    <div className="form-row">
                                        <div className="col-sm-7">
                                            <input
                                                type="text"
                                                id="search"
                                                className="form-control"
                                                placeholder="Surah Name / Para"
                                                name="surahOrPara"
                                                onChange={this.onChange}
                                                autoComplete="off"
                                                onFocus={(e)=>e.target.select()}
                                            // value={this.state.surahName || this.state.para}
                                            />
                                            <div
                                                id="match-list"
                                                className="col-sm-12"
                                                style={{ position: "absolute" }}
                                            >
                                                {this.state.autoCompleteDom}
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Ayat Number"
                                                name="ayatNumber"
                                                onChange={this.onChange}
                                                autoComplete="off"
                                            />
                                        </div>
                                        <div className="col-sm-2">
                                            <input
                                                type="button"
                                                className="btn btn-outline-success"
                                                value="Search"
                                                onClick={this.onSearch}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SearchArea);
