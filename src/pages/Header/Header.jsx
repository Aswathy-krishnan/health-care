import React, { useState } from "react";
import "../../pages/Header/header.css";
import health from "../../images/health.png";
import Button from "react-bootstrap/Button";
import banner from "../../images/banner.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
function Header() {
  const [show, setShow] = useState(false);
  const headerDetails = [
    "Home",
    "About Us",
    "Specialities",
    "Doctors",
    "Contact Us",
  ];
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <div className="header-section">
        <div className="header-sec-1 mt-3">
          <div className="header-sub-sec-1 ">
            <img src={health} alt="" className="header-image" />
          </div>
          <div>
            <i
              className="bi bi-list c-pointer d-xl-none"
              onClick={() => setShow(!show)}
            ></i>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
          </div>
          <div className="header-sub-sec-2 d-none d-xl-flex">
            {headerDetails.map((x, i) => (
              <div key={i}>{x}</div>
            ))}
          </div>
          <div className="header-sub-sec-3 d-none d-xl-flex">
            <div className="language-button">
              <Button className="s-bg-c">English</Button>{" "}
              <Button className="arabic-button">Arabic</Button>{" "}
            </div>
            <Button className="header-button s-bg-c">
              Book an Appointment
            </Button>{" "}
          </div>
        </div>
        <div className="header-heading">
          <h1>YOUR TRUSTED CLINIC FOR</h1>
          <h1>COMPREHENSIVE WELLNESS</h1>
        </div>
        <img src={banner} alt="" className="banner-image" />
      </div>
    </div>
  );
}

export default Header;
