import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import ExploreComponent from "./explore-component";
import WhoToFollowList from "../who-to-follow-list";
const ExploreScreen = () => {
    return (
        <div className="row mt-2">
            <div className="col-xl-2 col-auto px-0 wd-sidebar">
                <NavigationSidebar active="explore" />
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <ExploreComponent />
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList />
            </div>
        </div>
    );
};
export default ExploreScreen;
