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
          <div className=" col-sm-6 mb-3 d-flex justify-content-center" style={{position:"relative"}}>
            <div className="" style={{position:"absolute", top:50, left:65, zIndex:1}}>
              <dt
                class="d-flex align-items-center justify-content-center"
                style={{
                  color: "#fff",
                  height: "90px",
                  width: "90px",
                  borderRadius: 80,
                  backgroundColor: "#bc4571",
                  boxShadow: "1px 0px 3px #000"

                }}
              >
                Index : {this.props.ayat[0].index}
              </dt>
            </div>
            <div class=" d-flex align-items-center" style={{position:"absolute", top:0, left:140, zIndex:0}}>
              <dt
                class="d-flex align-items-center justify-content-center"
                style={{
                  color: "#fff",
                  height: "110px",
                  width: "110px",
                  borderRadius: 80,
                  backgroundColor: "#899952",
                  boxShadow: "1px 0px 3px #000"
                }}
              >
                Verse : {this.props.ayat[0].ayatNumber}
              </dt>
            </div>
            <div class="">
              <dt
                class="d-flex align-items-center justify-content-center"
                style={{
                  color: "#fff",
                  height: "150px",
                  width: "150px",
                  borderRadius: 80,
                  backgroundColor: "#717171",
                  boxShadow: "1px 0px 3px #000",
                  textAlign:"center"
                  
                }}
              >
                Surah : <br/>{this.props.ayat[0].surah.toUpperCase()}
              </dt>
            </div>
            <div class=" d-flex align-items-center" style={{position:"absolute", zIndex:-1, left:370, top:30}} >
              <dt
                class="d-flex align-items-center justify-content-center"
                style={{
                  color: "#fff",
                  height: "120px",
                  width: "120px",
                  borderRadius: 80,
                  backgroundColor: "#0c8579",
                  boxShadow: "1px 0px 3px #000"
                }}
              >
                Para : {this.props.ayat[0].para}
              </dt>
            </div>

            
          </div>


          

          
        </div>
        <div className="row d-flex justify-content-center">
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
