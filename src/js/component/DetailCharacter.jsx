import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



const DetailCharacter = () => {

  const {store} = useContext (Context);
  const {theid} = useParams();

  console.log(store.infoCharacter);


  return (
    <>
      <div className="container">
        <div className="card mb-3" style={{ maxWidth: "540px;" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://w0.peakpx.com/wallpaper/297/34/HD-wallpaper-rise-of-skywalker-poster-rise-of-skywalker.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h5 className="card-title">{store.infoCharacter[theid]?.name}</h5>
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
    <div className="container">
    <div className="lineaSeparadora bg-danger mt-4 mb-4"> </div>
      <div className="row text-center text-danger fw-bolder">
        <div className="col-2 r">
          <p className="fw-bolder"> Name: </p>
          <p className=""> {store.infoCharacter[theid]?.name} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Gender: </p>
          <p className=""> {store.infoCharacter[theid]?.gender} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Mass: </p>
          <p className=""> {store.infoCharacter[theid]?.mass} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Height: </p>
          <p className="mt-3"> {store.infoCharacter[theid]?.height} </p>
          
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Hair Color: </p>
          <p className="mt-3"> {store.infoCharacter[theid]?.hair_color} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Eye Color: </p>
          <p className=""> {store.infoCharacter[theid]?.eye_color} </p>
        </div>
      </div>
    </div>
    </div>
 
    </>
  );
  }

  export default DetailCharacter