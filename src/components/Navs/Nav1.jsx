import React,{useState} from "react";
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
  const [query, setQuery] = useState("");
  const handleLinkClick = (href) => {
    navigate(href);
  };

  const linkStyle = {
    padding: "0.5rem 2.1rem",
    borderRight: "1px solid white",
  };

  return (
    <div>
      <div style={{height: "60px", width: "100vw", backgroundColor: "rgb(0, 0, 0)"}}>
        <Container fluid className="px-0">
          
          <Nav className="me-auto hider" style={{display: "flex", flexWrap:"nowrap", alignItems: "center", justifyContent: "center", width: "100vw"
          
          ,overflowY:"auto"
          }}>
          <Nav.Link style={{paddingLeft: "50px"}}  href={"/profile"}>
              <AccountCircleOutlinedIcon style={{color: "#fff"  }}/>
          </Nav.Link>
          <Nav.Link style={{paddingLeft: "20px"}} onClick={() => {
                navigate("/Bag");
              }}>
              <ShoppingBagOutlinedIcon style={{color: "#fff"  }}/>
          </Nav.Link>
          <Nav.Link href={"/favorites"}  style={{paddingLeft: "20px"}}>
              <FavoriteBorderOutlinedIcon style={{color: "#fff" }} />
            </Nav.Link>


            <div style={container}>
              <Nav.Link style={{ color: "#fff"}}>
                <SearchOutlinedIcon style={{color: "#000"}}/>
              </Nav.Link>
              <input
                style={{ color: "#000", border: "none", outline: "none", textAlign: "right", background: "#fff", borderRadius: "25px", width: "100%"}}
                value={query}
                onChange={(e)=>{setQuery(e.target.value)}}
              />
            </div>
            {/* <Nav.Link href={"#cart"} style={{marginLeft:'3%'}} onClick={() => setShow(false)}><ShoppingBagOutlinedIcon /></Nav.Link>  */}

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

            <Navbar.Brand>
            {<div style={imageNav}>
              <i onClick={() => {
              navigate("/", {replace: true});
            }} height={"50px"} width={"60px"} style={{marginRight: "25px"}}> الذئب</i>
              </div>}
          </Navbar.Brand>
          </Nav>
          
          
        </Container>
      </div>
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
const imageNav = {
  width: "25vw",
  display: "flex",
  justifyContent: "flex-end",

  color:"#fff"
};