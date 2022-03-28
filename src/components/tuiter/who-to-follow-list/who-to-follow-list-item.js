const WhoToFollowListItem = (
  {
      who = {
          avatarIcon: '../../../images/nasa.png',
          userName: 'NASA',
          handle: 'NASA',
          verified: true
      }
  }
) => {
  return (
          <li className="list-group-item">
            <div className="row py-2 px-2 position-relative">
              <div className="col-auto">
                <img className="wd-profile-image rounded-circle" src={who.avatarIcon} alt=""/>
              </div>
              <div className="col wd-profile-description">
                <div className="wd-font-weight-bold">{who.userName} {who.verified? <i className="fas fa-check-circle"></i> : <></>}</div>
                <div className="wd-profile-handle">{who.handle}</div>
              </div>
              <div className="col-auto wd-profile-button-wrapper">
                <button className="btn btn-primary rounded-pill py-0">
                    Follow
                </button>
              </div>
            </div>
          </li>
  );
}
export default WhoToFollowListItem;