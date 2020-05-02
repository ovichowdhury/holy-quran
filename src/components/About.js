import React, { Component } from "react";
import Link from "react-router-dom";
import Navbar from "./layout/Navbar";
import Mehedi from "../static/mehedi1.jpg";
import Monir from "../static/monir.jpeg";
import Nahid from "../static/ovi.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <div style={{ marginLeft: '10%', marginRight: '10%',  marginTop: '2%', fontFamily:"'Abel', sans-serif", fontSize:"18px"}}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </div> */}
        <div className="container" style={{ backgroundColor: "#fcfcfc" }}>
          <div className="row mt-5 d-flex justify-content-center hvr-icon-grow-rotate" >
            <div className="col-sm-12">
              <header

                style={{ fontFamily: "'Satisfy', cursive", fontSize: "25px" }}
              >
                <i class="fas fa-users hvr-icon" style={{ color: "#899952" }}></i>&nbsp;
                About The Team
              </header>
              <hr></hr>
            </div>
          </div>




          <div className="row d-flex justify-content-around align-items-center" >
            <div className="col-sm-4  text-center">
              <a href="https://www.github.com/mehedihasan25">
                <img
                  className="hvr-bob hvr-glow"
                  src={Mehedi}
                  alt="Mehedi"
                  width="150px"
                  height="150px"
                  style={{ borderRadius: 100 }}

                />
              </a>



              <p className="mt-3" style={{ lineHeight: "7px", fontSize: "17px", fontFamily: "'Lobstar', cursive", color: "#5f7705" }}><i class="fas fa-id-card"></i> Md. Mehedi Hasan</p>
              <p className="" style={{ lineHeight: "7px", fontSize: "17px", fontFamily: "'Acme', sans-serif", color: "#595e5d" }}><i class="fas fa-laptop-code"></i> Blockchain Developer</p>
              <p className="" style={{ lineHeight: "7px", fontSize: "17px", fontFamily: "'Acme', sans-serif", color: "#595e5d" }}><i class="fas fa-university"></i> ERA Infotech Ltd.</p>
              <p className="" style={{ lineHeight: "7px", fontSize: "16px", fontFamily: "'Acme', sans-serif", color: "#595e5d" }}><i class="far fa-envelope"></i> ishanmehadi@gmail.com</p>


            </div>
            <div className="col-sm-4  text-center">
              <a href="https://www.github.com/monirshimul">
                <img
                  className="hvr-bob hvr-glow"
                  src={Monir}
                  alt="Monir"
                  width="150px"
                  height="150px"
                  style={{ borderRadius: 100 }}
                />
              </a>

              <p className="mt-3" style={{ lineHeight: "7px", fontSize: "17px", fontFamily: "'Lobstar', cursive", color: "#5f7705" }}><i class="fas fa-id-card"></i> Md. Monirul Islam</p>
              <p className="" style={{ lineHeight: "7px", fontSize: "17px", fontFamily: "'Acme', sans-serif", color: "#595e5d" }}><i class="fas fa-laptop-code"></i> Blockchain Developer</p>
              <p className="" style={{ lineHeight: "7px", fontSize: "17px", fontFamily: "'Acme', sans-serif", color: "#595e5d" }}><i class="fas fa-university"></i> ERA Infotech Ltd.</p>
              <p className="" style={{ lineHeight: "7px", fontSize: "16px", fontFamily: "'Acme', sans-serif", color: "#595e5d" }}><i class="far fa-envelope"></i> monirshimul@gmail.com</p>
            </div>
            <div className="col-sm-4  text-center">
              <a href="https://www.github.com/ovichowdhury">
                <img
                  className="hvr-bob hvr-glow"
                  src={Nahid}
                  alt="Nahid"
                  width="150px"
                  height="150px"
                  style={{ borderRadius: 100 }}
                />
              </a>

              <p className="mt-3" style={{ lineHeight: "7px", fontSize: "17px", fontFamily: "'Lobstar', cursive", color: "#5f7705" }}><i class="fas fa-id-card"></i> Nahid Chowdhury</p>
              <p className="" style={{ lineHeight: "7px", fontSize: "17px", fontFamily: "'Acme', sans-serif", color: "#595e5d" }}><i class="fas fa-laptop-code"></i> Blockchain Developer</p>
              <p className="" style={{ lineHeight: "7px", fontSize: "17px", fontFamily: "'Acme', sans-serif", color: "#595e5d" }}><i class="fas fa-university"></i> ERA Infotech Ltd.</p>
              <p className="" style={{ lineHeight: "7px", fontSize: "16px", fontFamily: "'Acme', sans-serif", color: "#595e5d" }}><i class="far fa-envelope"></i> nahid.chowdhury1995@gmail.com</p>
            </div>
          </div>


          <div className="row d-flex justify-content-center mt-4">
            <div className="jumbotron hvr-underline-from-center hvr-shadow" style={{ backgroundColor: "#fff" }}>
              <p style={{ fontFamily: "'Satisfy', cursive", fontSize: "25px", color: "#595e5d" }}>
                About Project
            </p>
              <hr></hr>
              <p style={{ fontSize: "15px", textAlign: "justify", fontFamily: "'Martel Sans', sans-serif" }}>
              Holy Quran is a decentralized application build on top of Ethereum Blockchain. This version of Quran (The central religious text of Islam) is immutable, decentralized and fraud-proof. 
              Our aim is to eventually deploy this proof-of-concept into production using Ethereum Main Net. Please contact us if you are interested to support this project by any means. Thank you.
              
                </p>
              <hr></hr>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="jumbotron hvr-underline-from-center hvr-shadow" style={{ backgroundColor: "#fff" }}>
              <p style={{ fontFamily: "'Satisfy', cursive", fontSize: "25px", color: "#595e5d" }}>
                About Ethereum Blockchain
        </p>
              <hr></hr>
              <p style={{ fontSize: "15px", textAlign: "justify", fontFamily: "'Martel Sans', sans-serif" }}>
              Ethereum is the most popular blockchain platform for DApps. Ethereum is a decentralized platform that allows us to build other blockchain-based DApps on top of it. In Ethereum, we build DApps using Ethereum smart contracts. Smart contracts are applications that run exactly as programmed without any possibility of downtime, censorship, fraud, or third-party interference. Ethereum can be thought of as a platform to deploy and run smart contracts.
                </p>
              <hr></hr>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
