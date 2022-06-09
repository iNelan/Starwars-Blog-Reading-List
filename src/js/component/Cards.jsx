import React from "react";
import { Link } from "react-router-dom";

export const Cards = () => {
  return (
    
      <div className="card me-3" style={{width: "18rem"}}>
        <img src="https://picsum.photos/id/237/400/200" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="cardt-itle">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    
  );
};
