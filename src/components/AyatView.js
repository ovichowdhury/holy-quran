import React, { Component } from "react";
import border from '../static/border.png'

export default class AyatView extends Component {

  
  render() {
    let items = [];
    for (let i = 1; i < this.props.ayat.length; i++) {
      console.log(this.props.ayat[i]);
      items.push(
        <div className="col-sm-8 d-flex justify-content-center">
          <p className="mt-3" style={{fontSize:"20px",fontFamily:"'Capriola', sans-serif", color:"#333"}}>
            <i className="fas fa-book-open"></i> &nbsp;
            {this.props.ayat[i].ayat}
          </p>
        </div>
      );
    }
    console.log(items);
    // console.log(this.props.ayat);
  
    return (
      <div className="container">
        <div className="row d-flex justify-content-center" style={{fontFamily:"'Capriola', sans-serif", fontSize:"15px"}}>
          
          <div className=" col-sm-3 d-flex justify-content-center">
          <div
                className="d-flex align-items-center justify-content-center hvr-pop hvr-glow"
                style={{
                  color: "#fff",
                  height: "110px",
                  width: "110px",
                  borderRadius: 80,
                  backgroundColor: "#0c8579",
                  boxShadow: "1px 0px 3px #000",
                  border:"3px solid #fff"
                  
                }}
              >
                Para : {this.props.ayat[0].para}
              </div>
              <div
                className="d-flex align-items-center justify-content-center hvr-pop hvr-glow"
                style={{
                  color: "#fff",
                  height: "110px",
                  width: "110px",
                  borderRadius: 80,
                  backgroundColor: "#bc7840",
                  boxShadow: "1px 0px 3px #000",
                  border:"3px solid #fff"
                }}
              >
                Verse : {this.props.ayat[0].ayatNumber}
              </div>
          </div>
              
            
            
          
            
            
            <div
                className=" d-flex align-items-center justify-content-center hvr-pop hvr-glow"
                style={{
                  color: "#fff",
                  height: "150px",
                  width: "150px",
                  borderRadius: 80,
                  backgroundColor: "#717171",
                  boxShadow: "1px 0px 3px #000",
                  textAlign:"center",
                  border:"5px solid #fff"
                  
                }}
              >
                Surah : <br/>{this.props.ayat[0].surah.toUpperCase()}
              </div>
            
              

              <div className=" col-sm-3 d-flex justify-content-center">
              <div
                className="d-flex align-items-center justify-content-center hvr-pop hvr-glow"
                style={{
                  color: "#fff",
                  height: "110px",
                  width: "110px",
                  borderRadius: 80,
                  backgroundColor: "#bc4571",
                  boxShadow: "1px 0px 3px #000",
                  border:"3px solid #fff"

                }}
              >
                Index : {this.props.ayat[0].index}
              </div>
            
            
              <div
                className="d-flex align-items-center justify-content-center hvr-pop hvr-glow"
                style={{
                  color: "#fff",
                  height: "110px",
                  width: "110px",
                  borderRadius: 80,
                  backgroundColor: "#899952",
                  boxShadow: "1px 0px 3px #000",
                  border:"3px solid #fff"

                }}
              >
                Ruku : {this.props.ayat[0].ruku}
              </div>
              </div>
            
            
              
            
            
            
            

            
          


          

          
        </div>
        <div className="row d-flex justify-content-center">
        <div className="col-sm-9 d-flex justify-content-center" style={{backgroundImage:`url(${border})`, backgroundRepeat:"no-repeat", width:"100%", height:"170px", marginTop:"-80px", boxShadow:"0px 10px 0px", zIndex:0}}>
                
        </div>
        
        </div>       
        




        <div className="row d-flex justify-content-center">
        <div className="col-sm-8 mt-5 d-flex align-items-center justify-content-center"
         style={{ borderBottomStyle:"dashed", borderColor:"#717171"}}
        >
            <p
              className="mt-3"
              dir="rtl"
              style={{
                textAlign: "right",
                color: "#333",
                fontSize: "40px",
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
