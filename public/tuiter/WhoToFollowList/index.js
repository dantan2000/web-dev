import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const makeFollowList = (whoList) => {
  let res = "";
  whoList.forEach(w => {
    res += WhoToFollowListItem(w);
  });
  return res;
}


const WhoToFollowList = () => {
  return (`
            <ul class="list-group">
            ${makeFollowList(who)}
            </ul>
`);
}
export default WhoToFollowList;