const PostSummaryItem = (post) => {
  return `
          <li class="list-group-item">
            <div class="row">
              <div class="col mt-2 wd-post-content pe-0">
                <div class="wd-post-topic">${post.topic}</div>
                <div>
                  <span class="wd-post-author">${post.userName} <i class="fas fa-check-circle"></i></span>
                  <span class="wd-post-timestamp"> - ${post.time}</span>
                </div>
                <div class="wd-post-description">
                  ${post.title}
                </div>
              </div>
              <div class="col-auto">
                <div class="wd-post-image">
                  <img src="${post.image}">
                </div>
              </div>
            </div>
          </li>
        `;
}
export default PostSummaryItem;