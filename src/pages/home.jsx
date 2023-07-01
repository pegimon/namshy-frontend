import React from "react";
import Homeslider from "../components/section/homeslider";
import { Container } from "react-bootstrap";
import Homecards from "../components/section/homecards";
import { HomeScards } from "../components/section/homecards";
import "../components/section/slider.css";
export default function Home() {
  return (
    <div
      className="homee"
      style={{ height: "fit-content", position: "relative", top: "70px" }}
    >
      <div
        className="d-flex"
        style={{ height: "500px", justifyContent: "center" }}
      >
        <Homeslider></Homeslider>
      </div>

      <Container
        className=" my-4"
        style={{ justifyContent: "center", backgroundColor: "white" }}
      >
        <div>
          <div className="" style={{ height: "70px", textAlign: "left" }}>
            <div
              className="col-2"
              style={{ display: "inline-flex", fontSize: "2rem" }}
            >
              <i class="bi bi-handbag-fill " style={{ marginLeft: "30px" }}></i>
              <h5 style={{ padding: "13px" }}>Hot Sale</h5>
            </div>
            <div
              className=" col-9"
              style={{ display: "flex", display: "inline-flex" }}
            >
              <a
                className="btn btnfilter  mx-2 d-flex"
                style={{
                  backgroundColor: "rgba(178, 182, 186, 0.219)",
                  borderRadius: "26px",
                  border: "1.5px solid rgba(178, 182, 186, 0.219)",
                }}
                href="#"
                role="button"
              >
                Hot sale
              </a>

              <a
                className="btn  btnfilter  mx-2"
                style={{
                  backgroundColor: "rgba(178, 182, 186, 0.219)",
                  borderRadius: "26px",
                  border: "1.5px solid rgba(178, 182, 186, 0.219)",
                }}
                href="#"
                role="button"
              >
                Electronics
              </a>
              <a
                className="btn btnfilter mx-2"
                style={{
                  backgroundColor: "rgba(178, 182, 186, 0.219)",
                  borderRadius: "26px",
                  border: "1.5px solid rgba(178, 182, 186, 0.219)",
                }}
                href="#"
                role="button"
              >
                Beauty
              </a>
              <a
                className="btn btnfilter mx-2"
                style={{
                  backgroundColor: "rgba(178, 182, 186, 0.219)",
                  borderRadius: "26px",
                  border: "1.5px solid rgba(178, 182, 186, 0.219)",
                }}
                href="#"
                role="button"
              >
                Home
              </a>
              <a
                className="btn btnfilter mx-2"
                style={{
                  backgroundColor: "rgba(178, 182, 186, 0.219)",
                  borderRadius: "26px",
                  border: "1.5px solid rgba(178, 182, 186, 0.219)",
                }}
                href="#"
                role="button"
              >
                Accessories
              </a>
              <a
                className="btn btnfilter mx-2"
                style={{
                  backgroundColor: "rgba(178, 182, 186, 0.219)",
                  borderRadius: "26px",
                  border: "1.5px solid rgba(178, 182, 186, 0.219)",
                }}
                href="#"
                role="button"
              >
                Shoes
              </a>
            </div>
          </div>
          <div className="" style={{ height: "fit-content" }}>
            <HomeScards></HomeScards>
          </div>
        </div>
      </Container>

      <Container className="my-4  " style={{ justifyContent: "center" }}>
        <div>
          <div className="" style={{ height: "fit-content" }}>
            <Homecards></Homecards>
          </div>
        </div>
      </Container>
    </div>
  );
}
