import { products } from "./prodlist";
import React, { useState } from "react";
import "./slider.css";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function CardsSlider() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    navigate(`/SelectedProductPage/${product.id}`);
  };

  return (
    <div className="containe d-flex mx-1">
      {products.map((product) => (
        <div
          className="card my-1"
          key={product.id}
          
        >
          <div className="carousel-wrapper" onClick={() => handleImageClick(product)}>
            <div className="FavoriteBorderOutlinedIcon d-flex flex-column custom-style">
              <i className="bi bi-heart"></i>
            </div>
            <Carousel controls={false}>
              {product.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={image.alt}
                  />
                  <div className="caption position-absolute bottom-0 w-100 p-3">
                    <p className="mb-0">This item is added to your cart</p>
                    <div className="d-flex justify-content-center align-content-center gap-1">
                      {product.size.map((size, _) => (
                        <button
                          key={size}
                          className="btn btn-outline-secondary custom-style"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div
            className="card-body my-2 d-flex"
            style={{ fontSize: "15px", padding: "0px" }}
          >
            <div className=" mx-2 my-3 d-flex flex-column align-items-start">
           
              <Card.Title className="mb-0">{product.productname}</Card.Title>
              <Card.Text className="mb-0">Price: {product.price}</Card.Text>
              <Card.Text> {product.color}</Card.Text>
            </div>
            <span className=" my-2 h-50 " style={{ textAlign: "center" }}>
              <button
                className="btn text-light my-4 mx-2 h-100 w-100"
                style={{ backgroundColor: "#7DCEA0" }}
              >
                Add To Bag
              </button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
