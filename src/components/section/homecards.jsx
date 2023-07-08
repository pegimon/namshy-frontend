import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { Container } from "react-bootstrap";
import * as product from "../../api/product";
export default function Homecards({ category_id, category_name }) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const handleButtonClick = (index) => {
    setSelectedCardIndex(index);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      await product.get_product_by_category(category_id).then((e) => {
        setProducts(e);
      });
    };
    getProducts();
  }, []);

  return (
    <div>
      <Container
        style={{
          justifyContent: "center",
          backgroundColor: "rgba(178, 182, 186, 0.219)",
          marginBottom: "3%",
          borderRadius: "30px",
        }}
      >
        <div
          style={{
            overflowY: "auto",
            height: "70px",
            textAlign: "left",
            display: "flex",
            "flex-direction": "row",
            justifyContent:"space-between"
          }}
        >
          <div style={{ display: "inline-flex", fontSize: "2rem" }}>
            <i class="bi bi-handbag-fill " style={{ marginLeft: "30px" }}></i>
            <h5 style={{ display: "inline-flex", padding: "13px" }}>
              {category_name}
            </h5>
          </div>
          <div style={{ display: "inline-flex", width: "100%", height: "75%" }}>
            <a
              className="btn btnfilter mx-2 d-flex"
              style={{
                hight: "80%",
                justifyContent: "center",

                backgroundColor: "rgba(178, 182, 186, 0.219)",
                borderRadius: "26px",
                border: "1.5px solid rgba(178, 182, 186, 0.219)",
                margin: "auto",
              }}
              href="#"
              role="button"
            >
              New Arrivals
            </a>

            <a
              className="btn btnfilter mx-2 d-flex"
              style={{
                hight: "80%",
                justifyContent: "center",
                display: "inline-block",
                backgroundColor: "rgba(178, 182, 186, 0.219)",
                borderRadius: "26px",
                border: "1.5px solid rgba(178, 182, 186, 0.219)",
                margin: "auto",
              }}
              href="#"
              role="button"
            >
              Clothing
            </a>
            <a
              className="btn btnfilter mx-2 d-flex"
              style={{
                hight: "80%",
                justifyContent: "center",
                display: "inline-block",
                backgroundColor: "rgba(178, 182, 186, 0.219)",
                borderRadius: "26px",
                border: "1.5px solid rgba(178, 182, 186, 0.219)",
                margin: "auto",
              }}
              href="#"
              role="button"
            >
              Shoes
            </a>
            <a
              className="btn btnfilter mx-2 d-flex"
              style={{
                hight: "80%",
                justifyContent: "center",
                display: "inline-block",
                backgroundColor: "rgba(178, 182, 186, 0.219)",
                borderRadius: "26px",
                border: "1.5px solid rgba(178, 182, 186, 0.219)",
                margin: "auto",
              }}
              href="#"
              role="button"
            >
              Bags
            </a>
            <a
              className="btn btnfilter mx-2 d-flex"
              style={{
                hight: "80%",
                justifyContent: "center",
                display: "inline-block",
                backgroundColor: "rgba(178, 182, 186, 0.219)",
                borderRadius: "26px",
                border: "1.5px solid rgba(178, 182, 186, 0.219)",
                margin: "auto",
              }}
              href="#"
              role="button"
            >
              Accessories
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-around flex-wrap">
          {products.map((product, index) => (
            <div
              className="card m-2"
              style={{
                border:
                  selectedCardIndex === index
                    ? "1px solid #58b368"
                    : "0.5px solid #C8D2D1",
                width: "288px",
                height: "320px",
              }}
              // style={{ width: "18rem", height: "320px" ,}}
              key={index}
            >
              <Carousel controls={false} style={{ justifyContent: "center" }}>
                {product.imageSrc.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block  "
                      style={{
                        width: "90%",
                        height: "250px",
                        margin: "auto",
                        "border-radius": "10px",
                      }}
                      src={image}
                      alt={""}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <div
                className="card-body my-2 d-flex   justify-content-between"
                style={{ fontSize: "15px", padding: "5px" }}
              >
                <div className="d-flex flex-column align-items-start ">
                  <Card.Title className="mb-0">{product.name}</Card.Title>
                  <Card.Text className="mb-0">Price: {product.price}</Card.Text>
                </div>
                <div>
                  <button
                    className="btn text-light   "
                    style={{ backgroundColor: "#7DCEA0", marginRight: "2px" }}
                    onClick={() => handleButtonClick(index)}
                  >
                    <i className="bi bi-heart"></i>
                  </button>

                  <button
                    className="btn text-light  "
                    style={{ backgroundColor: "#7DCEA0" }}
                    onClick={() => handleButtonClick(index)}
                  >
                    <i class="bi bi-plus-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
