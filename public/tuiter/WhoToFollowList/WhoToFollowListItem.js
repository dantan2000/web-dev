const WhoToFollowListItem = (who) => {
  return (`
          <li class="list-group-item">
            <div class="row py-2 px-2 position-relative">
              <div class="col-auto">
                <img class="wd-profile-image rounded-circle" src="${who.avatarIcon}">
              </div>
              <div class="col wd-profile-description">
                <div class="wd-font-weight-bold">${who.userName}${who.verified? ' <i class="fas fa-check-circle">' : ''}</i></div>
                <div class="wd-profile-handle">${who.handle}</div>
              </div>
              <div class="col-auto wd-profile-button-wrapper">
                <button class="btn btn-primary rounded-pill py-0">
                    Follow
                </button>
              </div>
            </div>
          </li>
  `);
}
export default WhoToFollowListItem;