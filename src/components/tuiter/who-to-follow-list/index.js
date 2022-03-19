import WhoToFollowListItem from "./who-to-follow-list-item.js";
import who from "./who.json"

// const makeFollowList = (whoList) => {
//   let res = "";
//   whoList.forEach(w => {
//     res += WhoToFollowListItem(w);
//   });
//   return res;
// }


const WhoToFollowList = () => {
  return (
    <ul class="list-group">
    {
      who.map(who => {
        return (
          <WhoToFollowListItem who={who} />
        );
      })
    }
    </ul>
  );
}
export default WhoToFollowList;