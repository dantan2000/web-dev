import elements from "./navElements.js";

const navItemClass = "wd-nav-item-active"

const makeNavigationElement = (elem) => {
  return `<a class="list-group-item wd-nav-item${elem.active ? " " + navItemClass : ""}" href='${elem.link}'>
        <div class="row">
          <div class="col-auto wd-nav-icon"><i class="${elem.icon}"></i></div>
          <div class="d-none d-xl-block col-auto">${elem.label}</div>
        </div>
      </a>`
}


const makeNavigationElements = (elems) => {
  var res = "";
  elems.forEach(elem => {
    res += makeNavigationElement(elem);
  });
  return res;
}


const NavigationSidebar = () => {
  return (`
          <div class="list-group">
              <a class="list-group-item wd-nav-item" href="/">
                <div class="row">
                  <div class="col-auto wd-nav-icon"><i class="fab fa-twitter"></i></div>
                </div>
              </a>
          ${makeNavigationElements(elements)}
          </div>
          <div class="d-grid mt-2">
              <a href="tweet.html"
                 class="btn btn-primary btn-block rounded-pill">
                  Tweet</a>
          </div>
  `);
}
export default NavigationSidebar;