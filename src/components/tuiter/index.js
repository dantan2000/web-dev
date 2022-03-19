import React from "react";
import { Link } from "react-router-dom";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryList from "./post-summary-list";
import ExploreComponent from "./explore-screen/explore-component";
import ExploreScreen from "./explore-screen";
import "./index.css";



const Tuiter = () => {
  return (
    <>
      <ExploreScreen />
      <h1>Tuiter</h1>
      <Link to="/hello">
        Hello
        </Link> |
      <Link to="/">
        Labs
        </Link>
    </>
  )

  // return (
  //   <>
  //     <NavigationSidebar active="home"/>
  //     <WhoToFollowList/>
  //     <PostSummaryList/>
  //     <ExploreComponent/>
  //   </>
  // )

  // return(
  //   <>
  //     <h1>Tuiter</h1>
  //     <Link to="/hello">
  //       Hello
  //     </Link> |
  //     <Link to="/">
  //       Labs
  //     </Link>
  //   </>
  // )

};

export default Tuiter;
