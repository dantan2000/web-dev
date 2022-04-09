import React, { useState } from "react";
import {useDispatch}
       from "react-redux";
import {
        createTuit 
       } from "../../actions/tuits-actions";
const WhatsHappening = () => {
  // let [whatsHappening, setWhatsHappening]
  //   = useState('');
  const [newTuit, setNewTuit] =
    useState({tuit: 'New tuit'});
  const dispatch = useDispatch();
  // const tuitClickHandler = () => {
  //   dispatch({type: 'create-tuit',
  //     tuit: whatsHappening
  //   });
  // }
  return (
    <div className="row py-2 px-4">
      <div className="col-1">
        <img className="wd-profile-image rounded-circle" src="../../../images/react-blue.png" alt="" />
      </div>
      <div className="col form-group">
        <textarea className="form-control bg-transparent wd-input-text-area" placeholder="What's happening?"
          onChange={(event) =>
            setNewTuit({...newTuit,
              tuit: event.target.value})}>
        </textarea>
        <hr />
        <div className="row">
          <div className="col-10 wd-form-icons">
            <i className="fas fa-image"></i>
            <i className="fas fa-chart-bar"></i>
            <i className="fas fa-smile"></i>
            <i className="far fa-calendar"></i>
          </div>
          <div className="col-2">
            <button className="btn-primary rounded-pill border-0 px-2 py-1" onClick={() => createTuit(dispatch, newTuit)}>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhatsHappening;