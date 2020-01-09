import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="text-center pt-3 pb-2 mt-5" style={{ background: "#52660e", borderTopLeftRadius: "25px",  borderTopRightRadius: "25px"}}>
        <p className="text-light">&copy; All rights reserved</p>
      </div>
    )
  }
}

export default Footer;
