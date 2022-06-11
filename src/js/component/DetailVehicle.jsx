import React from "react";

const DetailVehicle = () => {
  return (
    <>
      <div className="container">
        <div className="card mb-3" style={{ maxWidth: "540px;" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/12/27/1331767413572_2/star-wars-spaceships-x-wing.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h5 className="card-title">Character Info</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Características */}
    <div className="container">
    <hr style={{ color: "red", height: "2px" }} />
      <div className="d-flex justify-content-between">
        <span className="eyes text-danger fw-bold">Name</span>
        <span className="name text-danger fw-bold">Max. Speed</span>
        <span className="genre text-danger fw-bold">Dimension</span>
        <span className="height text-danger fw-bold">Affiliation</span>
        <span className="birth text-danger fw-bold">Appearences</span>
      </div>
    </div>
 
    </>
  );
  }

  export default DetailVehicle