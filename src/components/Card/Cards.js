import React from "react";
import "./Card.css";

function Cards() {
  return (
    <>
      <div
        class="card col-3 col-md-3 mb-3 overflow-hidden m-auto p-0"
        style={{ width: "18rem" }}
      >
        <div className="card-img-top bg-dark" style={{ height: "150px" }}>
          {" "}
        </div>
        <div className="h-25 text-success py-1" style={{ background: "#333" }}>
          <h6 className="text-color text-center">John Doe</h6>
          <p className="text-white text-center">Graphic Designer</p>
        </div>
        <div>
          <p class="card-text text-center p-color">
            Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque
            mnesarchum eu.
          </p>
          <div className="row w-100 m-0 ">
            <div className="col text-center social-media">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div className="col text-center social-media">
              <i class="fab fa-twitter"></i>
            </div>
            <div className="col text-center social-media">
              <i class="fab fa-google-plus-g"></i>
            </div>
            <div className="col text-center social-media">
              <i class="fas fa-basketball-ball"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
