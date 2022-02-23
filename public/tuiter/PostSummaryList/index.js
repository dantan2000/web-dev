import posts from './posts.js';
import PostSummaryItem from './PostSummaryItem.js';

const makePostSummaryList = (postList) => {
  let res = "";
  postList.forEach(p => {
    res += PostSummaryItem(p);
  });
  return res;
}


const PostSummaryList = () => {
  return (`
            <ul class="list-group">
            ${makePostSummaryList(posts)}
            </ul>
`);
}
export default PostSummaryList;