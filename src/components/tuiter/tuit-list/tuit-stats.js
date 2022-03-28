import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({ type: 'like-tuit', tuit });
  };
  return (

    <div className="row pt-3">
      <div className="col-3">
        <i className="far fa-comment me-1"></i> {tuit.stats.comments}
      </div>
      <div className="col-3">
        <i className="fas fa-retweet me-1"></i> {tuit.stats.retuits}
      </div>
      <div className="col-3">
        <span onClick={likeTuit}>
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
        <i class="fas fa-external-link-alt"></i>
      </div>
    </div>
  );
}
export default TuitStats;