import PostSummaryList from "/tuiter/PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`
            <div class="col-10 col-lg-7 col-xl-6 wd-content">

              <div class="row mb-3">

                <div class="col-11 align-self-center">
                  <div class="input-group wd-rounded">
                    <span class="input-group-text bg-transparent"><i class="fas fa-search"></i></span>
                    <input type="text" class="form-control" placeholder="Search Twitter">
                  </div>
                </div>
                <div class="col-1 align-self-center">
                  <a class="mx-auto" id="setting-icon" href="explore-settings.html"><i class="fas fa-cog"></i></a>
                </div>
              </div>

              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="explore.html#">For You</a></li>
                <li class="nav-item">
                  <a class="nav-link" href="explore.html#">Trending</a></li>
                <li class="nav-item">
                  <a class="nav-link" href="explore.html#">News</a></li>
                <li class="nav-item">
                  <a class="nav-link" href="explore.html#">Sports</a></li>
                <li class="d-none d-md-block nav-item">
                  <a class="nav-link" href="explore.html#">Entertainment</a></li>
              </ul>

              <div>
                <div class="position-relative mt-2">
                  <h1 class="wd-image-title">SpaceX's Starship</h1>
                  <img src="/tuiter/Starship.jpg" class="w-100">
                </div>
              </div>

              ${PostSummaryList()}

           </div>
    `);
}
export default ExploreComponent;