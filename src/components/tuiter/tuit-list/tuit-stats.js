import { useDispatch } from "react-redux";
import { updateTuit } from "../../actions/tuits-actions"

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const likeTuit = (tuit) => {
    if (tuit.liked) {
      tuit.liked = false;
      tuit.stats.likes = tuit.stats.likes - 1;
    } else {
      tuit.liked = true;
      tuit.stats.likes = tuit.stats.likes + 1;
    }
    return tuit;
  };
  const dislikeTuit = (tuit) => {
    if (tuit.disliked) {
      tuit.disliked = false;
      tuit.stats.dislikes = tuit.stats.dislikes - 1;
    } else {
      tuit.disliked = true;
      tuit.stats.dislikes = tuit.stats.dislikes + 1;
    }
    return tuit;
  }
  return (

    <div className="row pt-3">
      <div className="col-3">
        <i className="far fa-comment me-1"></i> {tuit.stats && tuit.stats.comments}
      </div>
      <div className="col-3">
        <i className="fas fa-retweet me-1"></i> {tuit.stats && tuit.stats.retuits}
      </div>
      <div className="col-3">
        <span onClick={() => updateTuit(dispatch, likeTuit(tuit))}>
          {
            tuit.liked &&
            <i className="fas fa-heart me-1"
              style={{ color: 'red' }}></i>
          }
          {
            !tuit.liked &&
            <i className="far fa-heart me-1"></i>
          }
          {tuit.stats && tuit.stats.likes}
        </span>
      </div>
      <div className="col-3">
        <span onClick={() => updateTuit(dispatch, dislikeTuit(tuit))}>
          {
            tuit.disliked &&
            <i className="fas fa-thumbs-down me-1"
              style={{ color: 'blue' }}></i>
          }
          {
            !tuit.disliked &&
            <i className="far fa-thumbs-down me-1"></i>
          }
          {tuit.stats && tuit.stats.dislikes}
        </span>
      </div>
      <div className="col-3">
        <i className="fas fa-external-link-alt"></i>
      </div>
    </div>
  );
}
export default TuitStats;