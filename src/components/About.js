import React, { Component } from "react";
import Link from "react-router-dom";
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
              <a href="https://www.google.com">
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


            </div>
            <div className="col-sm-4  text-center">
              <a href="https://www.google.com">
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
            </div>
            <div className="col-sm-4  text-center">
              <a href="https://www.google.com">
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
            </div>
          </div>


          <div className="row d-flex justify-content-center mt-4">
            <div className="jumbotron hvr-underline-from-center hvr-shadow" style={{ backgroundColor: "#fff" }}>
              <p style={{ fontFamily: "'Satisfy', cursive", fontSize: "25px", color: "#595e5d" }}>
                About Project
            </p>
              <hr></hr>
              <p style={{ fontSize: "15px", textAlign: "justify", fontFamily: "'Martel Sans', sans-serif" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corrupti minus iusto aperiam, corporis ducimus, neque perferendis quos doloribus nulla quaerat tempore? Impedit unde ad officia veritatis cupiditate quibusdam at, enim aperiam neque culpa. Mollitia ipsum eos, quisquam praesentium iusto non eveniet deserunt, minima officiis, cumque officia unde quis? Suscipit, dignissimos sequi accusamus, esse minus fugiat assumenda asperiores, repudiandae alias corporis iste rem minima? Officia laboriosam explicabo iure! Sed ipsum cumque asperiores ut eveniet molestiae maxime doloribus perferendis, pariatur enim alias odio! Vitae beatae, alias velit voluptate excepturi quisquam expedita? Quas excepturi cum minus molestiae ipsum. Earum similique tempora cumque est autem, blanditiis culpa voluptate commodi saepe. Magnam nostrum odio eaque dignissimos! Tenetur, laborum? Provident quibusdam, cumque, neque temporibus repellat dolore omnis maxime veritatis recusandae qui alias atque sequi dolor beatae nostrum ut! Quia ipsam porro adipisci ea saepe maxime ducimus? Expedita suscipit nihil voluptatum reiciendis architecto quos adipisci, animi a, perspiciatis nemo nesciunt totam possimus ut consequuntur eaque in blanditiis nostrum harum quasi optio soluta consectetur. Ipsam delectus distinctio provident. Modi possimus debitis quasi consequuntur, obcaecati doloribus perferendis, commodi, dolorum architecto est praesentium harum accusantium eligendi iure ipsum quidem voluptatem repellendus quis hic dolore dolorem molestias consequatur facere! Sequi!
                </p>
              <hr></hr>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="jumbotron hvr-underline-from-center hvr-shadow" style={{ backgroundColor: "#fff" }}>
              <p style={{ fontFamily: "'Satisfy', cursive", fontSize: "25px", color: "#595e5d" }}>
                About Blockchain
        </p>
              <hr></hr>
              <p style={{ fontSize: "15px", textAlign: "justify", fontFamily: "'Martel Sans', sans-serif" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, consectetur velit! Repellat quam, architecto odit suscipit eligendi doloribus voluptatum aspernatur, consectetur in, dolores ad molestias autem sint reiciendis maxime illo esse perspiciatis! Quia est nostrum dolor quam eum maiores saepe. Quo laborum cumque dolor dicta natus soluta minima, fugiat incidunt animi odit illum doloribus repellendus ut aut accusamus assumenda. Voluptate doloribus accusantium maxime quis inventore beatae cupiditate velit adipisci neque illo reprehenderit, ipsam perferendis accusamus laborum doloremque. Est enim ullam minus. Molestiae hic, assumenda, natus ea facere laborum nostrum unde commodi quam beatae, quo est debitis? Magni voluptate consectetur ex autem ad illo, ut cum, aperiam ipsa veniam sit dolores provident tenetur ipsam id qui, praesentium quasi facilis quidem non. Exercitationem ea temporibus corporis aut aspernatur error eius harum velit consectetur ad, cum maxime nam veritatis quasi, voluptas ut quos dolores, itaque dolor explicabo consequatur perspiciatis voluptatibus ex? Possimus, voluptate.
                </p>
              <hr></hr>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
