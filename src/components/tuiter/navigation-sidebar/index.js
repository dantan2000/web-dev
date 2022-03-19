import React from "react";
import elements from "./navElements.json";


const makeNavigationElement = ({
  elem = {
    "link": "home.html",
    "icon": "fas fa-home",
    "label": "Home"
  },
  active = 'explore'
}) => {
  return (
    <a className={`list-group-item ${elem.label.toLowerCase() === active.toLowerCase() ? " " + 'active' : ""}`} href={elem.link}>
      <div className="row">
        <div className="col-auto wd-nav-icon"><i className={elem.icon}></i></div>
        <div className="d-none d-xl-block col-auto">{elem.label}</div>
      </div>
    </a>
  )
}


const NavigationSidebar = ({
  active = 'explore'
}) => {
  return (
    <>
      <div className="list-group">
        <a className="list-group-item wd-nav-item" href="/">
          <div className="row">
            <div className="col-auto wd-nav-icon"><i className="fab fa-twitter"></i></div>
          </div>
        </a>
        {
          elements.map(elem => {
            return makeNavigationElement({elem, active});
          })
        }
      </div>
      <div className="d-grid mt-2">
        <a href="tweet.html"
          className="btn btn-primary btn-block rounded-pill">
          Tweet</a>
      </div>
    </>
  );
}
export default NavigationSidebar;