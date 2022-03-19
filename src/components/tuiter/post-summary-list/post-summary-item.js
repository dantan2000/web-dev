const PostSummaryItem = (
  {
      post = {
          "topic": "Web Development",
          "userName": "ReactJS",
          "time": "2h",
          "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
          "image": "/tuiter/React-icon.png"
      }
  }
) => {
  return (
          <li className="list-group-item">
            <div className="row">
              <div className="col mt-2 wd-post-content pe-0">
                <div className="wd-post-topic">{post.topic}</div>
                <div>
                  <span className="wd-post-author">{post.userName} <i className="fas fa-check-circle"></i></span>
                  <span className="wd-post-timestamp"> - {post.time}</span>
                </div>
                <div className="wd-post-description">
                  {post.title}
                </div>
              </div>
              <div className="col-auto">
                <div className="wd-post-image">
                  <img src={post.image}/>
                </div>
              </div>
            </div>
          </li>
        );
}
export default PostSummaryItem;