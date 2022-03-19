import React from "react";
import { Link } from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./who-to-follow-list";
import "./index.css";



const Tuiter = () => {
  return (
    <>
      <NavigationSidebar active="home" />
      <WhoToFollowList />
    </>
  )

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
