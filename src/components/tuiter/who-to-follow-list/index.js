import WhoToFollowListItem from "./who-to-follow-list-item.js";
import {useSelector} from "react-redux";


const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
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