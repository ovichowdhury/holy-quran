import React, { Component } from "react";
import Link from "react-router-dom";
import Navbar from "./layout/Navbar";
import Mehedi from "../static/mehedi1.jpg";
import Monir from "../static/monir.jpeg";
import Nahid from "../static/ovi.jpeg";
import bg from "../static/eraBgOne.jpg";
import rightBg from "../static/eraBgLogo.jpg";
import bgOne from "../static/eraBgTwo.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <div style={{ marginLeft: '10%', marginRight: '10%',  marginTop: '2%', fontFamily:"'Abel', sans-serif", fontSize:"18px"}}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </div> */}
        <div className="container" style={{ backgroundColor: "#fcfcfc" }}>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-sm-12 col-md-12 mt-5">
              <header
              style={{ fontFamily: "'Questrial', sans-serif", fontSize:"19px", marginTop:"20px" }}
              >
                <i
                  class="fas fa-users hvr-icon"
                  style={{ color: "#899952" }}
                ></i>
                &nbsp; About Organization
              </header>
              <hr/>
            </div>
          </div>
          <div className="row d-flex justify-content-between" style={{padding:"30px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <div
              className="col-sm-12 col-md-6"
              style={{
                padding: "5px",
                border: "1px solid #D3DEDC",
              }}
            >
              <img
                className="hvr-bob hvr-glow"
                src={bg}
                alt="Mehedi"
                width="100%"
                
                style={{
                  maxHeight:"50%"
                }}
              />
              <img
                className="hvr-bob hvr-glow"
                src={bgOne}
                alt="Mehedi"
                width="100%"
                
                style={{
                  maxHeight:"50%"
                }}
              />
            </div>
            <div
              className="col-sm-12 col-md-6"
              style={{
                border: "1px solid #D3DEDC",
                padding: "30px",
                background: `linear-gradient(rgba(6, 70, 99, 1), rgba(55, 65, 70, 0.9)),
                url(${rightBg}) center/cover fixed no-repeat`,
              }}
            >
              <small style={{ color: "#fff" }}>
                ERA-InfoTech Ltd -A Joint Venture IT Company formed by Bank Asia
                Ltd, Ranks ITT Ltd of Bangladesh and Sash Tech SG Pte. Ltd,
                Singapore. ERA commenced it’s journey on 11th November, 2002.
                ERA has developed Centralized Real Time, Web Based Core Banking
                Solution both for Conventional & Islamic, Agent Banking, Loan
                Originating & Approval System, HR & Payroll Management solution,
                ERP, Micro Finance solution, Mobile and System critical software
                for various business houses, including Banks, Multinational
                Companies and the Government.
              </small>
              <br />
              <br />

              <small style={{ color: "#fff" }}>
                We have a large team of internationally certified software
                professionals with knowledge in Oracle, Microsoft, Java, etc.
                ERA has been a pioneer in developing several software solutions
                in the country. IT solutions for the government like Ektee Bari
                Ektee Khamar (EBEK) have taken ERA’s capabilities to a different
                level and proves the diverse skill sets available in the
                company.
              </small>
              <br />
              <br />
              <small style={{ color: "#fff" }}>
                ERA has achieved CMMI (Capability Maturity Model Integration)
                Dev.Level 3, ISO-9001:2015 (Quality Management System) &
                ISO-27001:2013 (Information Security Management System). ERA is
                a member of Bangladesh Association of Software and Information
                Services (BASIS). ERA has achieved National Productivity &
                Quality Excellence Award 2015 from National Productivity
                Organization (NPO), Ministries of Industries, Government of The
                People’s Republic of Bangladesh. Also achieved Manthan Award,
                India, South Asia and Asia Pacific 2013 in Business and
                Financial Inclusion Category & International Leadership in
                Quality by BID, Paris, France. ERA is committed to deliver
                quality products and services to it’s valued clients.
              </small>
            </div>
          </div>

          {/* <div className="row mt-5 d-flex justify-content-center hvr-icon-grow-rotate">
            <div className="col-sm-12">
              <header
                style={{ fontFamily: "'Questrial', sans-serif", fontSize:"19px" }}
              >
                <i
                  class="fas fa-users hvr-icon"
                  style={{ color: "#899952" }}
                ></i>
                &nbsp; About The Team
              </header>
              <hr></hr>
            </div>
          </div> */}

          {/* <div className="row d-flex justify-content-around align-items-center">
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

              <p
                className="mt-3"
                style={{
                  lineHeight: "7px",
                  fontSize: "17px",
                  fontFamily: "'Lobstar', cursive",
                  color: "#5f7705",
                }}
              >
                <i class="fas fa-id-card"></i> Md. Mehedi Hasan
              </p>
              <p
                className=""
                style={{
                  lineHeight: "7px",
                  fontSize: "17px",
                  fontFamily: "'Acme', sans-serif",
                  color: "#595e5d",
                }}
              >
                <i class="fas fa-laptop-code"></i> Blockchain Developer
              </p>
              <p
                className=""
                style={{
                  lineHeight: "7px",
                  fontSize: "17px",
                  fontFamily: "'Acme', sans-serif",
                  color: "#595e5d",
                }}
              >
                <i class="fas fa-university"></i> ERA Infotech Ltd.
              </p>
              <p
                className=""
                style={{
                  lineHeight: "7px",
                  fontSize: "16px",
                  fontFamily: "'Acme', sans-serif",
                  color: "#595e5d",
                }}
              >
                <i class="far fa-envelope"></i> ishanmehadi@gmail.com
              </p>
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

              <p
                className="mt-3"
                style={{
                  lineHeight: "7px",
                  fontSize: "17px",
                  fontFamily: "'Lobstar', cursive",
                  color: "#5f7705",
                }}
              >
                <i class="fas fa-id-card"></i> Md. Monirul Islam
              </p>
              <p
                className=""
                style={{
                  lineHeight: "7px",
                  fontSize: "17px",
                  fontFamily: "'Acme', sans-serif",
                  color: "#595e5d",
                }}
              >
                <i class="fas fa-laptop-code"></i> Blockchain Developer
              </p>
              <p
                className=""
                style={{
                  lineHeight: "7px",
                  fontSize: "17px",
                  fontFamily: "'Acme', sans-serif",
                  color: "#595e5d",
                }}
              >
                <i class="fas fa-university"></i> ERA Infotech Ltd.
              </p>
              <p
                className=""
                style={{
                  lineHeight: "7px",
                  fontSize: "16px",
                  fontFamily: "'Acme', sans-serif",
                  color: "#595e5d",
                }}
              >
                <i class="far fa-envelope"></i> monirshimul@gmail.com
              </p>
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

              <p
                className="mt-3"
                style={{
                  lineHeight: "7px",
                  fontSize: "17px",
                  fontFamily: "'Lobstar', cursive",
                  color: "#5f7705",
                }}
              >
                <i class="fas fa-id-card"></i> Nahid Chowdhury
              </p>
              <p
                className=""
                style={{
                  lineHeight: "7px",
                  fontSize: "17px",
                  fontFamily: "'Acme', sans-serif",
                  color: "#595e5d",
                }}
              >
                <i class="fas fa-laptop-code"></i> Blockchain Developer
              </p>
              <p
                className=""
                style={{
                  lineHeight: "7px",
                  fontSize: "17px",
                  fontFamily: "'Acme', sans-serif",
                  color: "#595e5d",
                }}
              >
                <i class="fas fa-university"></i> ERA Infotech Ltd.
              </p>
              <p
                className=""
                style={{
                  lineHeight: "7px",
                  fontSize: "16px",
                  fontFamily: "'Acme', sans-serif",
                  color: "#595e5d",
                }}
              >
                <i class="far fa-envelope"></i> nahid.chowdhury1995@gmail.com
              </p>
            </div>
          </div> */}

          <div className="row d-flex justify-content-center mt-4">
            <div
              className="jumbotron hvr-underline-from-center hvr-shadow"
              style={{ backgroundColor: "#fff",boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}
            >
              <p
                style={{
                  fontFamily: "'Questrial', sans-serif", fontSize:"19px",
                  color: "#595e5d",
                  
                }}
              >
                About Project
              </p>
              <hr></hr>
              <p
                style={{
                  fontSize: "15px",
                  textAlign: "justify",
                  fontFamily: "'Martel Sans', sans-serif",
                }}
              >
                Holy Quran is a decentralized application build on top of
                Ethereum Blockchain. This version of Quran (The central
                religious text of Islam) is immutable, decentralized and
                fraud-proof. Our aim is to eventually deploy this
                proof-of-concept into production using Ethereum Main Net. Please
                contact us if you are interested to support this project by any
                means. Thank you.
              </p>
              <hr></hr>
            </div>
          </div>
          {/* <div className="row d-flex justify-content-center">
            <div
              className="jumbotron hvr-underline-from-center hvr-shadow"
              style={{ backgroundColor: "#fff",boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}
            >
              <p
                style={{
                  fontFamily: "'Satisfy', cursive",
                  fontSize: "25px",
                  color: "#595e5d",
                }}
              >
                About Ethereum Blockchain
              </p>
              <hr></hr>
              <p
                style={{
                  fontSize: "15px",
                  textAlign: "justify",
                  fontFamily: "'Martel Sans', sans-serif",
                }}
              >
                Ethereum is the most popular blockchain platform for DApps.
                Ethereum is a decentralized platform that allows us to build
                other blockchain-based DApps on top of it. In Ethereum, we build
                DApps using Ethereum smart contracts. Smart contracts are
                applications that run exactly as programmed without any
                possibility of downtime, censorship, fraud, or third-party
                interference. Ethereum can be thought of as a platform to deploy
                and run smart contracts.
              </p>
              <hr></hr>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
