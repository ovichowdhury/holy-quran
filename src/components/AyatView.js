import React, { Component } from "react";

export default class AyatView extends Component {
  render() {
    let items = [];
    for (let i = 1; i < this.props.ayat.length; i++) {
      console.log(this.props.ayat[i]);
      items.push(
        <div className="col-sm-8 mt-2 d-flex justify-content-center">
          <p>
            <i className="fas fa-book-open"></i> &nbsp;
            {this.props.ayat[i].ayat}
          </p>
        </div>
      );
    }
    console.log(items);
    // console.log(this.props.ayat);
    return (
      <div className="">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-6 mb-3 d-flex justify-content-center">
          <div className=" ">
              <dt class="d-flex align-items-center justify-content-center" style={{ color:"#fff", height:"90px", width:"90px", borderRadius: 80, backgroundColor:"#899952", boxShadow:"1px 0px 3px #000"}} >Index : {this.props.ayat[0].index}</dt>
              </div>
            <div class=" d-flex align-items-center">
              
              
              <dt class="d-flex align-items-center justify-content-center" style={{ color:"#fff", height:"120px", width:"120px", borderRadius: 80, backgroundColor:"#899952", boxShadow:"1px 0px 3px #000"}} >Verse : {this.props.ayat[0].ayatNumber}</dt>
              
            
             
            </div>
            <div class="">
            <dt class="d-flex align-items-center justify-content-center" style={{ color:"#fff", height:"150px", width:"150px", borderRadius: 80, backgroundColor:"#899952", boxShadow:"1px 0px 3px #000"}} >Surah : {this.props.ayat[0].surah}</dt>
            </div>
            <div class=" d-flex align-items-center">
              <dt class="d-flex align-items-center justify-content-center" style={{ color:"#fff", height:"120px", width:"120px", borderRadius: 80, backgroundColor:"#899952", boxShadow:"1px 0px 3px #000"}} >Para : {this.props.ayat[0].para}</dt>
            </div>
            
              
            {/* <ul className="list-group">
              <li className="list-group-item shadow d-flex justify-content-between align-items-center"
              style={{borderTop:"none"}}
              >
              Index:
                <span className="badge badge-success">{this.props.ayat[0].index}</span>
              </li>
              <li className="list-group-item shadow d-flex justify-content-between align-items-center">
              Surah:
                <span className="badge badge-success">{this.props.ayat[0].surah}</span>
              </li>
              <li className="list-group-item shadow d-flex justify-content-between align-items-center">
              Verse Number:
                <span className="badge badge-success">{this.props.ayat[0].ayatNumber}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center"
              style={{borderBottom:"none"}}
              >
              Para:
                <span className="badge badge-success">{this.props.ayat[0].para}</span>
              </li>
            </ul> */}
          </div>
          <div className="col-sm-8 mt-5 d-flex justify-content-center">
            <p
              dir="rtl"
              style={{
                textAlign: "right",
                color: "#333",
                fontSize: "245%",
                fontFamily: "'Scheherazade', serif"
              }}
            >
              <i className="fas fa-book-open" style={{ color: "#899952" }}></i>{" "}
              &nbsp;
              {this.props.ayat[0].ayat}
            </p>
          </div>

          {items}
        </div>
      </div>
    );
  }
}
