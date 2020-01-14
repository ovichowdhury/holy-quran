import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import Mehedi from "../static/mehedi1.jpg";
import Monir from "../static/monir.jpeg";
import Nahid from "../static/ovipass.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <div style={{ marginLeft: '10%', marginRight: '10%',  marginTop: '2%', fontFamily:"'Abel', sans-serif", fontSize:"18px"}}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </div> */}
        <div className="container">
          <div className="row mt-5 d-flex justify-content-center hvr-icon-grow-rotate">
            <div className="col-sm-12">
              <header
                className="display-5"
                style={{ fontFamily: "'Satisfy', cursive", fontSize: "25px" }}
              >
                <i class="fas fa-users hvr-icon" style={{ color: "#899952" }}></i>&nbsp;
                About The Team
              </header>
              <hr></hr>
            </div>
          </div>
          <div className="row d-flex justify-content-around">
            <div className="col-sm-4  text-center">
              <img
                className="hvr-bob hvr-glow"
                src={Mehedi}
                alt="Mehedi"
                width="150px"
                height="150px"
                style={{ borderRadius: 100 }}
              />
              <p className="mt-2" style={{color:"#333"}}>Mehedi Hasan Ishan</p>
            </div>
            <div className="col-sm-4  text-center">
              <img
                className="hvr-bob hvr-glow"
                src={Monir}
                alt="Monir"
                width="150px"
                height="150px"
                style={{ borderRadius: 100 }}
              />
              <p className="mt-2" style={{color:"#333"}}>Monir Shimul</p>
            </div>
            <div className="col-sm-4  text-center">
              <img
                className="hvr-bob hvr-glow"
                src={Nahid}
                alt="Nahid"
                width="150px"
                height="150px"
                style={{ borderRadius: 100 }}
              />
              <p className="mt-2" style={{color:"#333"}}>Nahid Chowdhury</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
