import React, { useState } from "react";
import {useDispatch}
       from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
    = useState('');
 const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({type: 'create-tuit',
      tuit: whatsHappening
    });
  }
  return (
    <div className="row py-2 px-4">
      <div className="col-1">
        <img className="wd-profile-image rounded-circle" src="../../../images/react-blue.png" alt="" />
      </div>
      <div className="col form-group">
        <textarea className="form-control bg-transparent wd-input-text-area" value={whatsHappening} placeholder="What's happening?"
          onChange={(event) =>
            setWhatsHappening(event.target.value)}>
        </textarea>
        <hr />
        <div className="row">
          <div className="col-10 wd-form-icons">
            <i class="fas fa-image"></i>
            <i class="fas fa-chart-bar"></i>
            <i class="fas fa-smile"></i>
            <i class="far fa-calendar"></i>
          </div>
          <div className="col-2">
            <button className="btn-primary rounded-pill border-0 px-2 py-1" onClick={tuitClickHandler}>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhatsHappening;