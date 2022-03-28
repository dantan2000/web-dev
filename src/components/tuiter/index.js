import React from "react";
import { Outlet } from "react-router-dom";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
// import PostSummaryList from "./post-summary-list";
// import ExploreComponent from "./explore-screen/explore-component";
import ExploreScreen from "./explore-screen";
import "./index.css";

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
const reducer = combineReducers({
  tuits: tuitsReducer, who: whoReducer
});
const store = createStore(reducer);;


const Tuiter = () => {
  return (
    <Provider store={store}>
      <div className="row mt-2">
          <div className="col-xl-2 col-auto px-0 wd-sidebar">
            <NavigationSidebar active="explore" />
          </div>
          <div className="col-10 col-lg-7 col-xl-6">
              <Outlet />
          </div>
          <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
              <WhoToFollowList />
          </div>
      </div>
    </Provider>
  )

};

export default Tuiter;
