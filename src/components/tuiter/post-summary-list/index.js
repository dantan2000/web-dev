import posts from './posts.json';
import PostSummaryItem from './post-summary-item';



const PostSummaryList = () => {
  return (
            <ul class="list-group">
            {
              posts.map(post => {
                return <PostSummaryItem post={post}/>
              })
            }
            </ul>
);
}
export default PostSummaryList;