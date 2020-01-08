import React, { Component } from "react";
import { Surah } from "../static/SurahName";
import { withRouter } from "react-router-dom";

class ContentArea extends Component {
  state = {
    flag: false,
    checkedButton: true,
    surah: "",
    para: "",
    surahList: Surah
  };

  // componentDidMount() {
  //   this.setState({ checkedButton: true });
  // }

  handleClick = id => {
    console.log("Handle click is working");
    const surahId = id.toString();
    console.log("SurahId", surahId);
    let surahDetect = surahId - 1;
    console.log("SurahSearchforIndex", surahDetect);
    const surahArr = Surah;
    console.log("FirstIndex", surahArr[surahDetect].fIndex);
    console.log("LastIndex", surahArr[surahDetect].lIndex);

    this.props.history.push("/search", { index: surahArr[surahDetect].fIndex });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSurah = () => {
    this.setState({ flag: false, checkedButton: true });
  };

  onpara = () => {
    this.setState({ flag: true, checkedButton: false });
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
        style={{ cursor: "pointer" }}
      >
        {this.state.surahList.map(s => (
          <div className="col-sm-4 mt-3" key={s.id}>
            <div
              className="card"
              style={{ boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)" }}
            >
              <div
                className="card-body m-auto"
                onClick={() => this.handleClick(s.id)}
              >
                <p style={{ fontSize: "20px" }}>
                  <span>{s.id}.</span> {s.surahNameEng}{" "}
                  <span
                    className="text-success"
                    style={{
                      fontFamily: "'Scheherazade', serif",
                      fontWeight: "bold",
                      fontSize:"25px"
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

    const showpara = (
      <div>
        <h1>para</h1>
      </div>
    );

    return (
      <div className="container">
        <div className="row d-flex justify-content-center mt-4">
          <div className="radio mr-3">
            <label className="text-success" style={{ cursor: "pointer" }}>
              <input
                type="radio"
                name={this.state.surah}
                onClick={this.onSurah}
                checked={this.state.checkedButton}
              />
              &nbsp; Surah
            </label>
          </div>
          <div className="radio">
            <label className="text-warning" style={{ cursor: "pointer" }}>
              <input
                type="radio"
                name={this.state.para}
                onClick={this.onpara}
                checked={!this.state.checkedButton}
              />
              &nbsp; Para
            </label>
          </div>
        </div>

        {this.state.flag ? showpara : showSurah}
      </div>
    );
  }
}

export default withRouter(ContentArea);
