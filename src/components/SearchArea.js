import React, { Component } from "react";
import rightDivImage from "../static/logo1.png";
// import leftDivImage from '../static/rsz_muhammad.png';
<<<<<<< Updated upstream
import { QuranStorageService } from '../services/quranStorageEthService';
<<<<<<< Updated upstream
import {withRouter } from 'react-router-dom';
import {NotificationManager} from 'react-notifications';
=======
import { withRouter } from 'react-router-dom';
>>>>>>> Stashed changes
=======
import { QuranStorageService } from "../services/quranStorageEthService";
import { withRouter } from "react-router-dom";
import { NotificationManager } from "react-notifications";

import { Surah } from "../static/SurahName";
>>>>>>> Stashed changes

class SearchArea extends Component {
  state = {
    surahName: "",
    para: "",
    ayatNumber: "",
    any: ""
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
            this.state.surahName,
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

<<<<<<< Updated upstream
    async request(type) {
        let contractDetails = sessionStorage.getItem('contractDetails');
        let ayatData;
        if (contractDetails) {
            let cd = JSON.parse(contractDetails);
            let qss = new QuranStorageService(cd);
            switch (type) {
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
=======
  onChange(e) {
    if (e.target.name === "surahOrPara") {
      let v = parseInt(e.target.value);
      if (isNaN(v))
        this.setState({ surahName: e.target.value }, () => {
          console.log("my con:", this.state.surahName);
          this.searchSurah(this.state.surahName);
        });
      else this.setState({ para: e.target.value });
    } else {
      this.setState({ [e.target.name]: e.target.value });
>>>>>>> Stashed changes
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
      match.innerHTML = "";
    }

<<<<<<< Updated upstream
    async onSearch(e) {
        try {
            if (this.state.surahName !== "") {
                //request for getBySurah
                let ayatData = await this.request('surah');
                console.log(ayatData);
                this.props.history.push('/search', { ayat: ayatData });

            }
            else if (this.state.para !== "") {
                // request for getByPara
                let ayatData = await this.request('para');
                console.log(ayatData);
                this.props.history.push('/search', { ayat: ayatData });
            }
        }
        catch (ex) {
            console.error(ex);
            //alert("Please check your inputs");
            NotificationManager.error('Please check your inputs', 'Warning', 5000);
            
        }

=======
    this.outPut(matching);
  };
>>>>>>> Stashed changes

  // Show Result in Html
  outPut = matchingData => {
    if (matchingData.length > 0) {
      const match = document.getElementById("match-list");
      const html = matchingData
        .map(
          data => `
            <div class ="card card-body mb-1 shadow animated pulse faster">
                <h4>
                    ${data.surahNameEng} (${data.surahNameArb}) <span class="text-primary">
                        ${data.englishTitle}
                    </span>
                </h4>
                <small>Details: ${data.details} / Ayat: ${data.totalAyat} / Num: ${data.id}</small>
            </div>
        `
        )
        .join("");

      match.innerHTML = html;
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

<<<<<<< Updated upstream
    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-8 mt-4" style={{ display: "flex", justifyContent: "center" }}>
                        <img src={rightDivImage} alt="left image" style={{ width: "150px", height: "150px" }}></img>
                    </div>
                    <div className=" col-sm-8 mt-4">
                        <div className="card shadow" style={{ border: "none" }}>
                            <div className="card-hedaer">

                            </div>
                            <div className="card-body">
                                <form>
                                    <p className=""> <i className="fas fa-search"></i> &nbsp;Search any ayat here...</p>
                                    <div className="form-row" >
                                        <div className="col-7">
                                            <input type="text" className="form-control" placeholder="Surah Name / Para" name="surahOrPara" onChange={this.onChange} />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Verse Number" name="ayatNumber" onChange={this.onChange} />
                                        </div>
                                        <div className="col">
                                            <input type="button" className="btn btn-outline-success" value="Search" onClick={this.onSearch} />
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
=======
  render() {
    return (
      <div className="container" id="searchBack">
        <div className="row d-flex justify-content-center">
          <div
            className="col-sm-8 mt-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={rightDivImage}
              alt="left image"
              style={{ width: "150px", height: "150px" }}
            ></img>
          </div>
          <div className=" col-sm-8 mt-4">
            <div
              className="card "
              style={{ boxShadow: "1px 2px 3px rgba(0, 0, 0, .3)" }}
            >
              <div className="card-body">
                <form>
                  <p className="">
                    {" "}
                    <i class="fas fa-search"></i> &nbsp;Search any ayat here...
                  </p>

                  <div className="form-row">
                    <div className="col-sm-7">
                      <input
                        type="text"
                        id="search"
                        className="form-control"
                        placeholder="Surah Name / Chapter"
                        name="surahOrPara"
                        onChange={this.onChange}
                        autocomplete="off"
                      />
                      <div
                        id="match-list"
                        class=""
                        style={{ position: "absolute", zIndex: "1" }}
                      ></div>
                    </div>
                    <div className="col-sm-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Verse Number"
                        name="ayatNumber"
                        onChange={this.onChange}
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
>>>>>>> Stashed changes
}

export default withRouter(SearchArea);