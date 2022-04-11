import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";

import { deleteTuit }
  from "../../actions/tuits-actions";

const TuitListItem = (
  {
    tuit = {
      "_id": 123,
      "topic": "Web Development",
      "postedBy": {
        "username": "ReactJS"
      },
      "liked": true,
      "verified": false,
      "handle": "ReactJS",
      "time": "2h",
      "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
      "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "attachments": {
        "video": "unKvMC3Y1kI"
      },
      "logo-image": "../../../images/react-blue.png",
      "avatar-image": "../../../images/react-blue.png",
      "stats": {
        "comments": 123,
        "retuits": 234,
        "likes": 345
      }
    }
  }
) => {
  
  const dispatch = useDispatch();
  return (
    <>
      <li className="list-group-item" key={tuit._id}>
        <div className="row py-2 px-2 position-relative">
          <div className="col-auto">
            <img className="wd-profile-image rounded-circle" src={tuit["avatar-image"]} alt="" />
          </div>
          <div className="col wd-profile-description">
            <div className="row">
              <div className="col-11">
                <span className="wd-font-weight-bold">{tuit.postedBy.username} {tuit.verified ? <i className="fas fa-check-circle"></i> : <></>} </span>
                <span className="wd-profile-handle">@{tuit.handle}</span>
              </div>
              <div className="col-1">
                <i onClick={() =>
                  deleteTuit(dispatch, tuit)}
                  className="fas fa-times 
                  fa-pull-right"></i>
              </div>
            </div>
            <p>{tuit.tuit}</p>
            {
              (tuit.attachments && Object.keys(tuit.attachments).map(key => {
                switch (key) {
                  case 'video':
                    return <div className="ratio ratio-16x9 ">
                      <iframe className="wd-video-attachment" src={`https://www.youtube.com/embed/${tuit.attachments[key]}`} title={tuit.attachments[key]} allowFullScreen></iframe>
                    </div>
                  case 'image':
                    return <img className="wd-image-attachment" src={tuit.attachments[key]} alt="tuit"></img>
                  default:
                    return <></>
                }
              }))
            }
            <TuitStats tuit={tuit}/>
          </div>
        </div>
      </li>
    </>
  );
}
export default TuitListItem;