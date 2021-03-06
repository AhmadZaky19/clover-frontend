import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./index.css";
import { FormImage, MaskFormImage, LogoWhite } from "../../../assets/images";

class AuthLeft extends Component {
  render() {
    return (
      <>
        <div className="row__overlay">
          <Image src={MaskFormImage} alt="App" className="row__overlay--mask" />
          <span className="row__overlay--quote">
            <Image src={LogoWhite} className="row__overlay--logo" />
          </span>
          <span className="row__overlay--quote">
            <h1>
              Temukan developer <br />
              berbakat & terbaik <br />
              di berbagai bidang <br />
              keahlian
            </h1>
          </span>
        </div>
        <Image src={FormImage} alt="Landing page" className="row__image" />
      </>
    );
  }
}

export default AuthLeft;
