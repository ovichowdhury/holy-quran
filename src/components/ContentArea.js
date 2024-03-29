import React, { Component } from "react";
import { Surah } from "../static/SurahName";
import { withRouter } from "react-router-dom";
import { Para } from './../static/ParaName';

class ContentArea extends Component {
  state = {
    checkSurah: true,
    checkPara: false,
    surah: "",
    para: "",
    surahList: Surah,
    paraList: Para
  };

  // componentDidMount() {
  //   this.setState({ checkedButton: true });
  // }

  handleClick = id => {
    //console.log("Handle click is working");
    const surahId = id.toString();
    //console.log("SurahId", surahId);
    let surahDetect = surahId - 1;
    //console.log("SurahSearchforIndex", surahDetect);
    const surahArr = Surah;
    //console.log("FirstIndex", surahArr[surahDetect].fIndex);
    //console.log("LastIndex", surahArr[surahDetect].lIndex);

    this.props.history.push("/search", { index: surahArr[surahDetect].fIndex });
  };

  handleParaClick = id => {
    //console.log("click is working", id);
    const firstIndex = Para[id - 1].parafIndex;
    this.props.history.push("/search", { index: firstIndex });

  }


  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSurah = () => {
    this.setState({ checkSurah: true, checkPara: false });
  };

  onPara = () => {
    this.setState({ checkSurah: false, checkPara: true });
  };

  // toggle = (val) => {
  //   if (val === false) {
  //     console.log("Surah")
  //   } else {
  //     console.log("para");
  //   }
  // }

  render() {
    const showSurah = (
      <div
        className="row d-flex justify-content-center mt-3 "
        
        style={{ cursor: "pointer", }}
      >
        {this.state.surahList.map(s => (
          <div className="col-sm-4 mt-3" key={s.id}>
            <div
              className="card  hvr-shadow-radial"
              id="surahCard"
              style={{ boxShadow: "1px 0px 3px rgba(0, 0, 0, .1)" }}
            >
              <div
                className="card-body m-auto"
                onClick={() => this.handleClick(s.id)}
              >
                <p style={{fontSize:"15px",fontFamily:"'Capriola', sans-serif"}}>
                  <span>{s.id}.</span> {s.surahNameEng}{" "}
                  <span
                    className="text-success"
                    style={{
                      fontFamily: "'Scheherazade', serif",
                      fontWeight: "bold",
                      fontSize: "25px"
                    }}
                  >
                    ( {s.surahNameArb} )
                  </span>{" "}
                  {/* <span className="text-info" style={{ fontSize: "10px" }}>{s.englishTitle}</span> */}
                </p>
                <small>
                  Details: {s.details} , Total Ayat:{" "}
                  <span className="text-warning">{s.totalAyat}</span>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    );

    const showPara = (
      <div
        className="row d-flex justify-content-center mt-3 "
        style={{ cursor: "pointer" }}
      >
        {this.state.paraList.map(p => (
          <div className="col-sm-4 mt-3" key={p.paraId}>
            <div
              className="card hvr-shadow-radial"
              style={{ boxShadow: "1px 0px 3px rgba(0, 0, 0, .1)" }}
            >
              <div
                className="card-body text-center"
                onClick={() => this.handleParaClick(p.paraId)}
              >
                <p style={{fontSize:"15px",fontFamily:"'Capriola', sans-serif"}}>
                  <span>{p.paraId}.</span> {p.paraEngName}{" "}
                  <span
                    className="text-success"
                    style={{
                      fontFamily: "'Scheherazade', serif",
                      fontWeight: "bold",
                      fontSize: "25px"
                    }}
                  >
                    ( {p.paraArabName} )
                  </span>{" "}
                  {/* <span className="text-info" style={{ fontSize: "10px" }}>{s.englishTitle}</span> */}
                </p>
                <p style={{ fontSize: "15px" }}>
                  Total Ayat:{" "}
                  <span className="text-warning">{p.totalAyat}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );

    return (
      <div className="container">
        <div className="row d-flex justify-content-center pt-5">
          <div className="radio mr-3">
            <label className="text-success hvr-grow-rotate" style={{ cursor: "pointer",fontSize:"25px", fontFamily:"'Satisfy', cursive" }}>
              <input
                type="radio"
                name={this.state.surah}
                // onClick={this.onSurah}
                onChange={this.onSurah}
                checked={this.state.checkSurah}
              />
              &nbsp; Surah
            </label>
          </div>
          <div className="radio">
            <label className="text-warning hvr-grow-rotate" style={{ cursor: "pointer",fontSize:"25px", fontFamily:"'Satisfy', cursive"  }}>
              <input
                type="radio"
                name={this.state.para}
                // onClick={this.onPara}
                onChange={this.onPara}
                checked={this.state.checkPara}
              />
              &nbsp; Para
            </label>
          </div>
        </div>

        {this.state.checkSurah === true ? showSurah : showPara}
      </div>
    );
  }
}

export default withRouter(ContentArea);
