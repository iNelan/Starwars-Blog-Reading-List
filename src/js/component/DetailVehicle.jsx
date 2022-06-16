import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const DetailVehicle = () => {

  const {store, actions} = useContext (Context);
  const {theid} = useParams();

  console.log(store.infoVehicle);


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
                <h5 className="card-title">{store.infoVehicle[theid]?.name}</h5>
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
          <p className=""> {store.infoVehicle[theid]?.name} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> length: </p>
          <p className=""> {store.infoVehicle[theid]?.length} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Crew: </p>
          <p className=""> {store.infoVehicle[theid]?.crew} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Passengers: </p>
          <p className="mt-3"> {store.infoVehicle[theid]?.passengers} </p>
          
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Credit Cost: </p>
          <p className="mt-3"> {store.infoVehicle[theid]?.cost_in_credits} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Max.Speed: </p>
          <p className=""> {store.infoVehicle[theid]?.max_atmosphering_speed} </p>
        </div>
      </div>
    </div>
 
    </>
  );
  }

  export default DetailVehicle