import React from "react";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
  return (
            <div className="col-10 col-lg-7 col-xl-6">

              <div className="row mb-3">

                <div className="col-11 align-self-center">
                  <div className="input-group wd-rounded">
                    <span className="input-group-text bg-transparent"><i className="fas fa-search"></i></span>
                    <input type="text" className="form-control" placeholder="Search Twitter"/>
                  </div>
                </div>
                <div className="col-1 align-self-center">
                  <a className="mx-auto" id="setting-icon" href="explore-settings.html"><i className="fas fa-cog"></i></a>
                </div>
              </div>

              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="explore.html#">For You</a></li>
                <li className="nav-item">
                  <a className="nav-link" href="explore.html#">Trending</a></li>
                <li className="nav-item">
                  <a className="nav-link" href="explore.html#">News</a></li>
                <li className="nav-item">
                  <a className="nav-link" href="explore.html#">Sports</a></li>
                <li className="d-none d-md-block nav-item">
                  <a className="nav-link" href="explore.html#">Entertainment</a></li>
              </ul>

              <div>
                <div className="position-relative mt-2">
                  <h1 className="wd-image-title">SpaceX's Starship</h1>
                  <img src="/tuiter/Starship.jpg" className="w-100" alt=""/>
                </div>
              </div>

              
              <PostSummaryList/>

           </div>
    );
}
export default ExploreComponent;