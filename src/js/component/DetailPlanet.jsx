import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const DetailPlanet = () => {
  const {store} = useContext (Context);
  const {theid} = useParams();

  console.log(store.infoPlanet);

  return (
    <>
      <div className="container">
        <div className="card mb-3" style={{ maxWidth: "540px;" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/CVCXG6SP6BPCXCQQ5HSYWS3MM4.png" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h5 className="card-title">{store.infoPlanet[theid]?.name}</h5>
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
    <div className="lineaSeparadora bg-danger mt-4 mb-4"> </div>
      <div className="row text-center text-danger fw-bolder">
        <div className="col-2 r">
          <p className="fw-bolder"> Name: </p>
          <p className=""> {store.infoPlanet[theid]?.name} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Climate </p>
          <p className=""> {store.infoPlanet[theid]?.climate} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Population </p>
          <p className=""> {store.infoPlanet[theid]?.population} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Orbital P: </p>
          <p className="mt-3"> {store.infoPlanet[theid]?.orbital_period} </p>
          
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Rotation P: </p>
          <p className="mt-3"> {store.infoPlanet[theid]?.rotation_period} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Diameter: </p>
          <p className=""> {store.infoPlanet[theid]?.diameter} </p>
        </div>
      </div>
    </div>
 
    </>
  );
  }

  export default DetailPlanet