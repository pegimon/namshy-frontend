import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import logo from '../../images/logo.png'

import { useNavigate } from "react-router-dom";

export function NavBar() {
  const navigate = useNavigate();
 
  const handleLinkClick = (href) => {
    navigate(href);
  };

  const linkStyle = {
    padding: "0.5rem 2.1rem",
    borderRight: "1px solid white",
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed={"top"} className="custom-navbar" style={{height: "60px", width: "100vw", backgroundColor: "#000",display:"flex","flex-direction":"row"}}>
        <Container fluid className="px-0" >
          <Nav >
            <Nav.Link
              style={{ marginLeft: "3%" }}
              onClick={() => {
                navigate("/Bag");
              }}
            >
              <ShoppingBagOutlinedIcon />
            </Nav.Link>
            {/* <Nav.Link href={"#cart"} style={{marginLeft:'3%'}} onClick={() => setShow(false)}><ShoppingBagOutlinedIcon /></Nav.Link>  */}
            <Nav.Link href={"/profile"}>
              <AccountCircleOutlinedIcon />
            </Nav.Link>
            <Nav.Link href={"/favorites"}>
              <FavoriteBorderOutlinedIcon />
            </Nav.Link>
            <div style={container}>
              <Nav.Link style={{ color: "black" }}>
                <SearchOutlinedIcon />
              </Nav.Link>
              <input
                style={{ border: "none", outline: "none", textAlign: "right" }}
              />
            </div>
            <Nav.Link
              href="/premiumCategory"
              style={{
                ...linkStyle,
                background:
                  window.location.pathname === "/premiumCategory" ? "white" : "transparent",
                color: window.location.pathname === "/premiumCategory" ? "black" : "white",
              }}
              onClick={() => handleLinkClick("/premiumCategory")}
            >
              Premium
            </Nav.Link>
            <Nav.Link
              href="/kids"
              style={{
                ...linkStyle,
                background: window.location.pathname === "/kids" ? "white" : "transparent",
                color: window.location.pathname === "/kids" ? "black" : "white",
              }}
              onClick={() => handleLinkClick("/kids")}
            >
              Kids
            </Nav.Link>
            <Nav.Link
              href="/beauty"
              style={{
                ...linkStyle,
                background:
                window.location.pathname === "/beauty" ? "white" : "transparent",
                color: window.location.pathname === "/beauty" ? "black" : "white",
                whiteSpace: "nowrap",
              }}
              onClick={() => handleLinkClick("/beauty")}
            >
              Beauty
            </Nav.Link>
            <Nav.Link
              href="/"
              style={{
                ...linkStyle,
                background: window.location.pathname === "/men" || window.location.pathname === '/' ? "white" : "transparent",
                color: window.location.pathname === "/men" || window.location.pathname === '/' ? "black" : "white",
              }}
              onClick={() => handleLinkClick("/men")}
            >
              Men
            </Nav.Link>
            <Nav.Link
              href="/women"
              style={{
                ...linkStyle,
                background: window.location.pathname === "/women" ? "white" : "transparent",
                color: window.location.pathname === "/women" ? "black" : "white",
              }}
              onClick={() => handleLinkClick("#women")}
            >
              Women
            </Nav.Link>
          </Nav>
          <Navbar.Brand href="/home">
            {/* <img src={logo} alt="logo"/> */}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
const container = {
  display: "flex",
  backgroundColor: "white",
  paddingRight: "3%",
  marginRight: "3%",
  marginLeft: "3%",
  borderRadius: 50,
};
